import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Slider from "react-slick";
import {
  pdpSliderSetting,
  ocassionSliderSetting,
} from "../../app/utils/sliderConfig";
import Header from "../../app/components/common/Header";
import Footer from "../../app/components/common/Footer";

const ProductBySlugScreen: NextPage = () => {

  const router = useRouter();
  const { productSlug } = router.query;
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

   return (
    <div className="product-detail-page">
      <div className="wrapper">
          {/* Header */}
          <Header/>
          {/* End Header */}
          <section className="mt-0 mt-lg-5 pdp-detail">           
              <div className="main d-lg-none d-block">
                  <div className="slider slider-for">
                      <div><img className="w-100" src="/images/detail-img.png" alt="" /></div>
                      <div><img className="w-100" src="/images/detail-img.png" alt="" /></div>
                      <div><img className="w-100" src="/images/detail-img.png" alt="" /></div>
                      <div><img className="w-100" src="/images/detail-img.png" alt="" /></div>
                      <div><img className="w-100" src="/images/detail-img.png" alt="" /></div>
                      <div><img className="w-100" src="/images/detail-img.png" alt="" /></div>
                  </div>
                  <div className="slider slider-nav">
                      <div className="mx-2"><img className="w-100" src="/images/detail-thumb3.png" alt="" /></div>
                      <div className="mx-2"><img className="w-100" src="/images/detail-thumb3.png" alt="" /></div>
                      <div className="mx-2"><img className="w-100" src="/images/detail-thumb3.png" alt="" /></div>
                      <div className="mx-2"><img className="w-100" src="/images/detail-thumb3.png" alt="" /></div>
                      <div className="mx-2"><img className="w-100" src="/images/detail-thumb3.png" alt="" /></div>
                      <div className="mx-2"><img className="w-100" src="/images/detail-thumb3.png" alt="" /></div>
                  </div>
              </div>
              <div className="pdp-slider d-lg-block d-none">
                  <Slider {...pdpSliderSetting}>
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="discount-offer text-white">
                                    <h4 className="fs-16 font-sb">20% Discount</h4>
                                    <p className="fs-13 font-r">22 : 38 : 18</p>
                                </div>
                                <div className="offtype mt-5">
                                    <a href="#"><img className="me-2 d-inline-block" src="/images/Offer.png" alt="" />Offers</a>
                                </div>
                                <p className="mt-4">
                                    <span className="font-sb text-color-2">Get <img className="mx-2 d-inline-block" src="/images/coins.png" alt="" /> 1000</span> for every size XL order placed
                                </p>
                                <p className="mt-4">Avail <span className="font-sb text-color-2">No Cost EMI</span> on select cards for orders above ₹3000</p>
                                <p className="mt-4">Get GST invoice and <span className="font-sb text-color-2">save up to 28%</span> on business purchases.</p>
                                <ul className="length mt-5">
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Sleeve Length</span>
                                        <p className="fs-14 font-r text-color-2">Three-Quarter Sleeve</p>
                                    </li>
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Fabric</span>
                                        <p className="fs-14 font-r text-color-2">Viscose Rayon</p>
                                    </li>
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Pattern</span>
                                        <p className="fs-14 font-r text-color-2">Printed</p>
                                    </li>
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Wash Care</span>
                                        <p className="fs-14 font-r text-color-2">Hand Wash</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src="/images/detail-img.png" alt="" />
                            </div>
                            <div className="col-md-4">
                                <div className="">
                                    <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
                                    <p className="fs-20 font-r text-color-2 mt-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti</p>
                                    <div className="custom-radios">
                                        <p className="fs-14 font-r text-color-1 mt-4 mb-3">Colours Available</p>
                                        <div>
                                            <input type="radio" id="color-1" name="color" value="color-1" checked={false} tabIndex={0} />
                                            <label htmlFor="color-1">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="color-2" name="color" value="color-2" tabIndex={0} />
                                            <label htmlFor="color-2">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="color-3" name="color" value="color-3" tabIndex={0} />
                                            <label htmlFor="color-3">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="color-4" name="color" value="color-4" tabIndex={0} />
                                            <label htmlFor="color-4">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="cart-right-area p-0">
                                        <div className="table-responsive mt-5">
                                            <table className="table cart-table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected={true}>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected={true}>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price d-flex">
                                                            <span className="align-self-center">Color</span>
                                                            <div className="custom-radios">
                                                                <div>
                                                                    <input type="radio" id="color-3" name="color" value="color-3" checked={false} tabIndex={0} />
                                                                    <label htmlFor="color-3">
                                                                        <span>
                                                                            <div></div>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected={true}>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected={true}>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price d-flex">
                                                            <span className="align-self-center">Color</span>
                                                            <div className="custom-radios">
                                                                <div>
                                                                    <input type="radio" id="color-2" name="color" value="color-2" checked={false} tabIndex={0} />
                                                                    <label htmlFor="color-2">
                                                                        <span>
                                                                            <div></div>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected={true}>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected={true}>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price d-flex">
                                                            <span className="align-self-center">Color</span>
                                                            <div className="custom-radios">
                                                                <div>
                                                                    <input type="radio" id="color-1" name="color" value="color-1" checked={false} tabIndex={0} />
                                                                    <label htmlFor="color-1">
                                                                        <span>
                                                                            <div></div>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-center mb-4">
                                            <button type="button" className="cartrow-btn"><i className="fas fa-plus fa-fw"></i> Add Another Size</button>
                                        </div>
                                    </div>
                                    <a href="#" className="avail mt-4" title="Add 20 more units in Size 36 to avail discounts">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle me-2" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                            />
                                        </svg>
                                        Add 20 more units in Size 36 to avail discounts
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="discount-offer text-white">
                                    <h4 className="fs-16 font-sb">20% Discount</h4>
                                    <p className="fs-13 font-r">22 : 38 : 18</p>
                                </div>
                                <div className="offtype mt-5">
                                    <a href="#"><img className="me-2 d-inline-block" src="/images/Offer.png" alt="" />Offers</a>
                                </div>
                                <p className="mt-4">
                                    <span className="font-sb text-color-2">Get <img className="mx-2 d-inline-block" src="/images/coins.png" alt="" /> 1000</span> for every size XL order placed
                                </p>
                                <p className="mt-4">Avail <span className="font-sb text-color-2">No Cost EMI</span> on select cards for orders above ₹3000</p>
                                <p className="mt-4">Get GST invoice and <span className="font-sb text-color-2">save up to 28%</span> on business purchases.</p>
                                <ul className="length mt-5">
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Sleeve Length</span>
                                        <p className="fs-14 font-r text-color-2">Three-Quarter Sleeve</p>
                                    </li>
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Fabric</span>
                                        <p className="fs-14 font-r text-color-2">Viscose Rayon</p>
                                    </li>
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Pattern</span>
                                        <p className="fs-14 font-r text-color-2">Printed</p>
                                    </li>
                                    <li>
                                        <span className="fs-12 font-r text-color-5">Wash Care</span>
                                        <p className="fs-14 font-r text-color-2">Hand Wash</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src="/images/detail-img1.png" alt="" />
                            </div>
                            <div className="col-md-4">
                                <div className="">
                                    <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
                                    <p className="fs-20 font-r text-color-2 mt-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti</p>
                                    <div className="custom-radios">
                                        <p className="fs-14 font-r text-color-1 mt-4 mb-3">Colours Available</p>
                                        <div>
                                            <input type="radio" id="color-1" name="color" value="color-1" checked={false} tabIndex={0} />
                                            <label htmlFor="color-1">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="color-2" name="color" value="color-2" tabIndex={0} />
                                            <label htmlFor="color-2">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="color-3" name="color" value="color-3" tabIndex={0} />
                                            <label htmlFor="color-3">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="color-4" name="color" value="color-4" tabIndex={0} />
                                            <label htmlFor="color-4">
                                                <span>
                                                    <div></div>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="cart-right-area p-0">
                                        <div className="table-responsive mt-5">
                                            <table className="table cart-table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected={true}>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected={true}>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price d-flex">
                                                            <span className="align-self-center">Color</span>
                                                            <div className="custom-radios">
                                                                <div>
                                                                    <input type="radio" id="color-3" name="color" value="color-3" checked={false} tabIndex={0} />
                                                                    <label htmlFor="color-3">
                                                                        <span>
                                                                            <div></div>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected={true}>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected={true}>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price d-flex">
                                                            <span className="align-self-center">Color</span>
                                                            <div className="custom-radios">
                                                                <div>
                                                                    <input type="radio" id="color-2" name="color" value="color-2" checked={false} tabIndex={0} />
                                                                    <label htmlFor="color-2">
                                                                        <span>
                                                                            <div></div>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>Size</span>
                                                            <select className="form-select">
                                                                <option selected={true}>36</option>
                                                                <option value="1">28</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>Qty</span>
                                                            <select className="form-select">
                                                                <option selected={true}>10</option>
                                                                <option value="1">20</option>
                                                                <option value="2">34</option>
                                                                <option value="3">40</option>
                                                            </select>
                                                        </td>
                                                        <td className="price d-flex">
                                                            <span className="align-self-center">Color</span>
                                                            <div className="custom-radios">
                                                                <div>
                                                                    <input type="radio" id="color-1" name="color" value="color-1" checked={false} tabIndex={0} />
                                                                    <label htmlFor="color-1">
                                                                        <span>
                                                                            <div></div>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-center mb-4">
                                            <button type="button" className="cartrow-btn"><i className="fas fa-plus fa-fw"></i> Add Another Size</button>
                                        </div>
                                    </div>
                                    <a href="#" className="avail mt-4" title="Add 20 more units in Size 36 to avail discounts">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle me-2" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                            />
                                        </svg>
                                        Add 20 more units in Size 36 to avail discounts
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </Slider>
              </div>
          </section>
      </div>
      <div className="m-bg position-relative">
          <div className="wrapper">
              <section className="mt-5 mt-lg-0">
                  <div className="product-content d-block d-lg-none">
                      <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
                      <p className="fs-14 font-r text-color-1 mt-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti</p>
                      <div className="custom-radios">
                          <p className="fs-12 font-r text-color-1 mt-4 mb-3">Color</p>
                          <div>
                              <input type="radio" id="color-1" name="color" value="color-1" checked={false} tabIndex={0} />
                              <label htmlFor="color-1">
                                  <span>
                                      <div></div>
                                  </span>
                              </label>
                          </div>
                          <div>
                              <input type="radio" id="color-2" name="color" value="color-2" tabIndex={0} />
                              <label htmlFor="color-2">
                                  <span>
                                      <div></div>
                                  </span>
                              </label>
                          </div>
                          <div>
                              <input type="radio" id="color-3" name="color" value="color-3" tabIndex={0} />
                              <label htmlFor="color-3">
                                  <span>
                                      <div></div>
                                  </span>
                              </label>
                          </div>
                          <div>
                              <input type="radio" id="color-4" name="color" value="color-4" tabIndex={0} />
                              <label htmlFor="color-4">
                                  <span>
                                      <div></div>
                                  </span>
                              </label>
                          </div>
                      </div>
                      <p className="fs-12 font-r text-color-1 mt-4 mb-3">size available</p>
                      <ul className="size d-flex">
                          <li>S</li>
                          <li>M</li>
                          <li className="available">L</li>
                          <li className="select">XL</li>
                          <li className="available">XXL</li>
                          <li className="custom-size">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rulers me-2" viewBox="0 0 16 16">
                                  <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z"></path>
                              </svg>
                              Custome Size
                          </li>
                          <li className="sizechart">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill me-2" viewBox="0 0 16 16">
                                  <path
                                      d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"
                                  ></path>
                              </svg>
                              Size Chart
                          </li>
                      </ul>
                      <ul className="length mt-4">
                          <li>
                              <span className="fs-12 font-r text-color-5">Sleeve Length</span>
                              <p className="fs-14 font-r text-color-2">Three-Quarter Sleeve</p>
                          </li>
                          <li>
                              <span className="fs-12 font-r text-color-5">Fabric</span>
                              <p className="fs-14 font-r text-color-2">Viscose Rayon</p>
                          </li>
                          <li>
                              <span className="fs-12 font-r text-color-5">Pattern</span>
                              <p className="fs-14 font-r text-color-2">Printed</p>
                          </li>
                          <li>
                              <span className="fs-12 font-r text-color-5">Wash Care</span>
                              <p className="fs-14 font-r text-color-2">Hand Wash</p>
                          </li>
                      </ul>
                  </div>

                  <ul className="nav nav-tabs border-0 justify-content-between mb-3" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                          <button className="nav-link active font-sb bg-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
                                  <path
                                      fill-rule="evenodd"
                                      d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                  />
                              </svg>
                              Description
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link font-sb bg-2 second" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                              </svg>
                              References
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link font-sb bg-3 third" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                  <path
                                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                  />
                              </svg>
                              Reviews
                          </button>
                      </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <h4 className="fs-20 font-sb">About the Brand</h4>
                          <p>
                              Everything created at the House of Pataudi is inspired by the modern Indian sensibility. We believe in a seamless weave of the past with the present. Our carefully crafted pieces give expression to a refined
                              and effortless way of life.
                          </p>
                          <br />
                          <br />
                          <h4 className="fs-20 font-sb">About the Collection</h4>
                          <p>
                              Everything created at the House of Pataudi is inspired by the modern Indian sensibility. We believe in a seamless weave of the past with the present. Our carefully crafted pieces give expression to a refined
                              and effortless way of life.
                          </p>
                          <br />
                          <br />
                          <h4 className="fs-20 font-sb">Size & Fit</h4>
                          <p>The model (height 5'8) is wearing a size S</p>
                          <br />
                          <br />
                          <h4 className="fs-20 font-sb">About the Brand</h4>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                              elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                          </p>
                      </div>
                      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <div className="row">
                              <div className="col-md-4">
                                  <img src="/images/ref-1.png" alt="" className="img-fluid" />
                              </div>
                              <div className="col-md-8">
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="partCollection">
                                              <h3 className="fs-24 font-sb text-color-4">Part of Manish Malhotra’s Couture Collection</h3>
                                              <p className="fs-20 font-r text-white py-3">
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                                                  nostra, per inceptos himenaeos.
                                              </p>
                                              <a className="fs-20 font-r text-white" href="#" title="View Collectio">
                                                  View Collection
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                  </svg>
                                              </a>
                                          </div>
                                      </div>
                                      <div className="col-md-12 mt-4 d-flex">
                                          <a href="#"><img className="w-100 img-fluid" src="/images/ref-2.png" alt=""/></a>
                                          <a href="#"><img className="w-100 img-fluid" src="/images/ref-3.png" alt=""/></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                          <div className="row">
                              <div className="col-md-6 col-lg-5">
                                  <div className="totalReview mb-5">
                                      <h4 className="fs-36 font-r text-color-2">4.6</h4>
                                      <span className="fs-10 font-sb text-color-1">345 Verified Buyers</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-star-fill text-color-1" viewBox="0 0 16 16">
                                          <path
                                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                          />
                                      </svg>
                                  </div>
                                  <div className="row align-items-center barReview mb-3">
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-1">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#C4BAAA" className="bi bi-star ms-0" viewBox="0 0 16 16">
                                                  <path
                                                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                                  />
                                              </svg>
                                          </h4>
                                      </div>
                                      <div className="col-9">
                                          <div className="progress">
                                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-2">22</h4>
                                      </div>
                                  </div>
                                  <div className="row align-items-center barReview mb-3">
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-1">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#C4BAAA" className="bi bi-star ms-0" viewBox="0 0 16 16">
                                                  <path
                                                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                                  />
                                              </svg>
                                          </h4>
                                      </div>
                                      <div className="col-9">
                                          <div className="progress">
                                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-2">22</h4>
                                      </div>
                                  </div>
                                  <div className="row align-items-center barReview mb-3">
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-1">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#C4BAAA" className="bi bi-star ms-0" viewBox="0 0 16 16">
                                                  <path
                                                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                                  />
                                              </svg>
                                          </h4>
                                      </div>
                                      <div className="col-9">
                                          <div className="progress">
                                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-2">22</h4>
                                      </div>
                                  </div>
                                  <div className="row align-items-center barReview mb-3">
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-1">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#C4BAAA" className="bi bi-star ms-0" viewBox="0 0 16 16">
                                                  <path
                                                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                                  />
                                              </svg>
                                          </h4>
                                      </div>
                                      <div className="col-9">
                                          <div className="progress">
                                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-2">22</h4>
                                      </div>
                                  </div>
                                  <div className="row align-items-center barReview mb-3">
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-1">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#C4BAAA" className="bi bi-star ms-0" viewBox="0 0 16 16">
                                                  <path
                                                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                                  />
                                              </svg>
                                          </h4>
                                      </div>
                                      <div className="col-9">
                                          <div className="progress">
                                              <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <h4 className="fs-20 font-r text-color-2">22</h4>
                                      </div>
                                  </div>
                                  <div className="customersay mt-5">
                                      <h4 className="fs-16 font-r text-color-2 text-uppercase pb-4">
                                          What Customer Said
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" className="bi bi-star" viewBox="0 0 16 16">
                                              <path
                                                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                              />
                                          </svg>
                                      </h4>
                                      <div className="row align-items-center barReview mb-3">
                                          <div className="col-md-12">
                                              <div className="">
                                                  <h4 className="fs-16 font-r text-color-1">Fit</h4>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="progress">
                                                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <h4 className="fs-13 font-r text-color-2">As Expected 50%</h4>
                                          </div>
                                      </div>
                                      <div className="row align-items-center barReview mb-3">
                                          <div className="col-md-12">
                                              <div className="">
                                                  <h4 className="fs-16 font-r text-color-1">Lenth</h4>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="progress">
                                                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <h4 className="fs-13 font-r text-color-2">As Expected 50%</h4>
                                          </div>
                                      </div>
                                      <div className="row align-items-center barReview mb-3">
                                          <div className="col-md-12">
                                              <div className="">
                                                  <h4 className="fs-16 font-r text-color-1">Transparency</h4>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="progress">
                                                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{"width": "70%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <h4 className="fs-13 font-r text-color-2">As Expected 50%</h4>
                                          </div>
                                      </div>
                                      <a href="#" className="fs-13 font-sb btn-view">View Detail</a>
                                  </div>
                              </div>
                              <div className="col-md-6 col-lg-5 offset-lg-2">
                                  <h4 className="fs-32 font-sb text-color-1 pb-4">Customer Reviews (32)</h4>
                                  <ul>
                                      <li className="">
                                          <div className="starReview green text-white d-inline-block me-3">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#fff" className="bi bi-star-fill text-color-1" viewBox="0 0 16 16">
                                                  <path
                                                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                  />
                                              </svg>
                                          </div>
                                          <div className="d-inline-block">
                                              <ul>
                                                  <li className="list-inline-item">
                                                      <a href="#"><img className="img-fluid" src="/images/cr-1.png" alt="" /></a>
                                                  </li>
                                                  <li className="list-inline-item">
                                                      <a href="#"><img className="img-fluid" src="/images/cr-1.png" alt="" /></a>
                                                  </li>
                                                  <li className="list-inline-item">
                                                      <a href="#"><img className="img-fluid" src="/images/cr-1.png" alt="" /></a>
                                                  </li>
                                                  <li className="list-inline-item">
                                                      <a href="#"><img className="img-fluid" src="/images/cr-1.png" alt="" /></a>
                                                  </li>
                                              </ul>
                                              <div className="pt-4">
                                                  <h4 className="fs-13 font-r text-color-2">Little loose from shoulder</h4>
                                                  <ul className="littleBar pb-4">
                                                      <li className="list-inline-item me-0"><a href="#" className="fs-10 font-r text-color-1">Anuj Sharma</a></li>
                                                      <li className="text-color-1 fs-10 list-inline-item me-0">|</li>
                                                      <li className="list-inline-item"><a href="#" className="fs-10 font-r text-color-1">12 June 2022</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </li>
                                      <li className="mt-4">
                                          <div className="starReview green text-white d-inline-block me-3">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#fff" className="bi bi-star-fill text-color-1" viewBox="0 0 16 16">
                                                  <path
                                                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                  />
                                              </svg>
                                          </div>
                                          <div className="d-inline-block barwidth">
                                              <h4 className="fs-13 font-r text-color-2">Little loose from shoulder</h4>
                                              <ul className="littleBar pb-4">
                                                  <li className="list-inline-item me-0"><a href="#" className="fs-10 font-r text-color-1">Anuj Sharma</a></li>
                                                  <li className="text-color-1 fs-10 list-inline-item me-0">|</li>
                                                  <li className="list-inline-item"><a href="#" className="fs-10 font-r text-color-1">12 June 2022</a></li>
                                              </ul>
                                          </div>
                                      </li>
                                      <li className="mt-4">
                                          <div className="starReview orange text-white d-inline-block me-3">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#fff" className="bi bi-star-fill text-color-1" viewBox="0 0 16 16">
                                                  <path
                                                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                  />
                                              </svg>
                                          </div>
                                          <div className="d-inline-block barwidth">
                                              <h4 className="fs-13 font-r text-color-2">Little loose from shoulder</h4>
                                              <ul className="littleBar pb-4">
                                                  <li className="list-inline-item me-0"><a href="#" className="fs-10 font-r text-color-1">Anuj Sharma</a></li>
                                                  <li className="text-color-1 fs-10 list-inline-item me-0">|</li>
                                                  <li className="list-inline-item"><a href="#" className="fs-10 font-r text-color-1">12 June 2022</a></li>
                                              </ul>
                                          </div>
                                      </li>
                                      <li className="mt-4">
                                          <div className="starReview red text-white d-inline-block me-3">
                                              5
                                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#fff" className="bi bi-star-fill text-color-1" viewBox="0 0 16 16">
                                                  <path
                                                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                  />
                                              </svg>
                                          </div>
                                          <div className="d-inline-block barwidth">
                                              <h4 className="fs-13 font-r text-color-2">Little loose from shoulder</h4>
                                              <ul className="littleBar pb-4">
                                                  <li className="list-inline-item me-0"><a href="#" className="fs-10 font-r text-color-1">Anuj Sharma</a></li>
                                                  <li className="text-color-1 fs-10 list-inline-item me-0">|</li>
                                                  <li className="list-inline-item"><a href="#" className="fs-10 font-r text-color-1">12 June 2022</a></li>
                                              </ul>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="d-none d-lg-block">
                  <div className="row deliveryOption-row">
                      <div className="col-md-4">
                          <div className="deliveryOption position-relative text-center">
                              <img className="" src="/images/truck.png" alt="" />
                              <h4 className="mt-4">Get it by Wed, June 27</h4>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="deliveryOption position-relative text-center">
                              <img className="" src="/images/cod.png" alt="" />
                              <h4 className="mt-4">Pay on Delivery Available</h4>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="deliveryOption position-relative text-center">
                              <img className="" src="/images/return.png" alt="" />
                              <h4 className="mt-4">Easy 30 day return & exchange</h4>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="mt-4 mt-md-5 pb-5">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="heading3">
                              <h2><span className="bg9">Similar Products</span></h2>
                          </div>
                      </div>
                      <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                          <div className="ocassion-slider">
                              <Slider {...ocassionSliderSetting}>
                                <div className="thumb position-relative text-center">
                                    <div className="bg1">
                                        <a href="#"><img className="w-100" src="/images/Occassion1.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg2">
                                        <a href="#"><img className="w-100" src="/images/Occassion2.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg3">
                                        <a href="#"><img className="w-100" src="/images/Occassion3.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg4">
                                        <a href="#"><img className="w-100" src="/images/Occassion4.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg4">
                                        <a href="#"><img className="w-100" src="/images/Occassion4.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </Slider>
                          </div>
                      </div>
                      <div className="col-md-12 text-center mt-4">
                          <a href="#" className="btn btn-outline-danger ms-3">
                              Womens Kurtis
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                              </svg>
                          </a>
                          <a href="#" className="btn btn-outline-danger ms-3">
                              Printed
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                              </svg>
                          </a>
                          <a href="#" className="btn btn-outline-danger ms-3">
                              Cotton
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                              </svg>
                          </a>
                          <a href="#" className="btn btn-outline-danger ms-3">
                              Three-Quarter Sleeve
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                              </svg>
                          </a>
                      </div>
                  </div>
              </section>
              <section className="mt-4 mt-md-5 pb-5">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="heading3">
                              <h2><span className="bg9">Upsell / Cross-Sells are offered</span></h2>
                          </div>
                      </div>
                      <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                          <div className="ocassion-slider">
                            <Slider {...ocassionSliderSetting}>
                                <div className="thumb position-relative text-center">
                                    <div className="bg1">
                                        <a href="#"><img className="w-100" src="/images/Occassion1.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg2">
                                        <a href="#"><img className="w-100" src="/images/Occassion2.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg3">
                                        <a href="#"><img className="w-100" src="/images/Occassion3.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg4">
                                        <a href="#"><img className="w-100" src="/images/Occassion4.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg4">
                                        <a href="#"><img className="w-100" src="/images/Occassion4.png" alt="" /></a>
                                        <div className="hoverBlock">
                                            <div className="overlay text-center">
                                                <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                                <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                                <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                                <a href="#" className="btn fs-13">Add to Cart</a>
                                            </div>
                                            <div className="speaker">
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/wishlist-detail.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/volume.png" />
                                                </a>
                                                <a href="#" className="d-block mb-5" tabIndex={0}>
                                                    <img src="/images/swap.png" />
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
              <section className="mt-4 mt-md-5 pb-5">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="heading3">
                              <h2><span className="bg9">Recently Viewed Items</span></h2>
                          </div>
                      </div>
                      <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                          <div className="ocassion-slider">
                            <Slider {...ocassionSliderSetting}>
                              <div className="thumb position-relative text-center">
                                  <div className="bg1">
                                      <a href="#"><img className="w-100" src="/images/Occassion1.png" alt="" /></a>
                                      <div className="hoverBlock">
                                          <div className="overlay text-center">
                                              <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                              <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                              <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                              <a href="#" className="btn fs-13">Add to Cart</a>
                                          </div>
                                          <div className="speaker">
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/wishlist-detail.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/volume.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/swap.png" />
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="thumb position-relative text-center">
                                  <div className="bg2">
                                      <a href="#"><img className="w-100" src="/images/Occassion2.png" alt="" /></a>
                                      <div className="hoverBlock">
                                          <div className="overlay text-center">
                                              <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                              <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                              <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                              <a href="#" className="btn fs-13">Add to Cart</a>
                                          </div>
                                          <div className="speaker">
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/wishlist-detail.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/volume.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/swap.png" />
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="thumb position-relative text-center">
                                  <div className="bg3">
                                      <a href="#"><img className="w-100" src="/images/Occassion3.png" alt="" /></a>
                                      <div className="hoverBlock">
                                          <div className="overlay text-center">
                                              <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                              <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                              <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                              <a href="#" className="btn fs-13">Add to Cart</a>
                                          </div>
                                          <div className="speaker">
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/wishlist-detail.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/volume.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/swap.png" />
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="thumb position-relative text-center">
                                  <div className="bg4">
                                      <a href="#"><img className="w-100" src="/images/Occassion4.png" alt="" /></a>
                                      <div className="hoverBlock">
                                          <div className="overlay text-center">
                                              <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                              <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                              <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                              <a href="#" className="btn fs-13">Add to Cart</a>
                                          </div>
                                          <div className="speaker">
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/wishlist-detail.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/volume.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/swap.png" />
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="thumb position-relative text-center">
                                  <div className="bg4">
                                      <a href="#"><img className="w-100" src="/images/Occassion4.png" alt="" /></a>
                                      <div className="hoverBlock">
                                          <div className="overlay text-center">
                                              <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                                              <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                                              <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                                              <a href="#" className="btn fs-13">Add to Cart</a>
                                          </div>
                                          <div className="speaker">
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/wishlist-detail.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/volume.png" />
                                              </a>
                                              <a href="#" className="d-block mb-5" tabIndex={0}>
                                                  <img src="/images/swap.png" />
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
          <Footer/>
          <div className="cartBar">
              <ul>
                  <li className="list-inline-item valign">
                      <div className="d-flex">
                          <h4 className="fs-20 text-color-2">₹3,450</h4>
                          <span className="fs-13 text-color-6">₹1,999 off (22%)</span>
                          <span className="mx-3">or</span>
                          <span className="fs-13">₹3,399 +<img src="images/coins.png" alt="" /> 51</span>
                      </div>
                      <h5 className="fs-10 text-color-7 mt-2">Hurry! Only <strong>24 Items</strong> Left in Stock</h5>
                  </li>
                  <li className="list-inline-item offset-lg-2 mt-3 mt-lg-0 text-center text-lg-start">
                      <a href="#" className="wishlist"><img className="me-2" src="images/wishlist-detail.png" alt="" /></a>
                      <a href="#" className="btn-border fs-20 me-2 d-none d-lg-inline-block">Request Semple</a>
                      <a href="#" className="btn-border fs-20 me-2 d-lg-none">Wishlist</a>
                      <a href="#" className="btn fs-20">Add to Cart</a>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default ProductBySlugScreen;
