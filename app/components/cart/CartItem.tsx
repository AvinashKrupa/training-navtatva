import React, { useEffect, useState } from "react";
import Login from "../../../pages/login";
import { Cart } from "../../network/gateway/Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import useUserStore from "../../zustand/store";

const CartItem = (props: any) => {
  const setLoginPopup = useUserStore((state: any) => state.showLogin);
  const [login, setLogin] = useState<boolean>(false);
  function getColor() {
    //console.log("props.meta", props.meta);
    let data = props.meta?.variant.filter((info: any) => {
      return info.name == "Color";
    });
    if (data && data.length > 0) return data[0].options?.name;
  }

  function getSize() {
    let data = props.meta?.variant.filter((info: any) => {
      return info.name == "Size";
    });

    if (data && data.length > 0) return data[0].options?.name;
  }

  const removeCartitem = () => {
    //props.removeCart(1, 0)
    props.removeCart(props?.id);
    //console.log("this is onclick working")
    console.log("this is called");
  };

  //console.log("this is cart data",props?.id)
  return (
    <div className="bgbar position-relative mt-4">
      <div className="row">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue={""}
            id="flexCheckDefault"
          />{" "}
        </div>
        <div className="col-md-3 col-lg-3">
          <Login

            visible={login}
            onClose={() => setLogin(false)}
          />
          <div className="imgbar ">
            <img className="w-100" src={props.image?.href} alt="" />
          </div>
        </div>
        <div className="col-md-9 position-relative">
          <h3 className="fs-16 font-sb text-color-2">{props.name}</h3>
          <p className="fs-14 font-r text-color-1 pt-1 prodes">
            {props.description}
          </p>
          <div className="d-flex py-3">
            <p className="fs-14 font-sb text-color-1">
              Size: <span className="text-color-2">{getSize()}</span>
            </p>
            <p className="fs-14 font-sb text-color-1 ms-4">
              Colour: <span className="text-color-2">{getColor()}</span>
            </p>
          </div>
          <div className="d-flex mt-4">
            {" "}
            <a className="fs-14 font-sb text-color-3" href="#">
              Move to Wishlist
            </a>{" "}
            <a
              className="fs-14 font-sb text-color-3 ms-4"
              onClick={() => {
                setLoginPopup(true);
                if (LocalStorageService.getAccessToken()) {
                  removeCartitem();
                } else {
                  setLoginPopup(true);
                }
              }}
            >
              Remove
            </a>{" "}
          </div>
          <div className="d-flex topBarAlign">
            <p className="fs-16 font-sb text-color-2 align-self-center me-3">
              {/* ₹3,499 */}{" "}
              {props.meta?.display_price?.with_tax.unit.formatted}
            </p>
            <div className="quantity d-flex px-2">
              <label className="fs-14 font-r text-color-1 pt-1">Qty</label>
              <select
                className="form-select fs-14 font-r"
                aria-label="Default select example"
              >
                <option value={1}>{props.quantity}</option>
                {/* <option value={2}>2</option>
                <option value={3}>3</option> */}
              </select>
            </div>
          </div>
          <div className="discount-offer text-white">
            <p className="fs-13 font-r">Recommended for Your Shopping Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
