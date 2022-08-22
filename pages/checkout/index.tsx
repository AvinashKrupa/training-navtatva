import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";
import { Cart } from "../../network/gateway/Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import useUserStore from "../../zustand/store";
import shallow from "zustand/shallow";
import Toast from "../../utils/Toast";
import { Address } from "../../network/gateway/Address";
import { Auth } from "../../network/gateway/Auth";
import AddressList from "../../app/components/common/AddressList";
import OfferCard from "../../app/components/checkout/OfferCard";
import CheckoutCartItem from "../../app/components/checkout/CheckoutCartItem";
import PromoCode from "../../app/components/checkout/PromoCode";
import EmptyCart from "../../app/components/checkout/EmptyCart";
import CheckoutStepA from "../../app/components/checkout/CheckoutStepA";
import CheckoutStepC from "../../app/components/checkout/CheckoutStepC";

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
  let [addressFields, AddressFieldsetField] = useState<any>({
    type: "address",
    county: "Sunnyville",
    country: "IN",
  });
  const [grandTotal, setGrandTotal] = useState("");
  const [afterCartItems, setAfterCartItems] = useState<Number>();
  const [customerData, setCustomerData] = useState<any>();
  const ISSERVER = typeof window === "undefined";
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
      getCustomerData();
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
        //console.log("this is")
      });
  }

  function getCustomerData() {
    Auth.getInstance()
      .getCustomerData()
      .then((data: any) => {
        //console.log("this is  customer data",data)
        setCustomerData(data?.data);
      });
  }
  function getAddress() {
    Address.getInstance()
      .getAllAddress()
      .then((data: any) => {
        setAllAddress(data?.data)
        console.log("this is all Address", data?.data)

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
        setAfterCartItems(response.data.data.length);
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
      //setOpenTab(openTab == 3 ? 0 : 3);
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
          //console.log("this is add Addrsss data", data.data);
          setAllAddress([...allAddress, data])


        })
        .catch((error) => {
          console.log("error", error);
        });
      //  console.log("this is addaddress fields", param);
    } else {
      setLoginPopup(true);
    }
  }

  function updateAddress() {
    //setOpenTab(openTab == 2 ? 0 : 2)
  }
  function deleteAddress(id: any, index: any) {
    //console.log("this is delete address",id,index)
    Address.getInstance()
      .deleteAddress(id)
      .then((response: any) => {
        if (response.statusText === "OK") {
          // setStoreFiles([...prevFiles.slice(0, index), ...prevFiles.slice(index +
          //   1)])
          let newAllAddress = allAddress.data;
          newAllAddress.splice(index, 1);
          setAllAddress([...newAllAddress]);

        }
      });



  }
  //console.log("this is addddd", allAddress.data)

  function renderAddressList() {
    const address = [
      {
        id: "2786812a-0bc9-4aaf-a73d-6799d5699876",
        type: "address",
        name: "",
        first_name: "chap",
        last_name: "Swanson",
        company_name: "",
        phone_number: "",
        line_1: "1 Sunny Street",
        line_2: "2342342",
        city: "Sunny Town",
        postcode: "SU33 1YY",
        county: "Sunnyville",
        region: "",
        country: "GB",
        instructions: "",
        links: {
          self: "https://api.moltin.com/v2/addresses/2786812a-0bc9-4aaf-a73d-6799d5699876",
        },
        meta: {
          timestamps: {
            created_at: "2022-08-18T07:42:55.966Z",
            updated_at: "2022-08-18T07:42:55.966Z",
          },
        },
      },
      {
        id: "2786812a-0bc9-4aaf-a73d-6799d5699876",
        type: "address",
        name: "",
        first_name: "chap",
        last_name: "Swanson",
        company_name: "",
        phone_number: "",
        line_1: "1 Sunny Street",
        line_2: "2342342",
        city: "Sunny Town",
        postcode: "SU33 1YY",
        county: "Sunnyville",
        region: "",
        country: "GB",
        instructions: "",
        links: {
          self: "https://api.moltin.com/v2/addresses/2786812a-0bc9-4aaf-a73d-6799d5699876",
        },
        meta: {
          timestamps: {
            created_at: "2022-08-18T07:42:55.966Z",
            updated_at: "2022-08-18T07:42:55.966Z",
          },
        },
      },
      {
        id: "2786812a-0bc9-4aaf-a73d-6799d5699876",
        type: "address",
        name: "",
        first_name: "chap",
        last_name: "Swanson",
        company_name: "",
        phone_number: "",
        line_1: "1 Sunny Street",
        line_2: "2342342",
        city: "Sunny Town",
        postcode: "SU33 1YY",
        county: "Sunnyville",
        region: "",
        country: "GB",
        instructions: "",
        links: {
          self: "https://api.moltin.com/v2/addresses/2786812a-0bc9-4aaf-a73d-6799d5699876",
        },
        meta: {
          timestamps: {
            created_at: "2022-08-18T07:42:55.966Z",
            updated_at: "2022-08-18T07:42:55.966Z",
          },
        },
      },
    ]

    return (
      <AddressList
        isVisible={showAddress}
        data={allAddress.data}
        onClose={() => {
          setShowAddress(false);
        }}
        onSelect={(id) => {
          setShowAddress(false);
          //console.log("this is index",id)
          setField(allAddress.data[id])
          console.log("this is array list ", fields)

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
          {/* {cartItems.length >= 1 ? <> */}
          <h1 className="fs-40 font-b text-color-2 list-inline-item">
            Checkout
          </h1>
          <div className="row">
            <div className="col-md-12 col-lg-8 mt-4">
              <div className="accordion" id="accordionExample">
                {cartItems?.length != 0 && (
                  <>
                    <CheckoutStepA isLogin={isLogin} />
                    <div className="accordion-item bgbar ms-0">
                      <h2
                        className="accordion-header"
                        id="headingTwo"
                        onClick={() => setOpenTab(openTab == 2 ? 0 : 2)}
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <button
                              className="accordion-button font-sb collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <span className="wordtype">B</span> SHIPPING ADDRESS
                            </button>
                          </div>
                          {allAddress?.data?.length !== 0 && <div
                            className="col-md-6"
                            style={{ alignItems: "flex-end" }}
                          >
                            <button
                              className="btn fs-14 float-end"
                              type="button"
                              style={{ marginTop: 8 }}
                              onClick={(event) => {
                                event.preventDefault();
                                setShowAddress(true);
                              }}
                            >
                              Select Address
                            </button>
                          </div>}
                        </div>
                      </h2>

                      <div
                        id="collapseTwo"
                        className={
                          "accordion-collapse collapse " +
                          (openTab == 2 ? "show" : "")
                        }
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <form>
                            <div className="row mt-4 mt-md-0">
                              <div className="col-sm-6 mb-4">
                                <label htmlFor="firstName" className="form-label">
                                  First name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  name="first_name"
                                  placeholder=""
                                  required
                                  onChange={handleChange}
                                  value={fields.first_name}
                                />

                                <div className="invalid-feedback"></div>
                              </div>
                              <div className="col-sm-6  mb-4">
                                <label htmlFor="lastName" className="form-label">
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  placeholder=""
                                  defaultValue={""}
                                  required
                                  //name={lastName}
                                  onChange={handleChange}
                                  //value={lastName}
                                  name="last_name"
                                  value={fields.last_name}
                                />
                                <div className="invalid-feedback">

                                </div>
                              </div>
                              <div className="col-12  mb-4">
                                <label htmlFor="address" className="form-label">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="address"
                                  placeholder="#45, Avenue Towers, Scalpel Road"
                                  required
                                  //onChange={onChangeAddress_1}
                                  onChange={handleChange}
                                  name="line_1"
                                  value={fields.line_1}
                                />
                              </div>
                              <div className="col-12  mb-4">
                                <label htmlFor="address2" className="form-label">
                                  Apartment, Street, Landmark
                                  <span className="text-muted">(Optional)</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="address2"
                                  placeholder="80 Feet Road, Behind Hindu Temple"
                                  //onChange={onChangeAddress_2}
                                  onChange={handleChange}
                                  name="line_2"
                                  required
                                  value={fields.line_2}
                                />
                              </div>
                              <div className="col-sm-6  mb-4">
                                <label htmlFor="lastName" className="form-label">
                                  City
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="city"
                                  placeholder=""
                                  defaultValue={""}
                                  required
                                  onChange={handleChange}
                                  name="city"
                                  //value={city}
                                  value={fields.city}
                                />
                              </div>
                              <div className="col-md-3 ">
                                <label htmlFor="zip" className="form-label">
                                  Postal Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="Postal Code"
                                  placeholder=""
                                  required
                                  // value={postcode}
                                  onChange={handleChange}
                                  name="postcode"
                                  value={fields.postcode}
                                />
                              </div>
                            </div>
                            <div className="mt-4">
                              <label htmlFor="zip" className="form-label">
                                Address Type
                              </label>
                              <div className="d-flex">
                                <div className="form-check mt-4">
                                  <input
                                    id="credit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="form-check-input"
                                    defaultChecked
                                    required
                                  />
                                  <label
                                    className="form-check-label ms-2 me-4"
                                    htmlFor="credit"
                                  >
                                    Home (9am - 10pm)
                                  </label>
                                </div>
                                <div className="form-check  mt-4">
                                  <input
                                    id="debit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="form-check-input"
                                    required
                                  />
                                  <label
                                    className="form-check-label ms-2 me-4"
                                    htmlFor="debit"
                                  >
                                    Office (9am - 5pm)
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <button
                                className="btn  btn-lg fs-16"
                                type="button"
                                onClick={checkout}
                              >
                                Save &amp; Deliver Here
                              </button>
                              {/* <ClipLoader  loading={!loading} size={30} /> */}
                              {/* <a
                              href="#"
                              className="text-color-3 fs-16 font-sb ms-4"
                              type="submit"
                            >
                              Cancel
                            </a> */}
                              <button
                                className="btn  btn-lg fs-16 m-2"
                                type="button"

                                onClick={paymentMethod}
                              >
                                Next
                              </button>
                            </div>
                            <div className="seprtor">
                              <span>or</span>
                            </div>
                            <div className="mt-5">
                              <div className="form-check  mt-4">
                                <input
                                  id="delivery"
                                  name="delivery"
                                  type="radio"
                                  className="form-check-input"
                                //required
                                />
                                <label
                                  className="form-check-label ms-2 me-4"
                                  htmlFor="delivery"
                                >
                                  In-store delivery
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <CheckoutStepC
                      customerId={customerId}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      fields = {fields}
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
