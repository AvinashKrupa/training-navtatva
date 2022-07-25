import React from "react";

const Header = () => {
    return (
        <header className="main-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1 align-self-center">
                <a href="/">
                  <img
                    src="/images/logo-2.png"
                    alt="logo"
                    className="img-fluid desk-logo d-none d-md-block"
                  />
                </a>
              </div>
              <div className="col-md-11">
                <nav className="navbar navbar-expand-lg p-0">
                  <a className="navbar-brand d-md-none" href="#">
                    <img
                      src="/images/logo-2.png"
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
                        title=""
                      >
                        <img src="/images/refresh.png" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="wishlist rounded-circle d-block"
                        href="#"
                        title=""
                      >
                        <img src="/images/wishlist.png" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="cart rounded-circle d-block" href="/cart" title="">
                        <img src="/images/cart.png" alt="" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="user rounded-circle d-block" href="#" title="">
                        <img
                          width={32}
                          height={32}
                          src="/images/user.png"
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
    )
}

export default Header;