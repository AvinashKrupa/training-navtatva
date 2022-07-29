import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";

const mycollectionKurtis: NextPage = () => {

    return (
        <div className="mycollection">
            <div className="wrapper">
                {/* Header */}
                <Header />
                {/* End Header */}
            </div>

            <section className="productBar m-5 m-md-5">
                <ul className="breadcrumb">
                    <li className="fs-40 font-b text-color-2 list-inline-item"><a className="text-color-1" href="#">My Collections</a></li>
                    <li className="fs-40 font-b text-color-2 list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></li>
                    <li className="fs-40 font-b text-color-2 list-inline-item"><span className="text-color-3">Kurtis</span></li>
                </ul>

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
                                            <p className="fs-14 font-r text-color-1 py-2">
                                                Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>

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


        </div>
    );
};

export default mycollectionKurtis;
