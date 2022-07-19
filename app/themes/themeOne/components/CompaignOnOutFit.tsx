import React from "react";
import Slider from "react-slick";
import { kurtiSettings } from "../../../utils/sliderConfig";

const CompaignOnOutFit = () => {
    return (
        <section className="mt-4 mt-md-5 pb-5">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="heading1">
                <h2>Select your companion to try on your Outfit</h2>
              </div>
            </div>
            <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
              <div className="kurtis-slider">
                <Slider {...kurtiSettings}>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
                    </div>
                  </div>
                  <div className="thumb position-relative text-center">
                    <img className="w-100" src="images/outfits-1.png" alt="" />
                    <div className="overlay text-start">
                      <p className="fs-22 font-r">
                        Height<span className="font-sb ms-3">5’6”</span>
                      </p>
                      <p className="fs-22 font-r">
                        Weight<span className="font-sb ms-3">44 kgs</span>
                      </p>
                      <p className="fs-22 font-r">
                        Size<span className="font-sb ms-3">M</span>
                      </p>
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

export default CompaignOnOutFit;