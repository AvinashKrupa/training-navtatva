import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";
import { occasionSetting } from "../../app/utils/sliderConfig";
import Slider from "react-slick";
import CartItem from "../../app/components/cart/CartItem";
import VisitNunchiBanner from "../../app/components/common/VisitNunchiBanner";

const CartScreen: NextPage = () => {
  const [cartItems, setCartItems] = useState<any>([1, 2, 3]);
  const [youMayLikeList, setYouMayLikeList] = useState<any>([1, 2, 3]);

  return (
    <div className="shoppingCart">
      <div className="wrapper">
        {/* Header */}
        <Header />
        {/* End Header */}
        <section className="cartItem mt-4 mt-md-5">
          <h1 className="fs-40 font-b text-color-2 list-inline-item">
            Your Shopping Bag
          </h1>
          <div className="row">
            <div className="col-md-12 col-lg-8">
              {cartItems?.length &&
                cartItems?.map((item: any, index: number) => {
                  return <CartItem key={index} {...item} />;
                })}
              {youMayLikeList?.length && (
                <>
                  <h3 className="fs-20 font-sb text-color-2 mt-5">
                    You May Also like
                  </h3>
                  {youMayLikeList?.map((item: any, index: number) => {
                    return <CartItem key={index} {...item} />;
                  })}
                </>
              )}
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="w-100 mt-4">
                <a href="#">
                  {" "}
                  <img className="w-100" src="images/discountAd.png" alt="" />
                </a>
                <a
                  href="button"
                  className="font-sb text-color-3 fs-16 justify-content-end align-items-end d-flex ms-auto mt-3 me-2"
                >
                  Multiple offers waiting for you after checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="currentColor"
                    className="bi bi-arrow-up-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-white border p-3 mt-4 shipping">
                <div className="row">
                  <div className="col-md-12 py-2">
                    <p className="fs-19 font-r text-color-2">
                      <span className="font-sb">2 of 4 Items</span> selected for
                      checkout
                    </p>
                  </div>
                  <div className="col-md-12">
                    <div className="gray">
                      <p className="fs-14 font-r text-color-2">
                        Add items worth{" "}
                        <span className="font-sb"> ₹1,800 </span> more to avail{" "}
                        <span className="font-sb text-color-9">
                          Free Shipping
                        </span>
                      </p>
                    </div>{" "}
                  </div>
                  <div className="col-md-12 d-flex mt-5">
                    <h3 className="fs-19 font-sb text-color-2">Sub Total</h3>
                    <h3 className="fs-24 font-sb text-color-3 ms-auto">
                      ₹16,994
                    </h3>
                  </div>
                  <div className="col-md-12 mt-4">
                    <a
                      href="/checkout"
                      className="btn fs-18 w-100"
                      tabIndex={0}
                    >
                      Proceed to Checkout
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-4">
                  <div className="mb-3 promocode ">
                    <label className="col-form-label fs-14 font-sb text-color-1">
                      Have a Promo Code?
                    </label>
                    <div className="col-sm-12 position-relative">
                      <input type="text" className="form-control" />
                      <a
                        href="#"
                        className=" fs-16 font-sb text-color-3 text-end apply"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <label className="col-form-label fs-14 font-sb text-color-1 mb-2">
                    Have a Promo Code?
                  </label>
                  <a href="#">
                    {" "}
                    <img className="w-100" src="images/card-1.png" alt="" />
                  </a>
                  <a href="#" className="mt-4 d-block">
                    {" "}
                    <img className="w-100" src="images/card-2.png" alt="" />
                  </a>
                </div>
                <div className="col-md-12 mt-4">
                  <label className="col-form-label fs-14 font-sb text-color-1 mb-2">
                    Redeem Coins
                  </label>
                  <a href="#">
                    {" "}
                    <img className="w-100" src="images/card-3.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <VisitNunchiBanner />
        <section className="mt-4 mt-md-5 pb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="heading3">
                <h2>
                  <span className="bg10">Similar Products</span>
                </h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
              <div className="ocassion-slider">
                <Slider {...occasionSetting}>
                  <div className="thumb position-relative text-center">
                    <div className="bg1">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/Occassion1.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a
                            href="/productDetail"
                            className="btn-border fs-13 text-color-3"
                          >
                            More Info
                          </a>
                          <a href="#" className="btn fs-13">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <div className="bg2">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/Occassion2.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a
                            href="/productDetail"
                            className="btn-border fs-13 text-color-3"
                          >
                            More Info
                          </a>
                          <a href="#" className="btn fs-13">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <div className="bg3">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/Occassion3.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a
                            href="/productDetail"
                            className="btn-border fs-13 text-color-3"
                          >
                            More Info
                          </a>
                          <a href="#" className="btn fs-13">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <div className="bg4">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/Occassion4.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a
                            href="/productDetail"
                            className="btn-border fs-13 text-color-3"
                          >
                            More Info
                          </a>
                          <a href="#" className="btn fs-13">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <div className="bg4">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/Occassion4.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a
                            href="/productDetail"
                            className="btn-border fs-13 text-color-3"
                          >
                            More Info
                          </a>
                          <a href="#" className="btn fs-13">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartScreen;
