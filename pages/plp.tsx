import React from "react";
import type { NextPage } from "next";
import Slider from "react-slick";
const ProductListingScreen: NextPage = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Header */}
        <header className="main-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1 align-self-center">
                <a href="/">
                  <img
                    src="images/logo-2.png"
                    alt="logo"
                    className="img-fluid desk-logo d-none d-md-block"
                  />
                </a>
              </div>
              <div className="col-md-11">
                <nav className="navbar navbar-expand-lg p-0">
                  <a className="navbar-brand d-md-none" href="#">
                    <img
                      src="images/logo-2.png"
                      alt="logo"
                      className="img-fluid desk-logo"
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Sarees
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Lehangas
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Kurtis &amp; Tunics
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Kurta Sets
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Sharara Sets
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Fancy Ethnic
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="iconBar text-center">
                    <li className="list-inline-item">
                      <a
                        className="reverse rounded-circle d-block"
                        href="#"
                        title
                      >
                        <img src="images/refresh.png" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="wishlist rounded-circle d-block"
                        href="#"
                        title
                      >
                        <img src="images/wishlist.png" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="cart rounded-circle d-block" href="#" title>
                        <img src="images/cart.png" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="user rounded-circle d-block" href="#" title>
                        <img
                          width={32}
                          height={32}
                          src="images/user.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* End Header */}
        {/* Category */}
        <section className="category-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 mb-5 mb-lg-0">
                <div className="leftside-bar">
                  <h6 className="main-title d-flex justify-content-between">
                    Filters{" "}
                    <buttton type="button" className="btn-reset">
                      <i className="fas fa-arrows-rotate fa-fw" /> Reset All
                    </buttton>
                  </h6>
                  <div className="category-box">
                    <h5 className="category-box-title">
                      Category{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                    <div className="category-area">
                      <label className="radio-container">
                        Men’s
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Woman’s
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Children’s
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="category-box">
                    <h5 className="category-box-title">
                      Color{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                    <div className="category-area category-color">
                      <label className="radio-container">
                        Green
                        <b className="Green-radio" />
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Mustard
                        <b className="Mustard-radio" />
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Teal
                        <b className="Teal-radio" />
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Beige
                        <b className="Beige-radio" />
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container ">
                        Black
                        <b className="black-radio" />
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="category-box">
                    <h5 className="category-box-title">
                      Price{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                    <div className="category-area">
                      <div className="slider-box mb-4">
                        <input type="text" id="priceRange" readOnly />
                        <div id="price-range" className="slider" />
                      </div>
                      <button type="button" className="btn btn-sm w-100">
                        Set Price
                      </button>
                    </div>
                  </div>
                  <div className="category-box">
                    <h5 className="category-box-title">
                      Brand{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                    <div className="category-area brand-area">
                      <label className="radio-container">
                        Malhaar
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Prakriti
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Anubhutee
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Tori
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Biba
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        ADA
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="category-box">
                    <h5 className="category-box-title">
                      Discount range{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                    <div className="category-area discount-area">
                      <label className="radio-container">
                        Upto 20% off
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Upto 30% off
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Upto 40% off
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Upto 50% off
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="category-box">
                    <h5 className="category-box-title">
                      Material{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                    <div className="category-area material-area">
                      <label className="radio-container">
                        Cotton
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Nylon
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Silk
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Khaadi
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="category-box">
                    <h5 className="category-box-title">
                      Occasion{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                    <div className="category-area Occasion-area">
                      <label className="radio-container">
                        Bridal
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Party Wear
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Office friendly
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                      <label className="radio-container">
                        Daily wear
                        <input type="radio" name="radio" />
                        <span className="radio-checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="category-box">
                    <h5 className="category-box-title d-flex justify-content-between">
                      Print{" "}
                      <button
                        type="button"
                        className="d-lg-none float-end categoty-btn"
                      >
                        <i className="fas fa-angle-down fa-fw" />
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="rightside-bar">
                  <div
                    className="searchbar position-relative"
                    data-bs-toggle="modal"
                    data-bs-target="#searchPopup"
                  >
                    <div className="input-group mb-4 search-field">
                      <span className>
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
                      />
                    </div>
                    <div className="result textlight">
                      Search results for <span>‘Kurtis’</span>
                    </div>
                  </div>
                  <div className="sorting mt-4 mb-5">
                    <span className="textlight">Sort</span>
                    <button type="button" className="btn-sorting active">
                      Relevance
                    </button>
                    <button type="button" className="btn-sorting">
                      Popular
                    </button>
                    <button type="button" className="btn-sorting">
                      All New
                    </button>
                    <button type="button" className="btn-sorting">
                      Price <i className="fas fa-angle-down fa-fw" />
                    </button>
                    <button type="button" className="btn-sorting">
                      Min Order Qty <i className="fas fa-angle-down fa-fw" />
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="product-block bg-1">
                        <div className="row g-0">
                          <div className="col-sm-7">
                            <div className="product-image position-relative">
                              <img
                                src="images/img1.png"
                                className="img-fluid"
                              />
                              <button type="button" className="btn-voice">
                                <i className="fas fa-volume-high fa-fw" />
                              </button>
                              <button type="button" className="btn-heart">
                                <i className="far fa-heart fa-fw" />
                              </button>
                              <span className="img-name">Cotton + Khaadi</span>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="product-content-area">
                              <h6>Anubhutee</h6>
                              <p>
                                Women Teal Blue &amp; Beige Ethnic Motifs
                                Printed Straight Kurti
                              </p>
                              <div className="product-rating text-center">
                                <span>4.6</span>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star-half fa-fw" />
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price text-center">
                                <span className="less-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  6,450
                                </span>
                                <span className="total-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,450
                                </span>
                                <span className="less-save">
                                  You save{" "}
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,000{" "}
                                </span>
                              </div>
                              <div className="product-btn text-center">
                                <a
                                  href="#"
                                  className="btn-outline btn-sm w-100 mb-2"
                                >
                                  Quick View
                                </a>
                                <button
                                  type="button"
                                  className="btn btn-sm w-100 cart-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="product-block bg-2">
                        <div className="row g-0">
                          <div className="col-sm-7">
                            <div className="product-image position-relative">
                              <img
                                src="images/img2.png"
                                className="img-fluid"
                              />
                              <button type="button" className="btn-voice">
                                <i className="fas fa-volume-high fa-fw" />
                              </button>
                              <button type="button" className="btn-heart">
                                <i className="far fa-heart fa-fw" />
                              </button>
                              <span className="img-name">Nylon + Cotton</span>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="product-content-area">
                              <h6>Anubhutee</h6>
                              <p>
                                Women Teal Blue &amp; Beige Ethnic Motifs
                                Printed Straight Kurti
                              </p>
                              <div className="product-rating text-center">
                                <span>4.6</span>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star-half fa-fw" />
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price text-center">
                                <span className="less-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  6,450
                                </span>
                                <span className="total-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,450
                                </span>
                                <span className="less-save">
                                  You save{" "}
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,000{" "}
                                </span>
                              </div>
                              <div className="product-btn text-center">
                                <a
                                  href="#"
                                  className="btn-outline btn-sm w-100 mb-2"
                                >
                                  Quick View
                                </a>
                                <button
                                  type="button"
                                  className="btn btn-sm w-100 cart-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 full-cart">
                      <div className="product-block">
                        <div className="row g-0">
                          <div className="col-6 col-sm-6 col-lg-3">
                            <div className="product-image position-relative">
                              <img
                                src="images/img4.png"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 order-3 order-lg-2">
                            <div className="product-content-area">
                              <h5>- OFFICE WEAR COMBO -</h5>
                              <div className="inline-content">
                                <h6>Anubhutee</h6>
                                <p>
                                  Women Teal Blue &amp; Beige Ethnic Motifs
                                  Printed Straight Kurti
                                </p>
                                <div className="product-rating text-center">
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <span>4.6</span>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star-half fa-fw" />
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-price text-center">
                                  <span className="total-price">
                                    <i className="fas fa-indian-rupee-sign fa-fw" />
                                    3,450
                                  </span>
                                </div>
                                <div className="product-btn text-center">
                                  <a
                                    href="#"
                                    className="btn-outline btn-sm w-100 mb-2"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <div className="inline-content border-0">
                                <h6>Anubhutee</h6>
                                <p>
                                  Women Teal Blue &amp; Beige Ethnic Motifs
                                  Printed Straight Kurti
                                </p>
                                <div className="product-rating text-center">
                                  <span />
                                  <ul className="list-inline">
                                    <li className="list-inline-item">
                                      <span>4.6</span>
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star fa-fw" />
                                    </li>
                                    <li className="list-inline-item">
                                      <i className="fas fa-star-half fa-fw" />
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-price text-center">
                                  <span className="total-price">
                                    <i className="fas fa-indian-rupee-sign fa-fw" />
                                    3,450
                                  </span>
                                </div>
                                <div className="product-btn text-center">
                                  <a
                                    href="#"
                                    className="btn-outline btn-sm w-100 mb-2"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <div className="bottom-content product-price">
                                <span className="total-price">
                                  You Pay{" "}
                                  <i className="fas fa-indian-rupee-sign fa-fw" />
                                  3,450
                                </span>
                                <span className="less-save">
                                  Combo Savings ₹901{" "}
                                </span>
                                <button
                                  type="button"
                                  className="btn btn-sm w-100 mt-4"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-6 col-lg-3 order-2 order-lg-3">
                            <div className="product-image position-relative">
                              <img
                                src="images/img5.png"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="product-block bg-3">
                        <div className="row g-0">
                          <div className="col-sm-7">
                            <div className="product-image position-relative">
                              <img
                                src="images/img3.png"
                                className="img-fluid"
                              />
                              <button type="button" className="btn-voice">
                                <i className="fas fa-volume-high fa-fw" />
                              </button>
                              <button type="button" className="btn-heart">
                                <i className="far fa-heart fa-fw" />
                              </button>
                              <span className="img-name">Silk</span>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="product-content-area">
                              <h6>Anubhutee</h6>
                              <p>
                                Women Teal Blue &amp; Beige Ethnic Motifs
                                Printed Straight Kurti
                              </p>
                              <div className="product-rating text-center">
                                <span>4.6</span>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star-half fa-fw" />
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price text-center">
                                <span className="less-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  6,450
                                </span>
                                <span className="total-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,450
                                </span>
                                <span className="less-save">
                                  You save{" "}
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,000{" "}
                                </span>
                              </div>
                              <div className="product-btn text-center">
                                <a
                                  href="#"
                                  className="btn-outline btn-sm w-100 mb-2"
                                >
                                  Quick View
                                </a>
                                <button
                                  type="button"
                                  className="btn btn-sm w-100 cart-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="product-block bg-4">
                        <div className="row g-0">
                          <div className="col-sm-7">
                            <div className="product-image position-relative">
                              <img
                                src="images/img4.png"
                                className="img-fluid"
                              />
                              <button type="button" className="btn-voice">
                                <i className="fas fa-volume-high fa-fw" />
                              </button>
                              <button type="button" className="btn-heart">
                                <i className="far fa-heart fa-fw" />
                              </button>
                              <span className="img-name">Pure Cotton</span>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="product-content-area">
                              <h6>Anubhutee</h6>
                              <p>
                                Women Teal Blue &amp; Beige Ethnic Motifs
                                Printed Straight Kurti
                              </p>
                              <div className="product-rating text-center">
                                <span>4.6</span>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star-half fa-fw" />
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price text-center">
                                <span className="less-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  6,450
                                </span>
                                <span className="total-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,450
                                </span>
                                <span className="less-save">
                                  You save{" "}
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,000{" "}
                                </span>
                              </div>
                              <div className="product-btn text-center">
                                <a
                                  href="#"
                                  className="btn-outline btn-sm w-100 mb-2"
                                >
                                  Quick View
                                </a>
                                <button
                                  type="button"
                                  className="btn btn-sm w-100 cart-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sorting-detail my-5">
                  <span className="textlight">Age</span>
                  <button type="button" className="btn-sorting active">
                    Under 10
                  </button>
                  <button type="button" className="btn-sorting">
                    10-30
                  </button>
                  <button type="button" className="btn-sorting">
                    30-50
                  </button>
                  <button type="button" className="btn-sorting">
                    Above 50{" "}
                  </button>
                  <br />
                  <span className="textlight">Material</span>
                  <button type="button" className="btn-sorting active">
                    Khaadi
                  </button>
                  <button type="button" className="btn-sorting">
                    Cotton
                  </button>
                  <button type="button" className="btn-sorting">
                    Nylon
                  </button>
                  <button type="button" className="btn-sorting">
                    Rayon
                  </button>
                  <button type="button" className="btn-sorting">
                    Mixed
                  </button>
                  <button type="button" className="btn-sorting">
                    Silk
                  </button>
                  <br />
                  <span className="textlight">Discount Range</span>
                  <button type="button" className="btn-sorting active">
                    10%
                  </button>
                  <button type="button" className="btn-sorting">
                    20%
                  </button>
                  <button type="button" className="btn-sorting">
                    30%
                  </button>
                  <button type="button" className="btn-sorting">
                    40%
                  </button>
                </div>
                <div className="rightside-bar">
                  <div className="detail-slider">
                    <div className="product-block bg-1">
                      <div className="row">
                        <div className="col-md-12 col-lg-6">
                          <div className="product-imgs">
                            <div className="img-select">
                              <div className="img-item">
                                <a href="#" data-id={1}>
                                  <img
                                    className
                                    src="images/detail-thumb1.png"
                                    alt="Detail image"
                                  />
                                </a>
                              </div>
                              <div className="img-item">
                                <a href="#" data-id={2}>
                                  <img
                                    className
                                    src="images/detail-thumb2.png"
                                    alt="Detail image"
                                  />
                                </a>
                              </div>
                              <div className="img-item">
                                <a href="#" data-id={3}>
                                  <img
                                    className
                                    src="images/detail-thumb3.png"
                                    alt="Detail image"
                                  />
                                </a>
                              </div>
                              <div className="img-item">
                                <a href="#" data-id={4}>
                                  <img
                                    className
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
                            <h2 className="product-title fs-24 font-sb">
                              Anubhutee
                            </h2>
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
                              Hurry! Only <strong>24 Items</strong> Left in
                              Stock
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
                                  <p className="fs-12 text-color-1">
                                    345 reviews
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6  text-center">
                                <div className="product-price">
                                  <p className="last-price mb-0 fs-12 font-r">
                                    <span className="text-color-1">
                                      ₹ 6,450
                                    </span>
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
                              <a href="#" className="font-m" title>
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
                  <div className="row">
                    <div className="col-xl-6 mb-4">
                      <div className="product-block bg-2 mb-0">
                        <div className="spin-block text-center">
                          <h2>Today’s Lucky Spin</h2>
                          <img
                            src="images/wheel.png"
                            alt="wheel"
                            className="img-fluid"
                          />
                          <p>Win Exciting Offers on this Product</p>
                        </div>
                        <div className="row g-0">
                          <div className="col-sm-7">
                            <div className="product-image position-relative">
                              <img
                                src="images/img2.png"
                                className="img-fluid"
                              />
                              <button type="button" className="btn-voice">
                                <i className="fas fa-volume-high fa-fw" />
                              </button>
                              <button type="button" className="btn-heart">
                                <i className="far fa-heart fa-fw" />
                              </button>
                              <span className="img-name">Cotton + Khaadi</span>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="product-content-area">
                              <h6>Anubhutee</h6>
                              <p>
                                Women Teal Blue &amp; Beige Ethnic Motifs
                                Printed Straight Kurti
                              </p>
                              <div className="product-rating text-center">
                                <span>4.6</span>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star-half fa-fw" />
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price text-center">
                                <span className="less-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  6,450
                                </span>
                                <span className="total-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,450
                                </span>
                                <span className="less-save">
                                  You save{" "}
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,000{" "}
                                </span>
                              </div>
                              <div className="product-btn text-center">
                                <a
                                  href="#"
                                  className="btn-outline btn-sm w-100 mb-2"
                                >
                                  Quick View
                                </a>
                                <button
                                  type="button"
                                  className="btn btn-sm w-100 cart-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="explore-block">
                        <h3>
                          <small>Upto</small> 60% Off <br />
                          <i>On</i> <span>Bridal Lehangas</span>
                        </h3>
                        <p>Offer Valid till 20th June</p>
                        <a href="#" className="btn">
                          Explore Now
                        </a>
                      </div>
                      <div className="product-block bg-6 mb-0">
                        <div className="row g-0">
                          <div className="col-sm-7">
                            <div className="product-image position-relative">
                              <img
                                src="images/img6.png"
                                className="img-fluid"
                              />
                              <button type="button" className="btn-voice">
                                <i className="fas fa-volume-high fa-fw" />
                              </button>
                              <button type="button" className="btn-heart">
                                <i className="far fa-heart fa-fw" />
                              </button>
                              <span className="img-name">Pure Cotton</span>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="product-content-area">
                              <h6>Anubhutee</h6>
                              <p>
                                Women Teal Blue &amp; Beige Ethnic Motifs
                                Printed Straight Kurti
                              </p>
                              <div className="product-rating text-center">
                                <span>4.6</span>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star fa-fw" />
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fas fa-star-half fa-fw" />
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price text-center">
                                <span className="less-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  6,450
                                </span>
                                <span className="total-price">
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,450
                                </span>
                                <span className="less-save">
                                  You save{" "}
                                  <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                                  3,000{" "}
                                </span>
                              </div>
                              <div className="product-btn text-center">
                                <a
                                  href="#"
                                  className="btn-outline btn-sm w-100 mb-2"
                                >
                                  Quick View
                                </a>
                                <button
                                  type="button"
                                  className="btn btn-sm w-100 cart-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav>
                  <ul className="pagination justify-content-center mt-5">
                    <li className="page-item">
                      <a className="prev" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        26
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="next" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Category */}
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
                        defaultValue
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
                    <a href="mailto:support@navtatva.com">
                      support@navtatva.com
                    </a>
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
                    for men, women and kids in India, you are at the right
                    place. Myntra is the ultimate destination for fashion and
                    lifestyle, being host to a wide array of merchandise
                    including clothing, footwear, accessories, jewellery,
                    personal care products and more. It is time to redefine your
                    style statement with our treasure-trove of trendy items. Our
                    online store brings you the latest in designer products
                    straight out of fashion houses. You can shop online at
                    Myntra from the comfort of your home and get your favourites
                    delivered right to your doorstep.
                  </p>
                  <h6>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h6>
                  <p>
                    Be it clothing, footwear or accessories, Myntra offers you
                    the ideal combination of fashion and functionality for men,
                    women and kids. You will realise that the sky is the limit
                    when it comes to the types of outfits that you can purchase
                    for different occasions.
                  </p>
                  <p>
                    Smart men’s clothing - At Myntra you will find myriad
                    options in smart formal shirts and trousers, cool T-shirts
                    and jeans, or kurta and pyjama combinations for men. Wear
                    your attitude with printed T-shirts. Create the
                    back-to-campus vibe with varsity T-shirts and distressed
                    jeans. Be it gingham, buffalo, or window-pane style, checked
                    shirts are unbeatably smart. Team them up with chinos,
                    cuffed jeans or cropped trousers for a smart casual look.
                    Opt for a stylish layered look with biker jackets. Head out
                    in cloudy weather with courage in water-resistant jackets.
                    Browse through our innerwear section to find supportive
                    garments which would keep you confident in any outfit.
                    Trendy women’s clothing - Online shopping for women at
                    Myntra is a mood-elevating experience. Look hip and stay
                    comfortable with chinos and printed shorts this summer. Look
                    hot on your date dressed in a little black dress, or opt for
                    red dresses for a sassy vibe. Striped dresses and T-shirts
                    represent the classic spirit of nautical fashion. Choose
                    your favourites from among Bardot, off-shoulder,
                    shirt-style, blouson, embroidered and peplum tops, to name a
                    few. Team them up with skinny-fit jeans, skirts or palazzos.
                    Kurtis and jeans make the perfect fusion-wear combination
                    for the cool urbanite. Our grand sarees and lehenga-choli
                    selections are perfect to make an impression at big social
                    events such as weddings. Our salwar-kameez sets, kurtas and
                    Patiala suits make comfortable options for regular wear.
                    Fashionable footwear - While clothes maketh the man, the
                    type of footwear you wear reflects your personality. We
                    bring you an exhaustive lineup of options in casual shoes
                    for men, such as sneakers and loafers. Make a power
                    statement at work dressed in brogues and oxfords. Practice
                    for your marathon with running shoes for men and women.
                    Choose shoes for individual games such as tennis, football,
                    basketball, and the like. Or step into the casual style and
                    comfort offered by sandals, sliders, and flip-flops. Explore
                    our lineup of fashionable footwear for ladies, including
                    pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy
                    the best of comfort and style with embellished and metallic
                    flats. Stylish accessories - Myntra is one of the best
                    online shopping sites for classy accessories that perfectly
                    complement your outfits. You can select smart analogue or
                    digital watches and match them up with belts and ties. Pick
                    up spacious bags, backpacks, and wallets to store your
                    essentials in style. Whether you prefer minimal jewellery or
                    grand and sparkling pieces, our online jewellery collection
                    offers you many impressive options. Fun and frolic - Online
                    shopping for kids at Myntra is a complete joy. Your little
                    princess is going to love the wide variety of pretty
                    dresses, ballerina shoes, headbands and clips. Delight your
                    son by picking up sports shoes, superhero T-shirts, football
                    jerseys and much more from our online store. Check out our
                    lineup of toys with which you can create memories to
                    cherish. Beauty begins here - You can also refresh,
                    rejuvenate and reveal beautiful skin with personal care,
                    beauty and grooming products from Myntra. Our soaps, shower
                    gels, skin care creams, lotions and other ayurvedic products
                    are specially formulated to reduce the effect of aging and
                    offer the ideal cleansing experience. Keep your scalp clean
                    and your hair uber-stylish with shampoos and hair care
                    products. Choose makeup to enhance your natural beauty.
                    Myntra is one of the best online shopping sites in India
                    which could help transform your living spaces completely.
                    Add colour and personality to your bedrooms with bed linen
                    and curtains. Use smart tableware to impress your guest.
                    Wall decor, clocks, photo frames and artificial plants are
                    sure to breathe life into any corner of your home.
                  </p>
                  <h6>AFFORDABLE FASHION AT YOUR FINGERTIPS</h6>
                  <p>
                    Myntra is one of the unique online shopping sites in India
                    where fashion is accessible to all. Check out our new
                    arrivals to view the latest designer clothing, footwear and
                    accessories in the market. You can get your hands on the
                    trendiest style every season in western wear. You can also
                    avail the best of ethnic fashion during all Indian festive
                    occasions. You are sure to be impressed with our seasonal
                    discounts on footwear, trousers, shirts, backpacks and more.
                    The end-of-season sale is the ultimate experience when
                    fashion gets unbelievably affordable.
                  </p>
                  <h6>MYNTRA INSIDER</h6>
                  <p>
                    Every online shopping experience is precious. Hence, a
                    cashless reward-based customer loyalty program called Myntra
                    Insider was introduced to enhance your online experience.
                    The program is applicable to every registered customer and
                    measures rewards in the form of Insider Points.
                  </p>
                  <p>
                    There are four levels to achieve in the program, as the
                    Insider Points accumulate. They are - Insider, Select, Elite
                    or Icon. Apart from offering discounts on Myntra and partner
                    platform coupons, each tier comes with its own special
                    perks.
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
                    Chance to get on guest lists for special events. Myntra
                    Studio - The Personalised Fashion Feed You Wouldn’t Want To
                    Miss Out On The world wide web is evolving at a relentless
                    pace, and with an accelerated growth each passing year,
                    there is bound to be an overwhelming surge of online
                    content. It was for this very reason that personalisation of
                    search feeds was proposed as a solution to combat the
                    overload of irrelevant formation.
                  </p>
                  <p>
                    Several social media platforms such as Facebook and
                    Instagram along with various online shopping websites have
                    chosen to help filter content, increasing user engagement,
                    retention and customer loyalty.
                  </p>
                  <p>
                    Myntra is one such online shopping website that joins the
                    list of platforms that help curate a personalised fashion
                    feed. Named theMyntra Studio, this personalised search feed
                    brings you the latest men and women’s fashion trends,
                    celebrity styles, branded content and daily updates from
                    your favourite fashion labels.
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
                    individuals with understanding trends and making suitable
                    for daily wear.
                  </p>
                  <p>
                    Imagine if you could keep up with every piece of clothing
                    and accessory worn by the fashion icons you look upto. From
                    Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a
                    ‘Stories’ feature to help track celebrity fashion trends,
                    exploring details such as their outfit of the day. This way,
                    you would not ever miss out on the latest celebrity fashion
                    trends, from all around the world.
                  </p>
                  <p>
                    Quick Fashion Tip And Tricks Whether it is draping a saree
                    into a dhoti style, wearing the right lingerie under certain
                    dresses or discovering multiple uses out of heavy ethnic
                    wear, Myntra Studio will help you acquire some unique and
                    useful fashion hacks. Each hack is designed with the
                    intention to help you get the best wear out of everything in
                    your wardrobe.
                  </p>
                  <p>
                    Updates on What Is Trending and New Product Launches Since
                    fast fashion seems to be extremely hard to keep up with
                    these days, a quick update on what is trending in
                    accessories, clothing and footwear would certainly be of
                    great help. Myntra Studio helps you stay connected to the
                    most beloved and sought after brands such as Puma,
                    Coverstory, The Label Life and so many more.
                  </p>
                  <p>
                    Your feed keeps you updated with stories of what the brands
                    are creating including clothing, footwear and jewellery,
                    along with their new seasonal collections.
                  </p>
                  <p>
                    Explicit Step-By-Step Beauty Routines From Experts Just like
                    fashion, the beauty community keeps on growing, and with
                    brands such as Huda Beauty, MAC and the latest Kay Beauty by
                    Katrina Kaif, are constantly coming up with mind-blowing
                    products. Whether it is creating a no-makeup look, different
                    winged eyeliners, do-it-yourself facial masks and other
                    personal care beauty routines, Myntra Studio is here for
                    you.
                  </p>
                  <p>
                    Celebrity Confessions And A Look Into Their Lives A bonus
                    feature that Myntra Studio has in store for you is celebrity
                    confessions and a peek into their lives. So, Myntra helps
                    you stay connected to your most beloved celebrities in a
                    matter of clicks.
                  </p>
                  <p>
                    If you are very particular when it comes to the content you
                    wish to view and engage with on social media, the ability to
                    intricately filter content helps achieve that. Applying the
                    same formula for hardcore fashion lovers and shoppers,
                    Myntra Studio brings you a daily fashion fix incorporating
                    everything that you love, all at one place. Sign up on
                    Myntra today and start organising your fashion feed, just
                    the way you want to.
                  </p>
                  <h6>MYNTRA APP</h6>
                  <p>
                    Myntra, India’s no. 1 online fashion destination justifies
                    its fashion relevance by bringing something new and chic to
                    the table on the daily. Fashion trends seem to change at
                    lightning speed, yet the Myntra shopping app has managed to
                    keep up without any hiccups. In addition, Myntra has vowed
                    to serve customers to the best of its ability by introducing
                    its first-ever loyalty program, The Myntra Insider. Gain
                    access to priority delivery, early sales, lucrative deals
                    and other special perks on all your shopping with the Myntra
                    app. Download the Myntra app on your Android or IOS device
                    today and experience shopping like never before!
                  </p>
                  <h6>HISTORY OF MYNTRA</h6>
                  <p>
                    Becoming India’s no. 1 fashion destination is not an easy
                    feat. Sincere efforts, digital enhancements and a team of
                    dedicated personnel with an equally loyal customer base have
                    made Myntra the online platform that it is today. The
                    original B2B venture for personalized gifts was conceived in
                    2007 but transitioned into a full-fledged ecommerce giant
                    within a span of just a few years. By 2012, Myntra had
                    introduced 350 Indian and international brands to its
                    platform, and this has only grown in number each passing
                    year. Today Myntra sits on top of the online fashion game
                    with an astounding social media following, a loyalty program
                    dedicated to its customers, and tempting, hard-to-say-no-to
                    deals.
                  </p>
                  <p>
                    The Myntra shopping app came into existence in the year 2015
                    to further encourage customers’ shopping sprees. Download
                    the app on your Android or IOS device this very minute to
                    experience fashion like never before
                  </p>
                  <h6>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h6>
                  <p>
                    Another reason why Myntra is the best of all online stores
                    is the complete convenience that it offers. You can view
                    your favourite brands with price options for different
                    products in one place. A user-friendly interface will guide
                    you through your selection process. Comprehensive size
                    charts, product information and high-resolution images help
                    you make the best buying decisions. You also have the
                    freedom to choose your payment options, be it card or
                    cash-on-delivery. The 30-day returns policy gives you more
                    power as a buyer. Additionally, the try-and-buy option for
                    select products takes customer-friendliness to the next
                    level.
                  </p>
                  <p>
                    Enjoy the hassle-free experience as you shop comfortably
                    from your home or your workplace. You can also shop for your
                    friends, family and loved-ones and avail our gift services
                    for special occasions.
                  </p>
                </div>
                <div className="copyright text-center">
                  © 2022 www.navtatva.com. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </div>
      {/* Cart Popup */}
      <div className="modal fade cart-popup" id="exampleModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body p-0">
              <div className="row m-0">
                <div className="col-12 col-md-5 bg-1 left-area">
                  <div className="cart-image text-center">
                    <h6>Anubhutee</h6>
                    <p>
                      Women Teal Blue Beige Ethnic Motifs Printed Straight Kurti
                    </p>
                    <img src="images/img1.png" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="cart-right-area">
                    <h4 className="text-center">
                      <img
                        src="images/bucket.png"
                        className="img-fluid d-block mx-auto mb-2"
                      />
                      Bulk Order
                    </h4>
                    <div className="table-responsive mt-5">
                      <table className="table cart-table">
                        <tbody>
                          <tr>
                            <td>
                              <span>Size</span>
                              <select className="form-select">
                                <option selected>36</option>
                                <option value={1}>28</option>
                                <option value={2}>34</option>
                                <option value={3}>40</option>
                              </select>
                            </td>
                            <td>
                              <span>Qty</span>
                              <select className="form-select">
                                <option selected>10</option>
                                <option value={1}>20</option>
                                <option value={2}>34</option>
                                <option value={3}>40</option>
                              </select>
                            </td>
                            <td className="price">₹3,789</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Size</span>
                              <select className="form-select">
                                <option selected>36</option>
                                <option value={1}>28</option>
                                <option value={2}>34</option>
                                <option value={3}>40</option>
                              </select>
                            </td>
                            <td>
                              <span>Qty</span>
                              <select className="form-select">
                                <option selected>10</option>
                                <option value={1}>20</option>
                                <option value={2}>34</option>
                                <option value={3}>40</option>
                              </select>
                            </td>
                            <td className="price">₹3,789</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Size</span>
                              <select className="form-select">
                                <option selected>36</option>
                                <option value={1}>28</option>
                                <option value={2}>34</option>
                                <option value={3}>40</option>
                              </select>
                            </td>
                            <td>
                              <span>Qty</span>
                              <select className="form-select">
                                <option selected>10</option>
                                <option value={1}>20</option>
                                <option value={2}>34</option>
                                <option value={3}>40</option>
                              </select>
                            </td>
                            <td className="price">₹3,789</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-center mb-4">
                      <button type="button" className="cartrow-btn">
                        <i className="fas fa-plus fa-fw" /> Add Another Size
                      </button>
                    </div>
                    <div className="subtotal d-md-flex justify-content-between">
                      <div className="subtotal-price">
                        <span className="textlight">Sub Total</span>
                        <h3>₹14,589.94</h3>
                      </div>
                      <div className="subtotal-btn">
                        <button type="button" className="btn">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Popup */}
      <div className="modal fade " id="searchPopup">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <div className="modal-body searchbar">
              <div className="searchbar-popup">
                <div className="input-group mb-4">
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
                  <input
                    type="text"
                    className="form-control fs-16"
                    placeholder="Find clothing from over 500+ categories..."
                  />
                </div>
                <div className="searchbar-popup-contnet">
                  <p className="textlight">For</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <div className="gender-box malebox">
                        <i className="fas fa-mars fa-fw" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="gender-box femalebox">
                        <i className="fas fa-venus fa-fw" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="gender-box otherbox">
                        <i className="fas fa-transgender fa-fw" />
                      </div>
                    </li>
                  </ul>
                  <p className="textlight">Material</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Cotton</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg3.jpg)",
                          }}
                        >
                          <span>Silk</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Khaadi</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Nylon</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <p className="textlight">Work</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Printed</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg3.jpg)",
                          }}
                        >
                          <span>Embroidery</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Plain</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <p className="textlight">Occasion</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Bridal</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg3.jpg)",
                          }}
                        >
                          <span>Office Wear</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Party Wear</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Traditional</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingScreen;
