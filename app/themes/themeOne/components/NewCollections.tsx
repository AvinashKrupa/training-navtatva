import React from "react";
import Slider from "react-slick";
import Permalink from "../../../../utils/Permalink";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";
import SectionHeader from "./SectionHeader";
import { useRouter } from "next/router";

interface iProps {
  data: any;
}
const NewCollections = (props: iProps) => {
  const router = useRouter();
  return (
    <section className="mt-4 mt-md-5 mostSearch">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"New Collections"} />
          <div className="col-md-12 sliderView">
            <div className="Preference-slider mt-4 mt-lg-5">
              <Slider {...preferenceSliderSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div key={index} className="collection mx-3 position-relative">
                      <a onClick={() => router.replace(Permalink.ofShop())}>
                        <img className="w-100" src={info.image} alt="" style={{ height: 448 }} />
                        <div className="overlay text-start">
                          <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100 w-50 mx-auto text-center">
                            {info.title}
                          </p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
