import React, { useState } from "react";

const Header=()=>{

    const [showProfile,setShowProfile]=useState(false);

    console.log("this is showprofile",showProfile)

    return(    <header className="main-header">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-1 col-3 align-self-center">
                <a href="#" className="d-lg-none"><img src="images/logo-2.png" alt="logo" className="img-fluid desk-logo" /></a>
            </div>
            <div className="col-lg-11 col-9 ">
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="header-search input-group ms-auto d-none d-md-block" data-bs-toggle="modal" data-bs-target="#searchPopup">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                <path fillRule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z" />
                            </svg>
                        </span>
                        <input type="text" className="form-control fs-16" defaultValue="Search" aria-label="Kurtis" aria-describedby="addon-wrapping" />
                        <button type="button" className="closebtn d-md-none"><i className="fas fa-xmark fa-fw" /></button>
                    </div>
                    <ul className="iconBar text-center">
                        <li className="list-inline-item">
                            <a className="reverse rounded-circle d-block" href="#"><img src="images/refresh.png" alt="" /></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="wishlist rounded-circle d-block" href="#" ><img src="images/wishlist.png" alt="" /></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="cart rounded-circle d-block" href="/cart"><img src="images/cart.png" alt="" /></a>
                        </li>
                        <li className="list-inline-item" onClick={()=>{
                            setShowProfile(!showProfile)
                        }}>
                            <div className="btn-group">
                                <a className="user rounded-circle d-block"  role="button" data-bs-toggle="dropdown" aria-expanded="false"
                               ><img width={32} height={32} src="images/user.png" alt=""  /></a>
                                <ul className={"dropdown-menu shadow "+(showProfile?"show":"")} data-bs-popper="none">
                                    <p className="fs-20 font-sb text-color-3 ps-3 ">Hey Darshil</p>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="fs-14 font-r text-color-2"><img className="d-inline-block" src="images/p-profile.png" alt="" /><a className="dropdown-item d-inline-block" href="myprofile">Profile</a></li>
                                    <li className="fs-14 font-r text-color-2 "><img className="d-inline-block" src="images/seller.png" alt="" /><a className="dropdown-item d-inline-block" href="#">Your Seller Account</a></li>
                                    <li className="fs-14 font-r text-color-2 "><img className="d-inline-block" src="images/order.png" alt="" /><a className="dropdown-item d-inline-block" href="orderhistory">Orders &amp; Returns</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="fs-14 font-r text-color-2"><img className="d-inline-block" src="images/payment.png" alt="" /><a className="dropdown-item d-inline-block" href="#">Saved Payment Methods</a></li>
                                    <li className="fs-14 font-r text-color-2 "><img className="d-inline-block" src="images/map.png" alt="" /><a className="dropdown-item d-inline-block" href="saveaddress">Saved Addresses</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="fs-14 font-r text-color-2"><img className="d-inline-block" src="images/logout.png" alt="" /><a className="dropdown-item d-inline-block" href="#">Sign Out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>)
}

export default Header;