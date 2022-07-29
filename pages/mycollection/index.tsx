import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";
import { ocassionSliderSetting } from "../../app/utils/sliderConfig";
import Slider from "react-slick";

const CustomisedShoppingExperienceScreen: NextPage = () => {


    return (
        <div className="mycollection">
            <div className="wrapper">
                {/* Header */}
                <Header />
                {/* End Header */}
            </div>

            <section className="sliderView m-5 m-md-5 ">
                <h2 className="fs-40 font-b text-color-2">My Collections</h2>

                <div className="ocassion-slider mt-4 mt-lg-5">
                <Slider {...ocassionSliderSetting}>
                  <div className="collection mx-5  position-relative mr-md-5 mr-5">

                                    <div className="">
                     <a href="#">
                        <div className="imgsec">
                        <img className="w-100" src="images/img1.png" alt="" />
                        </div>
                        <div className="text-center mt-4">
                           <h3 className="fs-20  font-sb text-color-2 mb-0">Kurtis</h3>
                           <p  className="fs-12 font-r text-color-1">created on 9th July 2022</p>
                        </div>
                     </a>
                     </div>
                  </div>
                  <div className="collection mx-5 position-relative">
                    <div>


                     <a href="#">
                        <div className="imgsec">
                        <img className="w-100" src="images/img1.png" alt="" />
                        </div>
                        <div className="text-center mt-4">
                           <h3 className="fs-20  font-sb text-color-2 mb-0">Kurtis</h3>
                           <p  className="fs-12 font-r text-color-1">created on 9th July 2022</p>
                        </div>
                     </a>
                     </div>
                  </div>
                  <div className="collection mx-5 position-relative">
                    <div>


                     <a href="#">
                        <div className="imgsec">
                        <img className="w-100" src="images/img1.png" alt="" />
                        </div>
                        <div className="text-center mt-4">
                           <h3 className="fs-20  font-sb text-color-2 mb-0">Kurtis</h3>
                           <p  className="fs-12 font-r text-color-1">created on 9th July 2022</p>
                        </div>
                     </a>
                     </div>
                  </div>
                  <div className="collection mx-5 position-relative">
                     <a href="#">
                        <div className="imgsec">
                        <img className="w-100" src="images/img1.png" alt="" />
                        </div>
                        <div className="text-center mt-4">
                           <h3 className="fs-20  font-sb text-color-2 mb-0">Kurtis</h3>
                           <p  className="fs-12 font-r text-color-1">created on 9th July 2022</p>
                        </div>
                     </a>
                  </div>
                      <div className="collection mx-5 position-relative">
                     <a href="#">
                        <div className="imgsec">
                        <img className="w-100" src="images/img1.png" alt="" />
                        </div>
                        <div className="text-center mt-4">
                           <h3 className="fs-20  font-sb text-color-2 mb-0">Kurtis</h3>
                           <p  className="fs-12 font-r text-color-1">created on 9th July 2022</p>
                        </div>
                     </a>
                  </div>
                  </Slider>
                </div>

            </section>

            <section className="productBar m-5 m-md-5">
                <h2 className="fs-40 font-b text-color-2">Other Wishlisted Products</h2>
                <div className="mt-4 mt-lg-5">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                          <div className="collection position-relative">
                              <a href="#">
                               <div className="imgsec">
                               <img className="w-100" src="images/img1.png" alt="" />
                               </div>
                                <div className="hoverBlock">
                                   <div className="overlay   text-start">
                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                    <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                                    <div className="product-rating mb-3 mt-0">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star-half-alt"></i>
                                    </div>
                                     <p className="fs-20 font-sb text-color-5">₹3,450</p>
                                     <a href="#" className="btn btnbg fs-13 " tabIndex={0}>Add to Cart</a>
                                    <div className="btnbarcart">
                                     <a href="#" className="btn fs-13 quick " tabIndex={0}>Quick View</a>
                                    <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                                    </div>
                                </div>
                              </div>
                             </a>
                          </div>
                        </div>
                  </div>
                </div>
            </section>
            {/* <section className="customized text-center position-absolute">
                <div className="bannerContent">
                    <h1>A <span className="text-color-4">Customised</span><span className="d-block"></span> Shopping Experience</h1>
                    <p className="fs-24 text-color-8 pt-4">Connect with our in-store seller right from your home.</p>

                    <div className="form-group d-block d-md-flex align-items-center justify-content-center mt-4 mt-md-4">
                        <input type="text" className="form-control" value="Ex: 809090" />
                        <button type="submit" className="btn ms-3 mt-4 mt-md-0">Enter The Store</button>
                    </div>
                </div>
            </section> */}
{/*
            <div className="modal fade cart-popup" id="exampleModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body p-0">
                            <div className="row m-0">
                                <div className="col-12 col-md-5 bg-1 left-area">
                                    <div className="cart-image text-center">
                                        <h6>Anubhutee</h6>
                                        <p>Women Teal Blue Beige Ethnic Motifs Printed Straight Kurti</p>
                                        <img src="images/img1.png" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className="cart-right-area">
                                        <h4 className="text-center">
                                            <img src="images/bucket.png" className="img-fluid d-block mx-auto mb-2" />
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
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price">₹3,789</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price">₹3,789</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price">₹3,789</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-center mb-4">
                                            <button type="button" className="cartrow-btn"><i className="fas fa-plus fa-fw"></i> Add Another Size</button>
                                        </div>
                                        <div className="subtotal d-md-flex justify-content-between">
                                            <div className="subtotal-price">
                                                <span className="textlight">Sub Total</span>
                                                <h3>₹14,589.94</h3>
                                            </div>
                                            <div className="subtotal-btn">
                                                <button type="button" className="btn">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default CustomisedShoppingExperienceScreen;
