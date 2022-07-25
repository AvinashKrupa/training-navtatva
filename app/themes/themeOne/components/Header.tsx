import React, { useState } from "react";
import SearchPopup from "../../../components/common/SearchPopup";

const Header = () => {

  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

  return (
    <>
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
                <a className="cart rounded-circle d-block" href="/cart" title={""}>
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
      {/* Search Popup */}
      <SearchPopup
        openSearchBox={openSearchBox}
        setOpenSearchBox={setOpenSearchBox}
      />
    </>
  )
}

export default Header;