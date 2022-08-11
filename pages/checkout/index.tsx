import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";

import { useRouter } from "next/router";
import { Cart } from "../../app/network/gateway/Cart";
import LocalStorageService from "../../app/utils/storage/LocalStorageService";


const CheckoutScreen: NextPage = () => {
  const [openTab, setOpenTab] = useState<number>(1);
  const router = useRouter();
  // const { slug, id } = router.query;
  // console.log("this is checkout id",id,slug)

  const [firstName, setfirstName] = useState<string>('')
  const [lastName, setlastName] = useState<string>('')
  const [address_1, setAddress_1] = useState<string>('')
  const [address_2, setAddress_2] = useState<string>('')
  const [city, setCity] = useState<string>('')

  const [postcode, setPostcode] = useState('')
  //const [customerId, setCustomerId] = useState('')

  // if(LocalStorageService.getCutomerId()){

  //   let a=LocalStorageService.getCutomerId()
  //   setCustomerId(customerId)

  // }

  let customerId=LocalStorageService.getCutomerId()
  // }

  // if (typeof window !== 'undefined') {
  //   // Perform localStorage action
  // customerId = LocalStorageService.getCutomerId()
  // }



  const onChangeFirstName = (event: any) => {
    setfirstName(event.target.value)
  }
  const onChangeLastName = (event: any) => {
    setlastName(event.target.value)
  }

  const onChangeCity = (event: any) => {
    setCity(event.target.value)
  }
  const onChangeAddress_1 = (event: any) => {
    setAddress_1(event.target.value)
  }
  const onChangeAddress_2 = (event: any) => {
    setAddress_2(event.target.value)

  }
  const onChangePostcode = (event: any) => {
    setPostcode(event.target.value)

  }


  function checkout() {
    const param = {
      "data": {
        "customer": {
          id: customerId
        },
        "billing_address": {
          "first_name": firstName,
          "last_name": lastName,
          "line_1": address_1,
          "line_2": address_2,
          "company_name": "",
          "city": city,
          "county": "Sunnyville",
          "postcode": postcode,
          "country": "INIDA"
        },
        "shipping_address": {
          "first_name": firstName,
          "last_name": lastName,
          "company_name": "",
          "line_1": address_1,
          "line_2": address_2,
          "city": city,
          "county": "Sunnyville",
          "postcode": postcode,
          "country": "INIDA"
        }
      }
    }

    Cart.getInstance()
      .checkout(param)
      .then((data:any) => {
        console.log("checkout info", data);
        if(data.status){
          router.push("/thankyou");

        }
      })
      .catch((error) => {
        console.log("error", error);
      });


  }




  return (
    <div className="shoppingCart checkoutPage">
      <div className="wrapper">
        {/* Header */}
        <Header />

        {/* End Header */}
        <section className="cartItem  mt-4 mt-md-5">
          <h1 className="fs-40 font-b text-color-2 list-inline-item">
            Checkout
          </h1>
          <div className="row">
            <div className="col-md-12 col-lg-8 mt-4">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item bgbar ms-0">
                  <h2
                    className="accordion-header"
                    id="headingOne"
                    onClick={() => setOpenTab(openTab == 1 ? 0 : 1)}
                  >
                    <button
                      className="accordion-button font-sb"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="wordtype">A</span> Log In
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={
                      "accordion-collapse collapse " +
                      (openTab == 1 ? "show" : "")
                    }
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-md-12 mt-4">
                          <div className="mb-3 promocode ">
                            <label className="col-form-label fs-14 font-sb text-color-1">
                              Mobile Number
                            </label>
                            <div className="col-sm-8 position-relative">
                              <input type="text" className="form-control" />
                              <a
                                href="#"
                                className=" fs-16 btn font-sb text-color-3 text-end otp"
                              >
                                Send OTP
                              </a>
                            </div>
                            <p className="d-block font-sb text-color-1 mt-4">
                              Don’t Have an account yet?
                              <a
                                href="#"
                                className="text-color-3 position-relative signup"
                              >
                                Sign Up
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="seprtor">
                        <span>or</span>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mt-2">
                          <h4 className="fs-20 font-sb text-color-2 mb-4">
                            Guest Login
                          </h4>
                          <div className="mb-3 promocode ">
                            <label className="col-form-label fs-14 font-sb text-color-1">
                              Mobile Number
                            </label>
                            <div className="col-sm-8 position-relative">
                              <input type="text" className="form-control" />{" "}
                            </div>
                            <p className="d-block font-sb mt-4 guest">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-info-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />{" "}
                              </svg>
                              Offers not Valid on Guest Login
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bgbar ms-0">
                  <h2
                    className="accordion-header"
                    id="headingTwo"
                    onClick={() => setOpenTab(openTab == 2 ? 0 : 2)}
                  >
                    <button
                      className="accordion-button font-sb collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="wordtype">B</span> SHIPPING ADDRESS{" "}
                    </button>
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
                              placeholder=""
                              defaultValue={""}
                              required
                              value={firstName}
                              onChange={onChangeFirstName}
                            />
                            <div className="invalid-feedback">
                              {" "}
                              Valid first name is required.{" "}
                            </div>
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
                              onChange={onChangeLastName}
                              value={lastName}
                            />{" "}
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

                              onChange={onChangeAddress_1}

                            />{" "}
                          </div>
                          <div className="col-12  mb-4">
                            <label htmlFor="address2" className="form-label">
                              Apartment, Street, Landmark{" "}
                              <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address2"
                              placeholder="80 Feet Road, Behind Hindu Temple"
                              onChange={onChangeAddress_2}
                            />{" "}
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
                              onChange={onChangeCity}
                              value={city}
                            />{" "}
                          </div>
                          <div className="col-md-3 ">
                            <label htmlFor="zip" className="form-label">
                              Postal Code
                            </label>
                            <input
                              type="text"
                              className="form-control postel"
                              id="Postal Code"
                              placeholder=""
                              required
                              value={postcode}
                              onChange={onChangePostcode}
                            />{" "}
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="zip" className="form-label">
                            Address Type{" "}
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
                          <button className="btn  btn-lg fs-16" onClick={checkout}>
                            Save &amp; Deliver Here
                          </button>{" "}
                          <a
                            href="#"
                            className="text-color-3 fs-16 font-sb ms-4"
                            type="submit"
                          >
                            Cancel
                          </a>{" "}
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
                              required
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
                <div className="accordion-item bgbar ms-0">
                  <h2
                    className="accordion-header"
                    id="headingThree"
                    onClick={() => setOpenTab(openTab == 3 ? 0 : 3)}
                  >
                    <button
                      className="accordion-button font-sb collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="wordtype">C</span> PAYMENT METHOD{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className={
                      "accordion-collapse collapse " +
                      (openTab == 3 ? "show" : "")
                    }
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="my-3">
                        <div>
                          <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            defaultChecked
                            required
                          />
                          <label
                            className="form-check-label fs-16 font-sb"
                            htmlFor="credit"
                          >
                            Credit card
                          </label>
                        </div>
                        <label className="form-label mt-4">Saved Cards</label>
                        <ul>
                          <li className="list-inline-item">
                            {" "}
                            <a href="#">
                              <img
                                src="images/credit-1.png"
                                alt="logo"
                                className="img-fluid desk-logo"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            {" "}
                            <a href="#">
                              <img
                                src="images/credit-2.png"
                                alt="logo"
                                className="img-fluid desk-logo"
                              />
                            </a>
                          </li>
                        </ul>
                        <hr />
                        <div className="col-8">
                          <label className="form-label">Card Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="5665 2344 1223 9801"
                            required
                          />
                        </div>
                        <ul>
                          <li className="list-inline-item">
                            <div className="mt-4">
                              <label className="form-label">Valid Date</label>
                              <div className="quantity d-flex px-2">
                                <select
                                  className="form-select fs-14 font-r text-color-2"
                                  aria-label="Default select example"
                                >
                                  <option value={1} selected>
                                    01
                                  </option>
                                  <option value={2}>02</option>
                                  <option value={3}>03</option>
                                </select>
                                <select
                                  className="form-select fs-14 font-r text-color-2"
                                  aria-label="Default select example"
                                >
                                  <option value={1} selected>
                                    28
                                  </option>
                                  <option value={2}>29</option>
                                  <option value={3}>30</option>
                                </select>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className=" mt-4 ms-0 ms-md-4">
                              <label htmlFor="zip" className="form-label">
                                CVV
                              </label>
                              <input
                                type="text"
                                className="form-control cvv"
                                placeholder=""
                                required
                              />
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <button
                              onClick={() => {
                                router.push("/thankyou");
                              }}
                              className="btn btn-lg fs-16"
                              type="submit"
                            >
                              Pay ₹16,994{" "}
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 d-block d-md-flex">
                        <div>
                          <input
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            required
                          />
                          <label
                            className="form-check-label fs-16 font-sb ml-4"
                            htmlFor="debit"
                          >
                            UPI
                          </label>
                        </div>
                        <div className="upi-amount">
                          <p className="d-block font-sb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-info-circle me-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />{" "}
                            </svg>
                            Offers not Valid on Guest Login
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <ul>
                          <li className="list-inline-item col-md-8">
                            <label className="form-label">Enter UPI ID</label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="5665 2344 1223 9801"
                              required
                            />
                          </li>
                          <li className="list-inline-item">
                            {" "}
                            <button
                              className="btn btn-lg fs-16 mt-3 mt-md-0"
                              type="submit"
                            >
                              Pay ₹16,994{" "}
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 d-block d-md-flex">
                        <div>
                          <input
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            required
                          />
                          <label
                            className="form-check-label fs-16 font-sb"
                            htmlFor="debit"
                          >
                            Cash On Delivery{" "}
                          </label>
                        </div>
                        <div className="upi-amount bgred">
                          <p className="d-block font-sb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-info-circle me-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />{" "}
                            </svg>
                            Extra ₹129 Convinience Fee{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="w-100 mt-4">
                <a href="#">
                  {" "}
                  <img className="w-100" src="images/discountAd.png" alt="" />
                </a>{" "}
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
                </a>{" "}
              </div>
              <div className="col-md-12">
                <div className="bgbar position-relative mt-4 ms-0 ">
                  <div className="row">
                    <div className="col-md-3 col-lg-4">
                      <div className="imgbar ">
                        <img className="w-100" src="images/img1.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-9 col-lg-8 position-relative">
                      <h3 className="fs-16 font-sb text-color-2">Anubhutee</h3>
                      <p className="fs-14 font-r text-color-1 pt-1 prodes">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                      <div className="d-flex py-3 align-items-center">
                        <p className="fs-14 font-sb text-color-1">
                          Size: <span className="text-color-2">XL</span>
                        </p>
                        <p className="fs-14 font-sb text-color-1 ms-4">
                          Colour: <span className="text-color-2">Blue</span>
                        </p>
                        <div className="d-flex topBarAlign position-static ms-2">
                          <div className="quantity d-flex px-2 ">
                            <label className="fs-14 font-r text-color-1 pt-1">
                              Qty
                            </label>
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
                      </div>
                      <div className="d-flex pb-3 align-items-center">
                        <p className="fs-14 font-sb text-color-1">
                          Size: <span className="text-color-2">XL</span>
                        </p>
                        <p className="fs-14 font-sb text-color-1 ms-4">
                          Colour: <span className="text-color-2">Blue</span>
                        </p>
                        <div className="d-flex topBarAlign position-static ms-2">
                          <div className="quantity d-flex px-2 ">
                            <label className="fs-14 font-r text-color-1 pt-1">
                              Qty
                            </label>
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
                      </div>
                      <div className="d-flex pb-3 align-items-center">
                        <p className="fs-14 font-sb text-color-1">
                          Size: <span className="text-color-2">XL</span>
                        </p>
                        <p className="fs-14 font-sb text-color-1 ms-4">
                          Colour: <span className="text-color-2">Blue</span>
                        </p>
                        <div className="d-flex topBarAlign position-static ms-2">
                          <div className="quantity d-flex px-2 ">
                            <label className="fs-14 font-r text-color-1 pt-1">
                              Qty
                            </label>
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
                      </div>
                      <div className="d-flex pb-3">
                        <p className="fs-14 font-sb text-color-1">
                          Total: <span className="text-color-2">₹3,499</span>
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
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-3 col-lg-4">
                      <div className="imgbar ">
                        <img className="w-100" src="images/img1.png" alt="" />
                      </div>
                    </div>
                    <div className="col-md-9 col-lg-8 position-relative">
                      <h3 className="fs-16 font-sb text-color-2">Anubhutee</h3>
                      <p className="fs-14 font-r text-color-1 pt-1 prodes">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                      <div className="d-flex py-3 align-items-center">
                        <p className="fs-14 font-sb text-color-1">
                          Size: <span className="text-color-2">XL</span>
                        </p>
                        <p className="fs-14 font-sb text-color-1 ms-4">
                          Colour: <span className="text-color-2">Blue</span>
                        </p>
                        <div className="d-flex topBarAlign position-static ms-2">
                          <div className="quantity d-flex px-2 ">
                            <label className="fs-14 font-r text-color-1 pt-1">
                              Qty
                            </label>
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
                      </div>
                      <div className="d-flex pb-3 align-items-center">
                        <p className="fs-14 font-sb text-color-1">
                          Size: <span className="text-color-2">XL</span>
                        </p>
                        <p className="fs-14 font-sb text-color-1 ms-4">
                          Colour: <span className="text-color-2">Blue</span>
                        </p>
                        <div className="d-flex topBarAlign position-static ms-2">
                          <div className="quantity d-flex px-2 ">
                            <label className="fs-14 font-r text-color-1 pt-1">
                              Qty
                            </label>
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
                      </div>
                      <div className="d-flex pb-3 align-items-center">
                        <p className="fs-14 font-sb text-color-1">
                          Size: <span className="text-color-2">XL</span>
                        </p>
                        <p className="fs-14 font-sb text-color-1 ms-4">
                          Colour: <span className="text-color-2">Blue</span>
                        </p>
                        <div className="d-flex topBarAlign position-static ms-2">
                          <div className="quantity d-flex px-2 ">
                            <label className="fs-14 font-r text-color-1 pt-1">
                              Qty
                            </label>
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
                      </div>
                      <div className="d-flex pb-3">
                        <p className="fs-14 font-sb text-color-1">
                          Total: <span className="text-color-2">₹3,499</span>
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
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <li className="fs-14 font-r text-color-1 d-flex mb-3">
                      Delivery Charges (express)
                      <small className="text-color-2 text-end ms-auto">
                        + 100{" "}
                      </small>
                    </li>
                    <li className="fs-14 font-r text-color-1 d-flex  mb-3">
                      CGST + SGST (14%)
                      <small className="text-color-2 text-end ms-auto">
                        + ₹1255
                      </small>
                    </li>
                    <li className="fs-14 font-r text-color-1 d-flex  mb-3">
                      Discount
                      <small className="text-end ms-auto  green">₹299 </small>
                    </li>
                  </ul>
                  <hr />
                  <ul>
                    <li className="fs-19 font-sb text-color-2 d-flex mb-3">
                      Grand Total
                      <small className="text-color-2  text-end ms-auto">
                        ₹16,994{" "}
                      </small>
                    </li>
                  </ul>
                </div>
                <div className="mb-3 promocode ">
                  <label className="col-form-label fs-14 font-sb text-color-1">
                    Have a Promo Code?
                  </label>
                  <div className="col-sm-12 position-relative">
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="NAVTATVA2022"
                    />
                    <a
                      href="#"
                      className=" fs-16 font-sb text-color-3 text-end apply"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutScreen;
