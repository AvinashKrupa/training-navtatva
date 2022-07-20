import React from "react";
import Slider from "react-slick";
import { preferenceSliderSetting } from "../../../utils/sliderConfig";

const ShopByPreference = () => {
    return (
        <section className="mt-4 mt-md-5 preferrnece">
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading2">
                            <h2>Shop By Preference</h2>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                        <div className="Preference-slider">
                            <Slider {...preferenceSliderSetting}>
                                <div className="thumb position-relative text-center">
                                    <div className="bg5">
                                        <div className="text-start p-4">
                                            <p className="fs-20 font-r text-color-1">For</p>
                                            <h4 className="fs-36 font-Bsoul">The Playful</h4>
                                        </div>
                                        <img
                                            className="w-100"
                                            src="images/playful.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg6">
                                        <div className="text-start p-4">
                                            <p className="fs-20 font-r text-color-1">For</p>
                                            <h4 className="fs-36 font-Bsoul">The Elegant</h4>
                                        </div>
                                        <img
                                            className="w-100"
                                            src="images/elegant.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="thumb position-relative text-center">
                                    <div className="bg7">
                                        <div className="text-start p-4">
                                            <p className="fs-20 font-r text-color-1">For</p>
                                            <h4 className="fs-36 font-Bsoul">The Timeless</h4>
                                        </div>
                                        <img
                                            className="w-100"
                                            src="images/timeless.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopByPreference;