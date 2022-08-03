import React, { useEffect } from "react";
import { Cart } from "../../network/gateway/Cart";

const CartItem = () => {
  useEffect(() => {
    getCustomerCart();
  }, []);

  function getCustomerCart() {
    Cart.getInstance()
      .getCustomerCart()
      .then((info: any) => {
        console.log("customer", info);
      });
  }
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
          <div className="imgbar ">
            <img className="w-100" src="images/img1.png" alt="" />
          </div>
        </div>
        <div className="col-md-9 position-relative">
          <h3 className="fs-16 font-sb text-color-2">Anubhutee</h3>
          <p className="fs-14 font-r text-color-1 pt-1 prodes">
            Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
          </p>
          <div className="d-flex py-3">
            <p className="fs-14 font-sb text-color-1">
              Size: <span className="text-color-2">XL</span>
            </p>
            <p className="fs-14 font-sb text-color-1 ms-4">
              Colour: <span className="text-color-2">Blue</span>
            </p>
          </div>
          <div className="d-flex mt-4">
            {" "}
            <a className="fs-14 font-sb text-color-3" href="#">
              Move to Wishlist
            </a>{" "}
            <a className="fs-14 font-sb text-color-3 ms-4" href="#">
              Remove
            </a>{" "}
          </div>
          <div className="d-flex topBarAlign">
            <p className="fs-16 font-sb text-color-2 align-self-center me-3">
              ₹3,499
            </p>
            <div className="quantity d-flex px-2">
              <label className="fs-14 font-r text-color-1 pt-1">Qty</label>
              <select
                className="form-select fs-14 font-r"
                aria-label="Default select example"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
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
