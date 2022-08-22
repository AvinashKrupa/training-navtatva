import React, { useEffect, useState } from "react";
import { CatalogService } from "../../../../network/gateway/Catalog";
import Slider from "react-slick";
import { bannerSliderSettings } from "../../../../utils/sliderConfig";

const FestiveSaleBanner = () => {
    const [aa, setAA] = useState()
    const [banners, setBanners] = useState([1, 2, 3, 4, 5, 6])
    const [bannerUrl, setBannerUrl] = useState<any>()

    useEffect(() => {
        getBannersData();

    }, []);

    function getBannersData() {
        CatalogService.getInstance()
            .getBanner()
            .then((info: any) => {
                setBannerUrl(info?.data?.data[0].attributes.image.data.attributes.url);
                console.log("this is Banner",info)
            });
    }

    return (
        <section className="category banner mt-5 mt-md-5">
            <Slider {...bannerSliderSettings}>
                {banners?.map((items, index: number) => {
                    return (
                        <div>
                            <div className="col-md-12 col-lg-12">
                                <img className="w-100" src={`http://3.109.249.174:1880${bannerUrl}`} alt="" />
                            </div>
                        </div>)
                })}

            </Slider>
        </section>
        //     <section className="banner mt-4 mt-md-5">
        //     <div className="row">
        //         <div className="col-md-12 col-lg-6 order-2 order-lg-0 p-5 text-center text-lg-start align-self-center">
        //             <p className="fs-24 text-uppercase mb-4 mb-xl-5">
        //                 NavTatva Festive Sale
        //             </p>
        //             <span className="fs-64">Upto 40% Flat Off </span>
        //             <br />
        //             <small className="fs-24 mt-3 d-block">
        //                 On the Biggest Brands
        //             </small>
        //             <h5 className="fs-48 mt-3">14th - 18th July</h5>
        //             <a href="/shop" className="fs-29 mt-5 d-inline-block">
        //                 SALE IS LIVE NOW
        //             </a>
        //         </div>
        //         <div className="col-md-12 col-lg-6">
        //             <img className="w-100" src="images/banner.png" alt="" />
        //         </div>
        //     </div>
        // </section>
    )
}

export default FestiveSaleBanner;