import React, { useState } from "react";
import { TwoThumbInputRange } from "react-two-thumb-input-range";

const CategoryFilter = (props: any) => {
  const [value, setValue] = useState([1000, 4333]);
  const onValueChange = (values: any) => {
    setValue(values);
  };
  return (
    <div className="col-lg-3 mb-5 mb-lg-0">
      <div className="leftside-bar">
        <h6 className="main-title d-flex justify-content-between">
          Filters{" "}
          <buttton type="button" className="btn-reset">
            <i className="fas fa-arrows-rotate fa-fw" /> Reset All
          </buttton>
        </h6>
        <div className="category-box">
          <h5 className="category-box-title">
            Category [{props.categorySlug}]
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
          <div className="category-area">
            <label className="radio-container">
              Men’s
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Woman’s
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Children’s
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
          </div>
        </div>
        <div className="category-box">
          <h5 className="category-box-title">
            Color{" "}
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
          <div className="category-area category-color">
            <label className="radio-container">
              Green
              <b className="Green-radio" />
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Mustard
              <b className="Mustard-radio" />
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Teal
              <b className="Teal-radio" />
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Beige
              <b className="Beige-radio" />
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container ">
              Black
              <b className="black-radio" />
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
          </div>
        </div>
        <div className="category-box">
          <h5 className="category-box-title">
            Price{" "}
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
          <div className="category-area">
            <div style={{ marginTop: "15%" }} className="mb-4">
              <TwoThumbInputRange
                onChange={onValueChange}
                values={value}
                min={1000}
                max={10000}
              />
            </div>
            <button type="button" className="btn btn-sm w-100">
              Set Price
            </button>
          </div>
        </div>
        <div className="category-box">
          <h5 className="category-box-title">
            Brand{" "}
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
          <div className="category-area brand-area">
            <label className="radio-container">
              Malhaar
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Prakriti
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Anubhutee
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Tori
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Biba
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              ADA
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
          </div>
        </div>
        <div className="category-box">
          <h5 className="category-box-title">
            Discount range{" "}
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
          <div className="category-area discount-area">
            <label className="radio-container">
              Upto 20% off
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Upto 30% off
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Upto 40% off
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Upto 50% off
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
          </div>
        </div>
        <div className="category-box">
          <h5 className="category-box-title">
            Material{" "}
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
          <div className="category-area material-area">
            <label className="radio-container">
              Cotton
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Nylon
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Silk
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Khaadi
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
          </div>
        </div>
        <div className="category-box">
          <h5 className="category-box-title">
            Occasion{" "}
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
          <div className="category-area Occasion-area">
            <label className="radio-container">
              Bridal
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Party Wear
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Office friendly
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
            <label className="radio-container">
              Daily wear
              <input type="radio" name="radio" />
              <span className="radio-checkmark" />
            </label>
          </div>
        </div>
        <div className="category-box">
          <h5 className="category-box-title d-flex justify-content-between">
            Print{" "}
            <button type="button" className="d-lg-none float-end categoty-btn">
              <i className="fas fa-angle-down fa-fw" />
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
