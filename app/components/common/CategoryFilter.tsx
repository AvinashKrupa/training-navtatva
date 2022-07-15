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
    prices,
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
        <CategoryBox 
          {...prices}
        />
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
