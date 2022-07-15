import React0 from "react";
import ExploreBlock from "../common/ExploreBlock";
import SpinBlock from "../common/SpinBlock";

const ProductSmallBlock = (props: any) => {
    return (
        <div className="col-xl-6">
            {
                props.exploreBlock && (
                    <ExploreBlock />
                )
            }
            <div className={"product-block bg-"+props.bg_type}>
                {
                    props.spinBlock && (
                        <SpinBlock />
                    )
                }
                <div className="row g-0">
                    <div className="col-sm-7">
                        <div className="product-image position-relative">
                            <img
                                src={props.image}
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
                            <h6>{props.model_name}</h6>
                            <p>{props.name}</p>
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
                                    onClick={ () => props.setOpenProductQuickView(true)}
                                >
                                    Quick View
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-sm w-100 cart-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                        props.setOpenCartPopup(true)
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
    )
}

export default ProductSmallBlock;