import React, { useState } from "react";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import CategoryBox from "./CategoryBox";
import { filters } from "../../constants/sampleData";

const CategoryFilter = (props: any) => {
  const [value, setValue] = useState([0, 100000]);
  const onValueChange = (values: any) => {
    setValue(values);
  };

  const { 
    categories,
    colors,
    brands,
    discount_ranges,
    materials,
    occasions,
    prints,
  } = filters;
  
  return (
    <div className="col-lg-3 col-xl-2 mb-5 mb-lg-0">
      <div className="leftside-bar">
        <h6 className="main-title d-flex justify-content-between">Filters <div className="btn-reset"><i className="fas fa-arrows-rotate fa-fw"></i> Reset All</div></h6>
        <CategoryBox 
          {...categories}
        />
        <CategoryBox 
          {...colors}
        />
        <div className="category-box">
          <h5 className="category-box-title">Price <button type="button" className="float-end categoty-btn"><i className="fas fa-angle-down fa-fw"></i></button></h5>
          <div className="category-area">
            <div className="slider-box mb-4">
                <input type="text" id="priceRange" readOnly={true}/>
                <div id="price-range" className="slider"></div>
            </div>
            <button type="button" className="btn btn-sm w-100">Set Price</button>
          </div>
        </div>
        <CategoryBox 
          {...brands}
        />
        <CategoryBox 
          {...discount_ranges}
        />
        <CategoryBox 
          {...materials}
        />
        <CategoryBox 
          {...occasions}
        />
        <CategoryBox 
          {...prints}
        />        
      </div>
    </div>
  );
};

export default CategoryFilter;
