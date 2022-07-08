import React, { useState } from "react";
import type { NextPage } from "next";
import ProductSmallBlock from "../app/components/product/ProductSmallBlock";
import { products } from "../app/constants/sampleData";
import GroupProductBlock from "../app/components/product/GroupProductBlock";
import ProductQuickView from "../app/components/product/ProductQuickView";
import Header from "../app/components/common/Header";
import SpinBlock from "../app/components/common/SpinBlock";
import ExploreBlock from "../app/components/common/ExploreBlock";
import Footer from "../app/components/common/Footer";
import CartPopup from "../app/components/common/CartPopup";
import SearchPopup from "../app/components/common/SearchPopup";
import CategoryFilter from "../app/components/common/CategoryFilter";
import SearchBlock from "../app/components/common/SearchBlock";
import SortingBlock from "../app/components/common/SortingBlock";
import SortByBlock from "../app/components/common/SortByBlock";

const ProductListingScreen: NextPage = () => {

   const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

   return (
    <div>
      <div className="wrapper">
        {/* Header */}
        <Header/>
        {/* End Header */}
        {/* Category */}
        <section className="category-section">
          <div className="container-fluid">
            <div className="row">
              <CategoryFilter />
              <div className="col-lg-9">
                <div className="rightside-bar">
                  <SearchBlock 
                    setOpenSearchBox = {setOpenSearchBox} 
                  />
                  <SortByBlock />
                  <div className="row">
                    {
                      products?.map( (item: any, index: number) => {
                        return (
                          <ProductSmallBlock key={index} {...item} />
                        )
                      })
                    }  
                    <GroupProductBlock />
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
                <SortingBlock />
                <div className="rightside-bar">
                  <ProductQuickView />
                  <div className="row">
                    <div className="col-xl-6 mb-4">
                      <div className="product-block bg-2 mb-0">
                        <SpinBlock />
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
                      <ExploreBlock />
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
        <Footer />
        {/* End Footer */}
      </div>
      {/* Cart Popup */}
      <CartPopup />
      {/* Search Popup */}
      <SearchPopup 
        openSearchBox = { openSearchBox } 
        setOpenSearchBox= {setOpenSearchBox} 
      />
    </div>
  );
};

export default ProductListingScreen;
