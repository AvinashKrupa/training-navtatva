import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
interface IProps {
  brand: Array<any>;
  loading: boolean
}

const MoreBrandsToExplore = (props: IProps) => {
  const [brands, setBrands] = useState([1, 2, 3, 4, 5, 6])

  return (
    <section className="mt-4 mt-md-5 brand">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="heading2">
              <h2>More Brands To Explore</h2>
            </div>
          </div>
          <div className="col-md-12 mt-4 mt-lg-5">
            <ul className="d-block text-center">
              {/* {props.brand.map((info) => {
                return (
                  <li
                    style={{ backgroundColor: "white" }}
                    className="align-items-center justify-content-center d-inline-flex"
                  >
                    <a href="/shop">
                      <img
                        style={{ maxWidth: 180, maxHeight: 180 }}
                        src={info.image || "images/brand-1.png"}
                        alt="brand"
                      />
                    </a>
                  </li>
                );
              })} */}

              {!props.loading && brands.map((info) => {
                return (
                  <li
                    style={{ backgroundColor: "white" }}
                    className="align-items-center justify-content-center d-inline-flex"
                  >
                    {/* <a href="/shop">
                      <img
                        style={{ maxWidth: 180, maxHeight: 180 }}
                        src={info.image || "images/brand-1.png"}
                        alt="brand"
                      />
                    </a> */}
                     <Skeleton    style={{ maxWidth: 180, maxHeight: 180 }} />
                  </li>
                );
              })}

              {/* <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-2.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-3.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-4.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-5.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-6.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-7.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-8.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-9.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-10.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-11.png" alt="brand" />
                </a>
              </li>
              <li className="align-items-center justify-content-center d-inline-flex">
                <a href="#">
                  <img src="images/brand-12.png" alt="brand" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreBrandsToExplore;

const params = {
  id: "bridal",
};
