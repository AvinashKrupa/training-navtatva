import React from "react";

const ProductQuickView = () => {
    return (
        <div className="detail-slider">
            <div className="product-block bg-1">
                <div className="row">
                    <div className="col-md-12 col-xl-8">
                        <div className="product-imgs">
                            <div className="img-select">
                                <div className="img-item">
                                <a href="#" data-id="1">
                                <img className="" src="images/detail-thumb1.png" alt="Detail image"/>
                                </a>
                                </div>
                                <div className="img-item">
                                <a href="#" data-id="2">
                                <img className="" src="images/detail-thumb2.png" alt="Detail image"/>
                                </a>
                                </div>
                                <div className="img-item">
                                <a href="#" data-id="3">
                                <img className="" src="images/detail-thumb3.png" alt="Detail image"/>
                                </a>
                                </div>
                                <div className="img-item">
                                <a href="#" data-id="4">
                                <img className="" src="images/detail-thumb4.png" alt="Detail image"/>
                                </a>
                                </div>
                            </div>
                            <div className="img-display">
                                <div className="img-showcase">
                                <img src="images/detail-pick-1.png" alt="Detail image"/>
                                <img src="images/detail-pick-1.png" alt="Detail image"/>
                                <img src="images/detail-pick-1.png" alt="Detail image"/>
                                <img src="images/detail-pick-1.png" alt="Detail image"/>
                                </div>
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
                    <div className="col-md-12 col-xl-4 mt-0 mt-md-5 mt-lg-0">
                        <div className="product-content">
                            <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
                            <p className="fs-14 font-r text-color-1 mt-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                            <p className="fs-12 font-r text-color-1 mt-5 mb-3">size available</p>
                            <ul className="size d-flex">
                                <li>34</li>
                                <li>36</li>
                                <li className="available">38</li>
                                <li className="select">40</li>
                                <li className="available">42</li>
                                
                                <li className="custom-size">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rulers me-2" viewBox="0 0 16 16">
                                    <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                                </svg>
                                
                                </li>
                                <li className="sizechart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill me-2" viewBox="0 0 16 16">
                                    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                                </svg>
                                Size Chart
                                </li>
                            </ul>
                            <div className="custom-radios">
                                <p className="fs-12 font-r text-color-1 mt-4 mb-3">Color</p>
                                <div>
                                <input type="radio" id="color-1" name="color" value="color-1" defaultChecked={true}/>
                                <label htmlFor="color-1">
                                    <span>
                                        <div></div>
                                    </span>
                                </label>
                                </div>
                                <div>
                                <input type="radio" id="color-2" name="color" value="color-2"/>
                                <label htmlFor="color-2">
                                    <span>
                                        <div></div>
                                    </span>
                                </label>
                                </div>
                                <div>
                                <input type="radio" id="color-3" name="color" value="color-3"/>
                                <label htmlFor="color-3">
                                    <span>
                                        <div></div>
                                    </span>
                                </label>
                                </div>
                                <div>
                                <input type="radio" id="color-4" name="color" value="color-4"/>
                                <label htmlFor="color-4">
                                    <span>
                                        <div></div>
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
                                    </div>
                                </div>
                            </div>
                            <div className="hurryUp">
                                Hurry! Only <strong>24 Items</strong> Left in Stock
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                <div className="product-rating mt-0  text-center">
                                    <span>4.7(21)</span>                                       
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <p className="fs-12 text-color-1">345 reviews</p>
                                </div>
                                </div>
                                <div className="col-sm-6  text-center">
                                <div className="product-price">
                                    <p className="last-price mb-0 fs-12 font-r"><span className="text-color-1">₹ 6,450</span></p>
                                    <p className="new-price mb-0 font-sb"><span>₹3,450</span></p>
                                    <p className="save fs-10 font-r">You save ₹3,000 </p>
                                </div>
                                </div>
                            </div>
                            <div className="resquest">
                                <a href="#" className="font-m" title="">Request Sample</a>
                            </div>
                            <div className="purchase-info d-flex">
                                <button type="button" className="btn w-50">More Info</button>
                                <button type="button" className="btn w-50">
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

export default ProductQuickView;