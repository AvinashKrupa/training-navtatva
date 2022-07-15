import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import { filters } from "../../constants/sampleData";

const CategoryFilter = (props: any) => {
  
  const [priceRangeValue, setPriceRangeValue] = useState<any>([0, 100000]);
  const onPriceValueChange = (values: any) => {
    setPriceRangeValue(values);
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
          priceRangeValue = { priceRangeValue }
          onPriceValueChange = { onPriceValueChange }
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
