import React, { useState } from "react";
import CategoryBox from "./CategoryBox";
import { filters } from "../../constants/sampleData";

const CategoryFilter = (props: any) => {

  const [priceRangeValue, setPriceRangeValue] = useState<any>([0, 100000]);
  const onPriceValueChange = (values: any) => {
    setPriceRangeValue(values);
  };

  const [reset, setReset] = useState(false);
  const handlereset = () => {
    setReset(true)
    Object.entries(filters)?.map((item: any) => {
      item[1]?.data?.map((a: any) => {
        a.isSelected = false
      })
    })

  }

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
        <h6 className="main-title d-flex justify-content-between">Filters <div className="btn-reset" onClick={handlereset}><i className="fas fa-arrows-rotate fa-fw"></i> Reset All</div> </h6>
        <CategoryBox
          {...categories}
          reset={reset}
          setReset={setReset}

        />
        <CategoryBox
          {...colors}
          reset={reset}
          setReset={setReset}
        />
        <CategoryBox
          priceRangeValue={priceRangeValue}
          onPriceValueChange={onPriceValueChange}
          {...prices}
          reset={reset}
          setReset={setReset}
        />
        <CategoryBox
          {...brands}
          reset={reset}
          setReset={setReset}

        />
        <CategoryBox
          {...discount_ranges}
          reset={reset}
          setReset={setReset}

        />
        <CategoryBox
          {...materials}
          reset={reset}
          setReset={setReset}
        />
        <CategoryBox
          {...occasions}
          reset={reset}
          setReset={setReset}

        />
        <CategoryBox
          {...prints}
          reset={reset}
          setReset={setReset}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
