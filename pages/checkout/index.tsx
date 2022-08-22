import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";
import { Cart } from "../../network/gateway/Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import useUserStore from "../../zustand/store";
import shallow from "zustand/shallow";
import Toast from "../../utils/Toast";
import { Address } from "../../network/gateway/Address";
import AddressList from "../../app/components/common/AddressList";
import OfferCard from "../../app/components/checkout/OfferCard";
import CheckoutCartItem from "../../app/components/checkout/CheckoutCartItem";
import PromoCode from "../../app/components/checkout/PromoCode";
import EmptyCart from "../../app/components/checkout/EmptyCart";
import CheckoutStepA from "../../app/components/checkout/CheckoutStepA";
import CheckoutStepC from "../../app/components/checkout/CheckoutStepC";
import CheckoutStepB from "../../app/components/checkout/CheckoutStepB";

const CheckoutScreen: NextPage = () => {
  const [openTab, setOpenTab] = useState<number>(1);
  // const { slug, id } = router.query;
  let [customerId, setCustomerId] = useState<string>("");
  let [showAddress, setShowAddress] = useState<boolean>(false);
  let [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);
  let [fields, setField] = useState<any>({
    company_name: "",
    county: "Sunnyville",
    country: "INDIA",
  });
  let [addressFields, setAddressFields] = useState<any>({
    type: "address",
    county: "Sunnyville",
    country: "IN",
  });
  const [grandTotal, setGrandTotal] = useState("");
  const [allAddress, setAllAddress] = useState<any>([]);

  useEffect(() => {
    let customer_id: any = LocalStorageService.getCustomerId();
    setCustomerId(customer_id);
    return () => { };
  }, []);
  const isLogin = useUserStore((state: any) => state.isLogin, shallow);
  const setLoginPopup = useUserStore((state: any) => state.showLogin);

  useEffect(() => {
    if (isLogin) {
      getCustomerCart();

      getAddress();
    } else {
      setLoginPopup(true);
    }
  }, [isLogin]);

  function getCustomerCart() {
    Cart.getInstance()
      .getCustomerCart()
      .then((info: any) => {
        setLoading(true)
        setCartItems(info.data.data);
        setGrandTotal(info?.data.grandTotal);
      });
  }
  function getAddress() {
    Address.getInstance()
      .getAllAddress()
      .then((data: any) => {
        setAllAddress(data?.data.data)
        //console.log("this is all Address", data)
      });
  }
  const handleChange = (e: any) => {
    fields[e.target.name] = e.target.value;
    addressFields[e.target.name] = e.target.value;

  };
  function validateForm() {
    let formIsValid = true;
    if (!fields["first_name"]) {
      formIsValid = false;
      Toast.showError("*Please enter your First Name.");
    } else if (!fields["last_name"]) {
      formIsValid = false;
      Toast.showError("*Please Enter Your Last Name.");
    } else if (!fields["line_1"]) {
      formIsValid = false;
      Toast.showError("*Please Enter Your Address.");
    } else if (!fields["city"]) {
      formIsValid = false;
      Toast.showError("*Please Enter Your City.");
    } else if (!fields["postcode"]) {
      formIsValid = false;
      Toast.showError("*Please Enter Your Postal Code.");
    }
    return formIsValid;
  }

  function removeCart(id: any, index: any) {
    Cart.getInstance()
      .deleteCartItem(id)
      .then((response: any) => {
        if (response.statusText === "OK") {
          let newCartItem = cartItems;
          newCartItem.splice(index, 1);
          setCartItems([...newCartItem]);

        }
      });
  }

  function paymentMethod() {
    let validationFunction = validateForm();
    if (validationFunction) {
      setOpenTab(openTab == 3 ? 0 : 3);
    }
  }
  function checkout(e: any) {
    e.preventDefault();
    let validationFunction = validateForm();
    if (validationFunction) {
      addAddress();

    }
  }
  function addAddress() {
    if (isLogin && validateForm()) {
      const param = {
        data: addressFields,
      };
      Address.getInstance()
        .addAddress(param)
        .then((data: any) => {
          //console.log("this is address", data.data)
          setAllAddress([...allAddress, data.data.data])
        })
        .catch((error) => {
          console.log("error", error);
        });

    } else {
      setLoginPopup(true);
    }

  }
  function deleteAddress(id: any, index: any) {
    Address.getInstance()
      .deleteAddress(id)
      .then((response: any) => {
        if (response.statusText === "OK") {
          let newAllAddress = allAddress
          newAllAddress.splice(index, 1);
          setAllAddress([...newAllAddress]);
          //.log("this is all address after delete", allAddress)
          if (newAllAddress.length === 0) {
            setShowAddress(false);
          }
        }
      });
  }

  function renderAddressList() {
    return (
      <AddressList
        isVisible={showAddress}
        data={allAddress}
        onClose={() => {
          setShowAddress(false);
        }}
        onSelect={(id) => {
          setShowAddress(false);
          setAddressFields(allAddress[id])
          setField(allAddress[id])
        }}
        deleteAddress={deleteAddress}
      />
    );
  }
  return (
    <div className="shoppingCart checkoutPage">
      <div className="wrapper">
        {/* Header */}
        <Header />
        {renderAddressList()}
        {/* End Header */}
        <section className="cartItem  mt-4 mt-md-5">
          <h1 className="fs-40 font-b text-color-2 list-inline-item">
            Checkout
          </h1>
          <div className="row">
            <div className="col-md-12 col-lg-8 mt-4">
              <div className="accordion" id="accordionExample">
                {cartItems?.length != 0 && (
                  <>
                    <CheckoutStepA isLogin={isLogin} />
                    <CheckoutStepB handleChange={handleChange}
                      checkout={checkout}
                      paymentMethod={paymentMethod}
                      addressFields={addressFields}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      allAddress={allAddress}
                      setShowAddress={setShowAddress}
                    />
                    <CheckoutStepC
                      customerId={customerId}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      fields={fields}
                      validateForm={validateForm}
                      addAddress={addAddress}
                    />
                  </>
                )}
                <EmptyCart cartItems={cartItems} loading={loading} />
              </div>
            </div>
            {cartItems?.length != 0 && (
              <div className="col-md-12 col-lg-4">
                <OfferCard />
                <CheckoutCartItem cartItems={cartItems} removeCart={removeCart} grandTotal={grandTotal} />
                <PromoCode />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutScreen;
