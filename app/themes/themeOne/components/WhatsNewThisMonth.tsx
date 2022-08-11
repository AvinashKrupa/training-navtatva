import React from "react";
import Slider from "react-slick";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";

const WhatsNewThisMonth = () => {
  return (
    <section className="month-trend mt-4 mt-md-5 ">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="heading2">
              <h2>What’s New This Month</h2>
            </div>
          </div>
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
            <div className="Preference-slider">
              <Slider {...preferenceSliderSetting}>
                <div className="thumb position-relative text-center">
                  <div className="bg1">
                    <img
                      className="w-100"
                      src="images/month-bg1-1.jpg"
                      alt=""
                    />
                    <div className="overlay text-start p-3">
                      <p className="fs-12 font-r text-color-1">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                    </div>
                  </div>
                </div>
                <div className="thumb position-relative text-center">
                  <div className="bg2">
                    <img
                      className="w-100"
                      src="images/month-bg2-2.jpg"
                      alt=""
                    />
                    <div className="overlay text-start p-3">
                      <p className="fs-12 font-r text-color-1">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                    </div>
                  </div>
                </div>
                <div className="thumb position-relative text-center">
                  <div className="bg3">
                    <img
                      className="w-100"
                      src="images/month-bg3-3.jpg"
                      alt=""
                    />
                    <div className="overlay text-start p-3">
                      <p className="fs-12 font-r text-color-1">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                    </div>
                  </div>
                </div>
                <div className="thumb position-relative text-center">
                  <div className="bg4">
                    <img
                      className="w-100"
                      src="images/month-bg4-4.jpg"
                      alt=""
                    />
                    <div className="overlay text-start p-3">
                      <p className="fs-12 font-r text-color-1">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewThisMonth;
