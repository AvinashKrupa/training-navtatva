import React, { useState } from "react";
import type { NextPage } from "next";
import Slider from "react-slick";
import {
  exploreMoreSetting,
  exploreSliderSetting,
  kurtiSettings,
  preferenceSliderSetting,
  customerSliderSetting,
  menuSliderSettings,
  occasionSetting,
} from "../app/utils/sliderConfig";
import { useDebouncedEffect } from "../app/utils/useDebouncedEffect";
import NavMenuCategory from "../app/components/layouts/category";
import SearchPopup from "../app/components/common/SearchPopup";
import { categroyMenu } from "../app/constants/sampleData";
const HomeScreen: NextPage = () => {
  const [selectedSubCat, setSelectedSubCat] = useState<any>([]);
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  useDebouncedEffect(() => console.log(selectedSubCat), [selectedSubCat], 1000);  
  return (
    <div className="home">
      <div className="wrapper">
        <header className="main-header header-main">
          <div className="row">
            <div className="col-3 col-lg-1 align-self-center">
              <a href="/">
                <img
                  src="images/logo.png"
                  alt="logo"
                  className="img-fluid desk-logo"
                />
              </a>
            </div>
            <div className="col-9 col-lg-11 d-flex align-items-center ">
              <a
                href="#"
                className="d-block d-md-none ms-auto m-search"
                data-bs-toggle="modal"
                data-bs-target="#searchPopup"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
                    />
                  </svg>
                </span>
              </a>
              <div
                className="header-search input-group ms-auto d-none d-md-block"
                data-bs-toggle="modal"
                data-bs-target="#searchPopup"
              >
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control fs-16"
                  placeholder="Kurtis"
                  aria-label="Kurtis"
                  aria-describedby="addon-wrapping"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenSearchBox(true);
                  }}
                />
                <button type="button" className="closebtn d-md-none">
                  <i className="fas fa-xmark fa-fw" />
                </button>
              </div>
              <ul className="iconBar text-center">
                <li className="list-inline-item">
                  <a className="reverse rounded-circle d-block" href="#" title={""}>
                    <img src="images/refresh.png" alt="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="wishlist rounded-circle d-block" href="#" title={""}>
                    <img src="images/wishlist.png" alt="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="cart rounded-circle d-block" href="#" title={""}>
                    <img src="images/cart.png" alt="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="user rounded-circle d-block user-img"
                    href="#"
                    title={""}
                  >
                    <img width={32} height={32} src="images/user.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* category start */}
        <section className="category mt-4 mt-md-5 position-relative side-category">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-12 px-0">
              <div className="testimonial-slider">
                <Slider {...menuSliderSettings}>
                  {categroyMenu?.map((info: any, index: number) => {                   
                    return (
                      <NavMenuCategory
                        key={index}
                        title={info.name}
                        image={info.category_image}
                        onClick={() => {
                          if (selectedSubCat.length == 0) {
                            setSelectedSubCat(info.children || []);
                          } else {
                            setSelectedSubCat([]);
                          }
                        }}
                      />
                    );
                  })}
                </Slider>
              </div>

              <div
                className="bg-white subcategory p-4"
                style={{
                  display: selectedSubCat.length == 0 ? "none" : "block",
                }}
              >
                <div className="row">
                  <div className="col-md-8 d-block d-lg-flex">
                    {selectedSubCat.map((info: any) => {
                      return (
                        <ul className="me-5">
                          <li>
                            <h4>{info.name}</h4>
                          </li>
                          {info?.children?.map((info: any) => {
                            return (
                              <li>
                                <a href={`/shop/${info.name}`}>{info.name}</a>
                              </li>
                            );
                          })}
                        </ul>
                      );
                    })}
                  </div>
                  <div className="col-md-12 col-lg-4 mt-4 mt-lg-0">
                    <img
                      className="w-100"
                      src="images/sub-category.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner start */}
        <section className="banner mt-4 mt-md-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 order-2 order-lg-0 p-5 text-center text-lg-start align-self-center">
              <p className="fs-24 text-uppercase mb-4 mb-xl-5">
                NavTatva Festive Sale
              </p>
              <span className="fs-64">Upto 40% Flat Off </span>
              <br />
              <small className="fs-24 mt-3 d-block">
                On the Biggest Brands
              </small>
              <h5 className="fs-48 mt-3">14th - 18th July</h5>
              <a href="/shop" className="fs-29 mt-5 d-inline-block">
                SALE IS LIVE NOW
              </a>
            </div>
            <div className="col-md-12 col-lg-6">
              <img className="w-100" src="images/banner.png" alt="" />
            </div>
          </div>
        </section>
        {/*  Shopping Bag start */}
        <section>
          <div className="row mt-4 mt-md-5">
            <div className="col-md-12 col-lg-6">
              <div className="shoppingBar">
                <div className="row">
                  <div className="col-md-12">
                    <div className="shopping p-4">
                      <h3 className="fs-32 my-2">
                        6 Items Still In Your Shopping Bag
                      </h3>
                      <p className="fs-20">
                        Complete checkout now while theyre still available
                      </p>
                      <div className="row mt-5">
                        <div className="col-sm-8 mb-4 mb-sm-0">
                          <a href="#">
                            <img
                              className="w-100"
                              src="images/kurtis-1.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-sm-4 align-self-end">
                          <a href="#">
                            <img
                              className="w-100 mb-4 pb-2"
                              src="images/kurtis-2.png"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              className="w-100"
                              src="images/kurtis-3.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shopping-Bottom d-block text-center text-md-start d-md-flex align-items-center p-4 p-md-5">
                    <p className="fs-20">
                      Total Cart Value <span className="fs-24">₹12,860.55</span>
                    </p>
                    <a href="button" className="btn ms-auto mt-4 mt-md-0">
                      Checkout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        fill="currentColor"
                        className="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mt-4 mt-lg-0">
              <div className="row">
                <div className="col-md-12 mb-4 mb-lg-5 pb-2">
                  <div className="discount h-100">
                    <ul className="d-flex">
                      <li className="list-inline-item">
                        <img src="images/discount.png" alt="" />
                      </li>
                      <li className="fs-42 text-white list-inline-item ms-3">
                        <p className="fs-90">20%</p>
                        Discount
                      </li>
                    </ul>
                    <p className="fs-34 offers">
                      Get Upto 20% off on selected brands for the next 24hrs.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="spin-wheel h-100">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="spin-wheel-img">
                          <img
                            className="w-100"
                            src="images/spin-wheel.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-5 align-self-center text-center text-md-start mt-4 mt-md-0">
                        <h4 className="fs-36 font-b">Spin The Wheel</h4>
                        <h5 className="fs-24 text-white font-r ">
                          Register Now
                        </h5>
                        <p className="fs-16 font-r">
                          To spin the wheel and avail rewards on all categories.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Select your companion to try on your Outfit */}
      <section className="mt-4 mt-md-5 pb-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading1">
                <h2>Select your companion to try on your Outfit</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
              <div className="kurtis-slider">
                <Slider {...kurtiSettings}>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Kurtis For Every Occassion */}
      <section className="mt-4 mt-md-5 pb-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>Kurtis For Every Occassion</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
              <div className="ocassion-slider">
                <Slider {...exploreMoreSetting}>
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
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-3">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-5" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-5" tabIndex={0}>
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
        </div>
      </section>
      {/* Must haves In Your Wardrobe section */}
      <section className="mt-4 mt-md-5 pb-md-5 mb-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>Must haves In Your Wardrobe</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative  wardrobecate">
              <div className="row">
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg1">
                    <a href="#">
                      <img className="w-100" src="images/sarees.png" alt="" />
                      <h4>SAREES</h4>
                    </a>
                  </div>
                </div>
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg2">
                    <a href="#">
                      <img className="w-100" src="images/lehangs.png" alt="" />
                      <h4>LEHANGAS</h4>
                    </a>
                  </div>
                </div>
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg3">
                    <a href="#">
                      <img className="w-100" src="images/churidar.png" alt="" />
                      <h4>Churidars</h4>
                    </a>
                  </div>
                </div>
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg4">
                    <a href="#">
                      <img className="w-100" src="images/fancy.png" alt="" />
                      <h4>fancy</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mt-lg-5">
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg1">
                    <a href="#">
                      <img className="w-100" src="images/sarees.png" alt="" />
                      <h4>SAREES</h4>
                    </a>
                  </div>
                </div>
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg2">
                    <a href="#">
                      <img className="w-100" src="images/lehangs.png" alt="" />
                      <h4>LEHANGAS</h4>
                    </a>
                  </div>
                </div>
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg3">
                    <a href="#">
                      <img className="w-100" src="images/churidar.png" alt="" />
                      <h4>Churidars</h4>
                    </a>
                  </div>
                </div>
                <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                  <div className="bg4">
                    <a href="#">
                      <img className="w-100" src="images/fancy.png" alt="" />
                      <h4>fancy</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shop By Price */}
      <div className="wrapper">
        <section className="ShopPrice">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>Shop By Price</h2>
              </div>
            </div>
            <div className="col-md-12 pt-5">
              <ul className="text-center d-block d-lg-flex justify-content-center">
                <li className="bg1 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                  ₹999
                </li>
                <li className="bg2 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                  ₹1,999
                </li>
                <li className="bg3 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                  ₹3,999
                </li>
                <li className="bg4 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                  ₹6,999
                </li>
                <li className="bg5 fs-64 mx-3 d-inline-block d-lg-flex  align-items-center justify-content-center">
                  ₹9,999
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Shop virtually  with a Product Expert. */}
        <section className="expertshop mt-4 mt-md-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 order-2 order-lg-0 align-self-center">
              <div className="leftbar">
                <h3>Shop virtually with a Product Expert.</h3>
                <p className="fs-29 my-4 my-md-5">
                  Enjoy the live store shopping experience over a video call.
                </p>
                <a href="button" className="btn ms-auto fs-29">
                  Book Appointment
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <img className="w-100" src="images/appointment.png" alt="" />
            </div>
          </div>
        </section>
        {/* Bring in the Essence of  Holi to your wardrobe*/}
        <section className="wardrobe mt-4 mt-md-5">
          <div className="row">
            <div className="col-md-12 col-lg-6 pe-3 pe-lg-0">
              <img className="w-100" src="images/explore.png" alt="" />
            </div>
            <div className="col-md-12 col-lg-6 align-self-center ps-3 ps-lg-0">
              <div className="leftbar">
                <h3 className="ps-0 ps-lg-5 mt-4 mt-lg-0 fs-40 font-sb">
                  Bring in the Essence of Holi to your wardrobe
                </h3>
                <p className="ps-0 ps-lg-5 fs-30 py-4">
                  Offer Valid Untill 30th June 2022
                </p>
                <div className="explore-slider">
                  <Slider {...exploreSliderSetting}>
                    <div className="thumb position-relative text-center bg1">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/explore-thumb-1.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-2">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-2" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center bg2">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/explore-thumb-2.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-2">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-2" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center bg3">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/explore-thumb-3.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-2">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-2" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center bg1">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/explore-thumb-1.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-2">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-2" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block mb-2" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center bg2">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/explore-thumb-2.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-2">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-2" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center bg3">
                      <a href="#">
                        <img
                          className="w-100"
                          src="images/explore-thumb-3.png"
                          alt=""
                        />
                      </a>
                      <div className="hoverBlock">
                        <div className="overlay   text-center">
                          <p className="fs-13 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                          <p className="fs-19 font-sb text-color-3 py-2">
                            ₹3,450
                          </p>
                          <a href="#" className="btn-border fs-13 text-color-3">
                            More Info
                          </a>
                          <a href="#" className="btn fs-13 ">
                            Add to Cart
                          </a>
                        </div>
                        <div className="speaker">
                          <a href="#" className="d-block mb-2" tabIndex={0}>
                            <img src="images/wishlist-detail.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/volume.png" />
                          </a>
                          <a href="#" className="d-block  mb-2" tabIndex={0}>
                            <img src="images/swap.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <a href="button" className="btn fs-26 ms-0 ms-lg-4 mt-4">
                  Explore the Holi Store
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Top Collections */}
        <section className="mt-4 mt-md-5 bg-outfits pb-5">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="heading2">
                  <h2>Top Collections</h2>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
          </div>
        </section>
        {/* Shop By Preference */}
        <section className="mt-4 mt-md-5 preferrnece">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="heading2">
                  <h2>Shop By Preference</h2>
                </div>
              </div>
              <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                <div className="Preference-slider">
                  <Slider {...preferenceSliderSetting}>
                    <div className="thumb position-relative text-center">
                      <div className="bg5">
                        <div className="text-start p-4">
                          <p className="fs-20 font-r text-color-1">For</p>
                          <h4 className="fs-36 font-Bsoul">The Playful</h4>
                        </div>
                        <img
                          className="w-100"
                          src="images/playful.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg6">
                        <div className="text-start p-4">
                          <p className="fs-20 font-r text-color-1">For</p>
                          <h4 className="fs-36 font-Bsoul">The Elegant</h4>
                        </div>
                        <img
                          className="w-100"
                          src="images/elegant.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg7">
                        <div className="text-start p-4">
                          <p className="fs-20 font-r text-color-1">For</p>
                          <h4 className="fs-36 font-Bsoul">The Timeless</h4>
                        </div>
                        <img
                          className="w-100"
                          src="images/timeless.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What’s New This Month */}
        <section className="month-trend mt-4 mt-md-5 ">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="heading2">
                  <h2>What’s New This Month</h2>
                </div>
              </div>
              <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
                <div className="Preference-slider">
                  <Slider {...preferenceSliderSetting}>
                    <div className="thumb position-relative text-center">
                      <div className="bg1">
                        <img
                          className="w-100"
                          src="images/month-bg1-1.jpg"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg2">
                        <img
                          className="w-100"
                          src="images/month-bg2-2.jpg"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg3">
                        <img
                          className="w-100"
                          src="images/month-bg3-3.jpg"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <img
                          className="w-100"
                          src="images/month-bg4-4.jpg"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* NavTatva’s Top Picks */}
        <section className="mt-4 mt-md-5 bg-outfits pb-5">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="heading2">
                  <h2>NavTatva’s Top Picks</h2>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              href="#"
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a href="#" className="btn fs-13 " tabIndex={0}>
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
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
          </div>
        </section>
        {/* Compliment your Outfits */}
        <section className="mt-4 mt-md-5 complement pb-5">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="heading2">
                  <h2>Compliment your Outfits</h2>
                </div>
              </div>
              <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
                <div className="Preference-slider">
                  <Slider {...preferenceSliderSetting}>
                    <div className="thumb position-relative text-center">
                      <div className="bg1">
                        <img
                          className="w-100"
                          src="images/Compliment-bg-1-1.png"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg2">
                        <img
                          className="w-100"
                          src="images/Compliment-bg-2-2.png"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg3">
                        <img
                          className="w-100"
                          src="images/Compliment-bg-3-3.png"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <img
                          className="w-100"
                          src="images/Compliment-bg-4-4.png"
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Designer’s Pick */}
      <section>
        <div className="card-wrapper pb-5">
          <div className="wrapper">
            <div className="heading3 py-5">
              <h2>
                <span className="bg1">Designer’s Pick</span>
              </h2>
            </div>
            {/* card left */}
            <div className="detail-slider">
              <div>
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="product-imgs">
                      <div className="img-select">
                        <div className="img-item">
                          <a href="#" data-id={1}>
                            <img
                              src="images/detail-thumb1.png"
                              alt="Detail image"
                            />
                          </a>
                        </div>
                        <div className="img-item">
                          <a href="#" data-id={2}>
                            <img
                              src="images/detail-thumb2.png"
                              alt="Detail image"
                            />
                          </a>
                        </div>
                        <div className="img-item">
                          <a href="#" data-id={3}>
                            <img
                              src="images/detail-thumb3.png"
                              alt="Detail image"
                            />
                          </a>
                        </div>
                        <div className="img-item">
                          <a href="#" data-id={4}>
                            <img
                              src="images/detail-thumb4.png"
                              alt="Detail image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="img-display">
                        <div className="img-showcase">
                          <img
                            src="images/detail-pick-1.png"
                            alt="Detail image"
                          />
                          <img
                            src="images/detail-pick-1.png"
                            alt="Detail image"
                          />
                          <img
                            src="images/detail-pick-1.png"
                            alt="Detail image"
                          />
                          <img
                            src="images/detail-pick-1.png"
                            alt="Detail image"
                          />
                        </div>
                      </div>
                      <div className="view">
                        <img src="images/view.png" alt="Detail image" />
                      </div>
                      <div className="speaker pe-5">
                        <a href="#" className="d-block mb-5">
                          <img src="images/wishlist-detail.png" />
                        </a>
                        <a href="#" className="d-block  mb-5">
                          <img src="images/volume.png" />
                        </a>
                        <a href="#" className="d-block  mb-5">
                          <img src="images/swap.png" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 mt-0 mt-md-5 mt-lg-0">
                    <div className="product-content">
                      <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
                      <p className="fs-14 font-r text-color-1 mt-2">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                      <p className="fs-12 font-r text-color-1 mt-5 mb-3">
                        size available
                      </p>
                      <ul className="size d-flex">
                        <li>S</li>
                        <li>M</li>
                        <li className="available">L</li>
                        <li className="select">XL</li>
                        <li className="available">XXL</li>
                        <li className="custom-size">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-rulers me-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                          </svg>
                          Custome Size
                        </li>
                        <li className="sizechart">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-bar-chart-fill me-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                          </svg>
                          Size Chart
                        </li>
                      </ul>
                      <div className="custom-radios">
                        <p className="fs-12 font-r text-color-1 mt-4 mb-3">
                          Color
                        </p>
                        <div>
                          <input
                            type="radio"
                            id="color-1"
                            name="color"
                            defaultValue="color-1"
                            defaultChecked
                          />
                          <label htmlFor="color-1">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-2"
                            name="color"
                            defaultValue="color-2"
                          />
                          <label htmlFor="color-2">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-3"
                            name="color"
                            defaultValue="color-3"
                          />
                          <label htmlFor="color-3">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-4"
                            name="color"
                            defaultValue="color-4"
                          />
                          <label htmlFor="color-4">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="list mt-4">
                        <div className="row">
                          <div className="col-md-12 d-flex">
                            <ul className="p-0 me-5">
                              <li className="list-inlne-item d-flex font-r">
                                <p>Sleeve Length </p>
                                Three-Quarter Sleeve
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Fabric </p>
                                Viscose Rayon
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Pattern </p>
                                Printed
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Wash Care </p>
                                Hand Wash
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Hemline </p>
                                Straight
                              </li>
                            </ul>
                            <ul className="p-0">
                              <li className="list-inlne-item d-flex font-r">
                                <p>Sleeve Length </p>
                                Three-Quarter Sleeve
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Fabric </p>
                                Viscose Rayon
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Pattern </p>
                                Printed
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Wash Care </p>
                                Hand Wash
                              </li>
                              <li className="list-inlne-item d-flex font-r">
                                <p>Hemline </p>
                                Straight
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="hurryUp">
                        Hurry! Only <strong>24 Items</strong> Left in Stock
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="product-rating  text-center">
                            <span>4.7(21)</span>
                            <br />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <p className="fs-12 text-color-1">345 reviews</p>
                          </div>
                        </div>
                        <div className="col-sm-6  text-center">
                          <div className="product-price">
                            <p className="last-price mb-0 fs-12 font-r">
                              <span className="text-color-1">₹ 6,450</span>
                            </p>
                            <p className="new-price mb-0 font-sb">
                              <span>₹3,450</span>
                            </p>
                            <p className="save fs-10 font-r">
                              You save ₹3,000{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="resquest">
                        <a href="#" className="font-m" title={""}>
                          Request Sample
                        </a>
                      </div>
                      <div className="purchase-info d-flex">
                        <button type="button" className="btn w-50">
                          Quick View
                        </button>
                        <button type="button" className="btn w-50">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card right */}
          </div>
        </div>
      </section>
      {/* Why NavTatva? */}
      <section className="whyNav position-relative pb-5">
        <div className="wrapper">
          <div className="heading3 pt-5">
            <h2>
              <span className="bg8">Why NavTatva?</span>
            </h2>
          </div>
          <div className="row mt-4 mt-lg-5">
            <div className="col-md-12 col-lg-7">
              <div className="row">
                <div className="col-md-6 col-xl-5 mb-4 mb-lg-5">
                  <div className="whyBlock  h-100">
                    <h3 className="fs-32 text-color-2">Discounts</h3>
                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a href="#" className="fs-14 font-sb text-color-3">
                      Learn More
                    </a>
                    <div className="text-end">
                      <img src="images/offers.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-7 mb-4 mb-lg-5">
                  <div className="whyBlock  h-100">
                    <h3 className="fs-32 text-color-2">Discounts</h3>
                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a href="#" className="fs-14 font-sb text-color-3">
                      Learn More
                    </a>
                    <div className="text-end">
                      <img
                        className="w-100"
                        src="images/No Delivery Charges.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-7  mb-4 mb-lg-0">
                  <div className="whyBlock  h-100">
                    <h3 className="fs-32 text-color-2">Discounts</h3>
                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a href="#" className="fs-14 font-sb text-color-3">
                      Learn More
                    </a>
                    <div className="text-end">
                      <img
                        className="w-100"
                        src="images/Customer Service.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-5  mb-4 mb-lg-0">
                  <div className="whyBlock  h-100">
                    <h3 className="fs-32 text-color-2">Discounts</h3>
                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a href="#" className="fs-14 font-sb text-color-3">
                      Learn More
                    </a>
                    <div className="text-end">
                      <img
                        className="w-100"
                        src="images/customer-offers.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="whyBlock h-100 whyBlock-full">
                <h3 className="fs-32 text-color-2">Discounts</h3>
                <p className="fs-14 font-r text-color-1 py-4 pe-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="fs-14 font-sb text-color-3">
                  Learn More
                </a>
                <div className="text-end">
                  <img src="images/DoorStep Delivery.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Most Searched Styles*/}
      <section className="mt-4 mt-md-5 mostSearch pb-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>Most Searched Styles</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative">
              <div className="row">
                <div className="col-width-5 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Anarkali Kurtis
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Sarees
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-2 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/bridal.jpg" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Bridal
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-2 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/bridal.jpg" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Lehengas
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Ghagra Choli Sets
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Sherwani
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Anarkali Kurtis
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Sarees
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-2  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/bridal.jpg" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Bridal
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Wedding Season Is Almost Here*/}
      <section className=" mostSearch ">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading3">
                <h2>
                  <span className="bg8">Wedding Season Is Almost Here</span>
                </h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="row">
                    <div className="col-sm-6 mb-4  text-center">
                      <div className="stylebg position-relative">
                        <a href="#">
                          <img
                            className="w-100"
                            src="images/bridal.jpg"
                            alt=""
                          />
                          <div className="overlay text-start">
                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                              Mehendi
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-4 text-center">
                      <div className="stylebg position-relative">
                        <a href="#">
                          <img
                            className="w-100"
                            src="images/bridal.jpg"
                            alt=""
                          />
                          <div className="overlay text-start">
                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                              Sangeet
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-4 text-center">
                      <div className="stylebg position-relative">
                        <a href="#">
                          <img
                            className="w-100"
                            src="images/bridal.jpg"
                            alt=""
                          />
                          <div className="overlay text-start">
                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                              Haldi
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-4 text-center">
                      <div className="stylebg position-relative">
                        <a href="#">
                          <img
                            className="w-100"
                            src="images/bridal.jpg"
                            alt=""
                          />
                          <div className="overlay text-start">
                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                              Roka
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6  text-center">
                  <div className="stylebg1 stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/bridal.jpg" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-56 pb-4 font-Bsoul text-white d-flex align-items-center justify-content-center h-100 w-50 ps-5">
                          Find Your Perfect Wedding Outfits
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* For the look you desire*/}
      <section className="mt-4 mt-md-5 mostSearch">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>For the look you desire</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative">
              <div className="row">
                <div className="col-width-5 mb-4 position-relative  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Ear Rings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center position-relative">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Bangle &amp; Bracelet
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-2 mb-4  text-center position-relative">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/bridal.jpg" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Jewellery Set
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3 overlayhover-end">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-2 mb-4 text-center position-relative">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/bridal.jpg" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Head Jewellery
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-5 mb-4  text-center position-relative">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Ring
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center position-relative">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Chain &amp; Necklace
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3 overlayhover-end">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-5 mb-4  text-center position-relative">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Mangalsutra
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center position-relative">
                  <div className="stylebg position-relative position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/anarkali-kutis.jpg"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Nose Accessories
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="overlayhover p-3">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-width-2  text-center position-relative">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/bridal.jpg" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Kaleera
                        </p>
                      </div>
                    </a>
                  </div>
                  <a href="#"></a>
                  <div className="overlayhover p-3 overlayhover-end">
                    <ul className="text-start">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Studs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Drops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Hoops &amp;
                          Huggies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Jhumkas
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chand Bali
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-caret-right" /> Chandelier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Valued Customers*/}
      <section className="mt-5 mostSearch">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>Our Valued Customers</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="customerSlider mt-4 mt-lg-5">
                <Slider {...customerSliderSetting}>
                  <div className="contentInner p-4 p-xl-5">
                    <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                      <li className="d-inline-flex">
                        <span>
                          <img src="images/client.png" alt="" />
                        </span>
                        <h4 className="fs-29 font-sb ms-3">
                          Aarav Patel
                          <p className="fs-16 font-r text-start">
                            Certified Buyer
                          </p>
                        </h4>
                      </li>
                    </ul>
                    <img className="w-100" src="images/review-1.png" alt="" />
                    <p className="mt-4 mt-md-5 ">
                      I really loved the fabric . It's pure cotton and soft. It
                      is going to fit you perfectly in the bust area but you
                      might need to alter it in the waist area.
                    </p>
                  </div>
                  <div className="contentInner p-4 p-xl-5">
                    <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                      <li className="d-inline-flex">
                        <span>
                          <img src="images/client.png" alt="" />
                        </span>
                        <h4 className="fs-29 font-sb ms-3">
                          Aarav Patel
                          <p className="fs-16 font-r text-start">
                            Certified Buyer
                          </p>
                        </h4>
                      </li>
                    </ul>
                    <img className="w-100" src="images/review-2.png" alt="" />
                    <p className="mt-4 mt-md-5 ">
                      I really loved the fabric . It's pure cotton and soft. It
                      is going to fit you perfectly in the bust area but you
                      might need to alter it in the waist area.
                    </p>
                  </div>
                  <div className="contentInner p-4 p-xl-5">
                    <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                      <li className="d-inline-flex">
                        <span>
                          <img src="images/client.png" alt="" />
                        </span>
                        <h4 className="fs-29 font-sb ms-3">
                          Aarav Patel
                          <p className="fs-16 font-r text-start">
                            Certified Buyer
                          </p>
                        </h4>
                      </li>
                    </ul>
                    <img className="w-100" src="images/review-3.png" alt="" />
                    <p className="mt-4 mt-md-5 ">
                      I really loved the fabric . It's pure cotton and soft. It
                      is going to fit you perfectly in the bust area but you
                      might need to alter it in the waist area.
                    </p>
                  </div>
                  <div className="contentInner p-4 p-xl-5">
                    <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                      <li className="d-inline-flex">
                        <span>
                          <img src="images/client.png" alt="" />
                        </span>
                        <h4 className="fs-29 font-sb ms-3">
                          Aarav Patel
                          <p className="fs-16 font-r text-start">
                            Certified Buyer
                          </p>
                        </h4>
                      </li>
                    </ul>
                    <img className="w-100" src="images/review-2.png" alt="" />
                    <p className="mt-4 mt-md-5">
                      I really loved the fabric . It's pure cotton and soft. It
                      is going to fit you perfectly in the bust area but you
                      might need to alter it in the waist area.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 mt-md-5 mt-lg-0 mostSearch">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12 sliderView">
              <div className="Preference-slider">
                <Slider {...customerSliderSetting}>
                  <div className="mx-0 ">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/modelslide-1.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mx-0">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/modelslide-2.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mx-0">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/modelslide-3.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mx-0">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/modelslide-3.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className=" mx-0">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/modelslide-3.png"
                        alt=""
                      />
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Spend More, Win More*/}
      <section className="mt-4 mt-md-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>Spend More, Win More</h2>
              </div>
            </div>
          </div>
          <div className="row mt-4 mt-lg-5">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-4 mb-4 md-sm-0">
                  <img
                    className="w-100"
                    src="images/coin-img1.png"
                    alt="Coin"
                  />
                </div>
                <div className="col-sm-4 mb-4 md-sm-0">
                  <img
                    className="w-100"
                    src="images/coin-img2.png"
                    alt="Coin"
                  />
                </div>
                <div className="col-sm-4">
                  <img
                    className="w-100"
                    src="images/coin-img3.png"
                    alt="Coin"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mt-4 mt-lg-0">
              <div className="activeCoins">
                <table className="table table-strip">
                  <tbody>
                    <tr>
                      <td className="fs-14 text-color-1">
                        <span className="text-color-2 font-sb me-2">4.</span>{" "}
                        Aarav Patel
                      </td>
                      <td className="fs-14 text-color-3 font-sb">
                        <img className="me-2" src="images/coins.png" alt="" />
                        5068 Coins{" "}
                        <small className="fs-10 text-color-1">This Month</small>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-14 text-color-1">
                        <span className="text-color-2 font-sb me-2">5.</span>{" "}
                        Aarav Patel
                      </td>
                      <td className="fs-14 text-color-3 font-sb">
                        <img className="me-2" src="images/coins.png" alt="" />
                        5068 Coins{" "}
                        <small className="fs-10 text-color-1">This Month</small>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-14 text-color-1">
                        <span className="text-color-2 font-sb me-2">5.</span>{" "}
                        Aarav Patel
                      </td>
                      <td className="fs-14 text-color-3 font-sb">
                        <img className="me-2" src="images/coins.png" alt="" />
                        5068 Coins{" "}
                        <small className="fs-10 text-color-1">This Month</small>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-14 text-color-1">
                        <span className="text-color-2 font-sb me-2">5.</span>{" "}
                        Aarav Patel
                      </td>
                      <td className="fs-14 text-color-3 font-sb">
                        <img className="me-2" src="images/coins.png" alt="" />
                        5068 Coins{" "}
                        <small className="fs-10 text-color-1">This Month</small>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs-14 text-color-1">
                        <span className="text-color-2 font-sb me-2">89</span>{" "}
                        You
                      </td>
                      <td className="fs-14 text-color-3 font-sb">
                        <img className="me-2" src="images/coins.png" alt="" />
                        5068 Coins{" "}
                        <small className="fs-10 text-color-1">This Month</small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="button" className="btn w-100 fs-22 mt-4">
                Explore More Rewards
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </a>
            </div>
            <p className="fs-26 winner font-sb text-color-1 text-center mt-4 mt-lg-5">
              Top 3 Winners get{" "}
              <small className="text-color-2">Assured Cashback upto ₹999</small>{" "}
              on Next Purchase
            </p>
          </div>
        </div>
      </section>
      {/* New Collections*/}
      <section className="mt-4 mt-md-5 mostSearch">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>New Collections</h2>
              </div>
            </div>
            <div className="col-md-12 sliderView">
              <div className="Preference-slider mt-4 mt-lg-5">
                <Slider {...preferenceSliderSetting}>
                  <div className="collection mx-3 position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/collection.png"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100 w-50 mx-auto text-center">
                          Pooja Collection
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="collection mx-3 position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/collection.png"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100 w-50 mx-auto text-center">
                          Pooja Collection
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="collection mx-3 position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/collection.png"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100 w-50 mx-auto text-center">
                          Pooja Collection
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="collection mx-3 position-relative">
                    <a href="#">
                      <img
                        className="w-100"
                        src="images/collection.png"
                        alt=""
                      />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100 w-50 mx-auto text-center">
                          Pooja Collection
                        </p>
                      </div>
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* More Brands To Explore*/}
      <section className="mt-4 mt-md-5 brand">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>More Brands To Explore</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5">
              <ul className="d-block text-center">
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-1.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-2.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-3.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-4.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-5.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-6.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-7.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-8.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-9.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-10.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-11.png" alt="brand" />
                  </a>
                </li>
                <li className="align-items-center justify-content-center d-inline-flex">
                  <a href="#">
                    <img src="images/brand-12.png" alt="brand" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Make your outfits special */}
      <section className="mt-4 mt-md-5 outfits-special">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>Make your outfits special</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
              <div className="Preference-slider">
                <Slider {...preferenceSliderSetting}>
                  <div className="thumb position-relative text-center">
                    <div className="bg1">
                      <img
                        className="w-100"
                        src="images/special-1.png"
                        alt=""
                      />
                      <div className="overlay text-start p-3">
                        <p className="fs-12 font-r text-color-1">
                          Women Teal Blue &amp; Beige Ethnic Motifs Printed
                          Straight Kurti
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <div className="bg2">
                      <img
                        className="w-100"
                        src="images/special-2.png"
                        alt=""
                      />
                      <div className="overlay text-start p-3">
                        <p className="fs-12 font-r text-color-1">
                          Women Teal Blue &amp; Beige Ethnic Motifs Printed
                          Straight Kurti
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <div className="bg3">
                      <img
                        className="w-100"
                        src="images/special-3.png"
                        alt=""
                      />
                      <div className="overlay text-start p-3">
                        <p className="fs-12 font-r text-color-1">
                          Women Teal Blue &amp; Beige Ethnic Motifs Printed
                          Straight Kurti
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <div className="bg4">
                      <img
                        className="w-100"
                        src="images/Compliment-bg-4-4.png"
                        alt=""
                      />
                      <div className="overlay text-start p-3">
                        <p className="fs-12 font-r text-color-1">
                          Women Teal Blue &amp; Beige Ethnic Motifs Printed
                          Straight Kurti
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* For the look you desire */}
      <section className="mt-4 mt-md-5 mostSearch">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading2">
                <h2>For the look you desire</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative">
              <div className="row">
                <div className="col-width-5 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Plain dyed fabric
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Woven
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-2 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-2.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Natural Crepe
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-2 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-2.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Chanderi
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Jute Fabric
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Poly Muslin
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Ultra Satin
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Satin
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-2 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-2.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Georgette
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-2 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-2.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Chinnon Chiffon
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4  text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Printed
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-width-5 mb-4 text-center">
                  <div className="stylebg position-relative">
                    <a href="#">
                      <img className="w-100" src="images/febric-1.png" alt="" />
                      <div className="overlay text-start">
                        <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                          Rayon
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* model video */}
      <section className="mt-4 mt-md-5 video pb-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12 position-relative sliderView">
              <div className="Preference-slider">
                <Slider {...preferenceSliderSetting}>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="thumb position-relative">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      className="video-icon"
                    >
                      <img className="w-100" src="images/video-1.png" alt="" />
                      <div className="overlay text-center p-3">
                        <img src="images/video-icon.png" alt="" />
                      </div>
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="footer-area">
                <h2>Newsletter</h2>
                <p>
                  Get every product update and new offers as soon as they are
                  available.
                </p>
                <form className="form-inline position-relative mt-5">
                  <div className="form-group mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control text-color-1"
                      id="staticEmail2"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">
                    Confirm identity
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 offset-md-0 offset-lg-1 mt-4 mt-lg-0">
              <div className="footer-area mb-5">
                <h2>Contact Us</h2>
                <p>
                  <a href="mailto:support@navtatva.com">support@navtatva.com</a>
                </p>
                <p>
                  <a href="tel:73892 73884">+91 73892 73884</a>
                </p>
              </div>
              <div className="footer-area">
                <h2>Location</h2>
                <p>
                  NavTatva, Brigade Road, <br />
                  Municipal No. <br />
                  10 Bengaluru 560056
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  mt-4 mt-lg-0">
              <div className="footer-area">
                <h2>Follow Us</h2>
                <ul className="social-box list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="footer-detail mb-5">
                <h6>ONLINE SHOPPING MADE EASY AT MYNTRA</h6>
                <p>
                  If you would like to experience the best of online shopping
                  for men, women and kids in India, you are at the right place.
                  Myntra is the ultimate destination for fashion and lifestyle,
                  being host to a wide array of merchandise including clothing,
                  footwear, accessories, jewellery, personal care products and
                  more. It is time to redefine your style statement with our
                  treasure-trove of trendy items. Our online store brings you
                  the latest in designer products straight out of fashion
                  houses. You can shop online at Myntra from the comfort of your
                  home and get your favourites delivered right to your doorstep.
                </p>
                <h6>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h6>
                <p>
                  Be it clothing, footwear or accessories, Myntra offers you the
                  ideal combination of fashion and functionality for men, women
                  and kids. You will realise that the sky is the limit when it
                  comes to the types of outfits that you can purchase for
                  different occasions.
                </p>
                <p>
                  Smart men’s clothing - At Myntra you will find myriad options
                  in smart formal shirts and trousers, cool T-shirts and jeans,
                  or kurta and pyjama combinations for men. Wear your attitude
                  with printed T-shirts. Create the back-to-campus vibe with
                  varsity T-shirts and distressed jeans. Be it gingham, buffalo,
                  or window-pane style, checked shirts are unbeatably smart.
                  Team them up with chinos, cuffed jeans or cropped trousers for
                  a smart casual look. Opt for a stylish layered look with biker
                  jackets. Head out in cloudy weather with courage in
                  water-resistant jackets. Browse through our innerwear section
                  to find supportive garments which would keep you confident in
                  any outfit. Trendy women’s clothing - Online shopping for
                  women at Myntra is a mood-elevating experience. Look hip and
                  stay comfortable with chinos and printed shorts this summer.
                  Look hot on your date dressed in a little black dress, or opt
                  for red dresses for a sassy vibe. Striped dresses and T-shirts
                  represent the classic spirit of nautical fashion. Choose your
                  favourites from among Bardot, off-shoulder, shirt-style,
                  blouson, embroidered and peplum tops, to name a few. Team them
                  up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans
                  make the perfect fusion-wear combination for the cool
                  urbanite. Our grand sarees and lehenga-choli selections are
                  perfect to make an impression at big social events such as
                  weddings. Our salwar-kameez sets, kurtas and Patiala suits
                  make comfortable options for regular wear. Fashionable
                  footwear - While clothes maketh the man, the type of footwear
                  you wear reflects your personality. We bring you an exhaustive
                  lineup of options in casual shoes for men, such as sneakers
                  and loafers. Make a power statement at work dressed in brogues
                  and oxfords. Practice for your marathon with running shoes for
                  men and women. Choose shoes for individual games such as
                  tennis, football, basketball, and the like. Or step into the
                  casual style and comfort offered by sandals, sliders, and
                  flip-flops. Explore our lineup of fashionable footwear for
                  ladies, including pumps, heeled boots, wedge-heels, and
                  pencil-heels. Or enjoy the best of comfort and style with
                  embellished and metallic flats. Stylish accessories - Myntra
                  is one of the best online shopping sites for classy
                  accessories that perfectly complement your outfits. You can
                  select smart analogue or digital watches and match them up
                  with belts and ties. Pick up spacious bags, backpacks, and
                  wallets to store your essentials in style. Whether you prefer
                  minimal jewellery or grand and sparkling pieces, our online
                  jewellery collection offers you many impressive options. Fun
                  and frolic - Online shopping for kids at Myntra is a complete
                  joy. Your little princess is going to love the wide variety of
                  pretty dresses, ballerina shoes, headbands and clips. Delight
                  your son by picking up sports shoes, superhero T-shirts,
                  football jerseys and much more from our online store. Check
                  out our lineup of toys with which you can create memories to
                  cherish. Beauty begins here - You can also refresh, rejuvenate
                  and reveal beautiful skin with personal care, beauty and
                  grooming products from Myntra. Our soaps, shower gels, skin
                  care creams, lotions and other ayurvedic products are
                  specially formulated to reduce the effect of aging and offer
                  the ideal cleansing experience. Keep your scalp clean and your
                  hair uber-stylish with shampoos and hair care products. Choose
                  makeup to enhance your natural beauty. Myntra is one of the
                  best online shopping sites in India which could help transform
                  your living spaces completely. Add colour and personality to
                  your bedrooms with bed linen and curtains. Use smart tableware
                  to impress your guest. Wall decor, clocks, photo frames and
                  artificial plants are sure to breathe life into any corner of
                  your home.
                </p>
                <h6>AFFORDABLE FASHION AT YOUR FINGERTIPS</h6>
                <p>
                  Myntra is one of the unique online shopping sites in India
                  where fashion is accessible to all. Check out our new arrivals
                  to view the latest designer clothing, footwear and accessories
                  in the market. You can get your hands on the trendiest style
                  every season in western wear. You can also avail the best of
                  ethnic fashion during all Indian festive occasions. You are
                  sure to be impressed with our seasonal discounts on footwear,
                  trousers, shirts, backpacks and more. The end-of-season sale
                  is the ultimate experience when fashion gets unbelievably
                  affordable.
                </p>
                <h6>MYNTRA INSIDER</h6>
                <p>
                  Every online shopping experience is precious. Hence, a
                  cashless reward-based customer loyalty program called Myntra
                  Insider was introduced to enhance your online experience. The
                  program is applicable to every registered customer and
                  measures rewards in the form of Insider Points.
                </p>
                <p>
                  There are four levels to achieve in the program, as the
                  Insider Points accumulate. They are - Insider, Select, Elite
                  or Icon. Apart from offering discounts on Myntra and partner
                  platform coupons, each tier comes with its own special perks.
                </p>
                <p>Insider</p>
                <p>
                  Opportunity to master any domain in fashion with tips from
                  celebrity stylists at Myntra Masterclass sessions.Curated
                  collections from celeb stylists.Elite
                </p>
                <p>
                  VIP access to special sale events such as the End of Reason
                  Sale (EORS) and product launches.Exclusive early access to
                  Limited Edition products Icon
                </p>
                <p>
                  Chance to get on guest lists for special events. Myntra Studio
                  - The Personalised Fashion Feed You Wouldn’t Want To Miss Out
                  On The world wide web is evolving at a relentless pace, and
                  with an accelerated growth each passing year, there is bound
                  to be an overwhelming surge of online content. It was for this
                  very reason that personalisation of search feeds was proposed
                  as a solution to combat the overload of irrelevant formation.
                </p>
                <p>
                  Several social media platforms such as Facebook and Instagram
                  along with various online shopping websites have chosen to
                  help filter content, increasing user engagement, retention and
                  customer loyalty.
                </p>
                <p>
                  Myntra is one such online shopping website that joins the list
                  of platforms that help curate a personalised fashion feed.
                  Named theMyntra Studio, this personalised search feed brings
                  you the latest men and women’s fashion trends, celebrity
                  styles, branded content and daily updates from your favourite
                  fashion labels.
                </p>
                <p>
                  If you are wondering how impactful Myntra Studio can be, we
                  are listing out five perks of having a rich, meaningful, and
                  personalised fashion feed in your life.
                </p>
                <p>
                  Keep Up With What Your Favourite Fashion Icons Are Upto The
                  #OOTD, AKA outfit of the day hashtag trend has been a rage
                  among fashion bloggers and stylists. The whole concept of
                  building an outfit from scratch and showcasing it to a huge
                  community of enthusiasts using the hashtag has helped
                  individuals with understanding trends and making suitable for
                  daily wear.
                </p>
                <p>
                  Imagine if you could keep up with every piece of clothing and
                  accessory worn by the fashion icons you look upto. From Sonam
                  Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’
                  feature to help track celebrity fashion trends, exploring
                  details such as their outfit of the day. This way, you would
                  not ever miss out on the latest celebrity fashion trends, from
                  all around the world.
                </p>
                <p>
                  Quick Fashion Tip And Tricks Whether it is draping a saree
                  into a dhoti style, wearing the right lingerie under certain
                  dresses or discovering multiple uses out of heavy ethnic wear,
                  Myntra Studio will help you acquire some unique and useful
                  fashion hacks. Each hack is designed with the intention to
                  help you get the best wear out of everything in your wardrobe.
                </p>
                <p>
                  Updates on What Is Trending and New Product Launches Since
                  fast fashion seems to be extremely hard to keep up with these
                  days, a quick update on what is trending in accessories,
                  clothing and footwear would certainly be of great help. Myntra
                  Studio helps you stay connected to the most beloved and sought
                  after brands such as Puma, Coverstory, The Label Life and so
                  many more.
                </p>
                <p>
                  Your feed keeps you updated with stories of what the brands
                  are creating including clothing, footwear and jewellery, along
                  with their new seasonal collections.
                </p>
                <p>
                  Explicit Step-By-Step Beauty Routines From Experts Just like
                  fashion, the beauty community keeps on growing, and with
                  brands such as Huda Beauty, MAC and the latest Kay Beauty by
                  Katrina Kaif, are constantly coming up with mind-blowing
                  products. Whether it is creating a no-makeup look, different
                  winged eyeliners, do-it-yourself facial masks and other
                  personal care beauty routines, Myntra Studio is here for you.
                </p>
                <p>
                  Celebrity Confessions And A Look Into Their Lives A bonus
                  feature that Myntra Studio has in store for you is celebrity
                  confessions and a peek into their lives. So, Myntra helps you
                  stay connected to your most beloved celebrities in a matter of
                  clicks.
                </p>
                <p>
                  If you are very particular when it comes to the content you
                  wish to view and engage with on social media, the ability to
                  intricately filter content helps achieve that. Applying the
                  same formula for hardcore fashion lovers and shoppers, Myntra
                  Studio brings you a daily fashion fix incorporating everything
                  that you love, all at one place. Sign up on Myntra today and
                  start organising your fashion feed, just the way you want to.
                </p>
                <h6>MYNTRA APP</h6>
                <p>
                  Myntra, India’s no. 1 online fashion destination justifies its
                  fashion relevance by bringing something new and chic to the
                  table on the daily. Fashion trends seem to change at lightning
                  speed, yet the Myntra shopping app has managed to keep up
                  without any hiccups. In addition, Myntra has vowed to serve
                  customers to the best of its ability by introducing its
                  first-ever loyalty program, The Myntra Insider. Gain access to
                  priority delivery, early sales, lucrative deals and other
                  special perks on all your shopping with the Myntra app.
                  Download the Myntra app on your Android or IOS device today
                  and experience shopping like never before!
                </p>
                <h6>HISTORY OF MYNTRA</h6>
                <p>
                  Becoming India’s no. 1 fashion destination is not an easy
                  feat. Sincere efforts, digital enhancements and a team of
                  dedicated personnel with an equally loyal customer base have
                  made Myntra the online platform that it is today. The original
                  B2B venture for personalized gifts was conceived in 2007 but
                  transitioned into a full-fledged ecommerce giant within a span
                  of just a few years. By 2012, Myntra had introduced 350 Indian
                  and international brands to its platform, and this has only
                  grown in number each passing year. Today Myntra sits on top of
                  the online fashion game with an astounding social media
                  following, a loyalty program dedicated to its customers, and
                  tempting, hard-to-say-no-to deals.
                </p>
                <p>
                  The Myntra shopping app came into existence in the year 2015
                  to further encourage customers’ shopping sprees. Download the
                  app on your Android or IOS device this very minute to
                  experience fashion like never before
                </p>
                <h6>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h6>
                <p>
                  Another reason why Myntra is the best of all online stores is
                  the complete convenience that it offers. You can view your
                  favourite brands with price options for different products in
                  one place. A user-friendly interface will guide you through
                  your selection process. Comprehensive size charts, product
                  information and high-resolution images help you make the best
                  buying decisions. You also have the freedom to choose your
                  payment options, be it card or cash-on-delivery. The 30-day
                  returns policy gives you more power as a buyer. Additionally,
                  the try-and-buy option for select products takes
                  customer-friendliness to the next level.
                </p>
                <p>
                  Enjoy the hassle-free experience as you shop comfortably from
                  your home or your workplace. You can also shop for your
                  friends, family and loved-ones and avail our gift services for
                  special occasions.
                </p>
              </div>
              <div className="copyright text-center">
                © 2022 www.navtatva.com. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Video */}
      <div className="modal fade" id="video">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close float-end mb-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <iframe
                width="100%s"
                height={500}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Video */}
      {/* Fixed Button */}
      <div className="fixbtn">
        <a href="#" className="scrollToTop">
          <i className="fas fa-angles-up" />
        </a>
        <a href="#" className="whatsapp">
          <i className="fa-brands fa-whatsapp" />
        </a>
      </div>
      {/* End Fixed Button */}
      {/* Search Popup */}
      <SearchPopup
        openSearchBox={openSearchBox}
        setOpenSearchBox={setOpenSearchBox}
      />
    </div>
  );
};

export default HomeScreen;
