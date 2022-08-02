import React0 from "react";
import ExploreBlock from "../common/ExploreBlock";
import SpinBlock from "../common/SpinBlock";

const ProductSmallBlock = (props: any) => {
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="col-xl-6">
      {props.exploreBlock && <ExploreBlock />}
      <div
        className={"product-block bg-" + randomIntFromInterval(1, 6)}
        // style={{ background: "antiquewhite" }}
      >
        {props.spinBlock && <SpinBlock />}
        <div className="row g-0">
          <div className="col-sm-7">
            <div className="product-image position-relative">
              <img src={props.main_image} className="img-fluid" />
              <button type="button" className="btn-voice">
                <i className="fas fa-volume-high fa-fw" />
              </button>
              <button type="button" className="btn-heart">
                <i className="far fa-heart fa-fw" />
              </button>
              <span className="img-name">Cotton + Khaadi</span>
            </div>
            {/* <div className="discountBar text-white">
              <h4 className="fs-16 font-sb">20% Discount</h4>
              <p className="fs-13 font-r">22 : 38 : 18</p>
            </div> */}
          </div>
          <div className="col-sm-5">
            <div className="product-content-area">
              <h6>{props.name}</h6>
              <p
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {props.description}
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
                  {props?.originalPrice?.currencies.INR.amount}
                </span>
                <span className="total-price">
                  <i className="fas fa-indian-rupee-sign fa-fw" />
                  {props?.discountPrice?.currencies.INR.amount}
                </span>
                <span className="less-save">
                  You save <i className="fas fa-indian-rupee-sign fa-fw" />{" "}
                  {props?.originalPrice?.currencies.INR.amount -
                    (props?.discountPrice?.currencies.INR.amount || 0)}
                </span>
              </div>
              <div className="product-btn text-center">
                <a
                  href="#"
                  className="btn-outline btn-sm w-100 mb-2"
                  onClick={() => props.onClickQuickView(props.id)}
                >
                  Quick View
                </a>
                <button
                  type="button"
                  className="btn btn-sm w-100 cart-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    props.addToCart(props.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSmallBlock;
