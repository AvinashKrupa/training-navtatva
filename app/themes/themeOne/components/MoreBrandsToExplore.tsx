import React from "react";
interface IProps {
  brand: Array<any>;
}

const MoreBrandsToExplore = (props: IProps) => {
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
              {props.brand.map((info) => {
                return (
                  <li className="align-items-center justify-content-center d-inline-flex">
                    <div className="row">
                      <a href="#">
                        <img src="images/brand-1.png" alt="brand" />
                      </a>
                      <p>{info.name}</p>
                    </div>
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
