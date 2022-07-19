import React, { useState } from "react";
import type { NextPage } from "next";
import Slider from "react-slick";
import {
  preferenceSliderSetting,
  customerSliderSetting,
  occasionSetting,
} from "../../utils/sliderConfig";
import Footer from "../../components/common/Footer";
import FooterFixedButton from "./components/FooterFixedButton";
import Header from "./components/Header";
import MenuCategorySlider from "./components/MenuCategorySlider";
import FestiveSaleBanner from "./components/FestiveSaleBanner";
import ShoppingBagBlock from "./components/ShoppingBagBlock";
import CompaignOnOutFit from "./components/CompaignOnOutFit";
import KurtisForOccassion from "./components/KurtisForOccassion";
import MustInWardrobe from "./components/MustInWardrobe";
import ShopByPrice from "./components/ShopByPrice";
import ShopVirtuallyWithExpert from "./components/ShopVirtuallyWithExpert";
import BringInEssence from "./components/BringInEssence";

const ThemeOne: NextPage = () => { 
  
  return (
    <div className="home">
      <div className="wrapper">
        <Header/>
        {/* category start */}
        <MenuCategorySlider/>
        {/* banner start */}
        <FestiveSaleBanner/>
        {/*  Shopping Bag start */}
        <ShoppingBagBlock/>
      </div>
      {/* Select your companion to try on your Outfit */}
      <CompaignOnOutFit/>
      {/* Kurtis For Every Occassion */}
      <KurtisForOccassion/>
      {/* Must haves In Your Wardrobe section */}
      <MustInWardrobe/>      
      <div className="wrapper">
        {/* Shop By Price */}
        <ShopByPrice/>
        {/* Shop virtually  with a Product Expert. */}
        <ShopVirtuallyWithExpert/>
        {/* Bring in the Essence of  Holi to your wardrobe*/}
        <BringInEssence/>
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
      <Footer />
      {/* End Footer */}
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
      <FooterFixedButton/>
      {/* End Fixed Button */}      
    </div>
  );
};

export default ThemeOne;
