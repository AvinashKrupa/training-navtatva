import React, { useState } from "react";
import type { NextPage } from "next";
import ProductSmallBlock from "../../app/components/product/ProductSmallBlock";
import { products } from "../../app/constants/sampleData";
import GroupProductBlock from "../../app/components/product/GroupProductBlock";
import ProductQuickView from "../../app/components/product/ProductQuickView";
import Header from "../../app/components/common/Header";
import Footer from "../../app/components/common/Footer";
import CartPopup from "../../app/components/common/CartPopup";
import SearchPopup from "../../app/components/common/SearchPopup";
import CategoryFilter from "../../app/components/common/CategoryFilter";
import SearchBlock from "../../app/components/common/SearchBlock";
import SortingBlock from "../../app/components/common/SortingBlock";
import SortByBlock from "../../app/components/common/SortByBlock";
import Paging from "../../app/components/common/Paging";

const ProductListingScreen: NextPage = () => {

   const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

   return (
    <div>
      <div className="wrapper">
        {/* Header */}
        <Header/>
        {/* End Header */}
        {/* Category */}
        <section className="category-section">
          <div className="container-fluid">
            <div className="row">
              <CategoryFilter />
              <div className="col-lg-9 col-xl-10">
                <div className="rightside-bar">
                  <SearchBlock 
                    setOpenSearchBox = {setOpenSearchBox} 
                  />
                  <SortByBlock />
                  <div className="row">
                    {
                       products?.slice(0,2)?.map( (item: any, index: number) => {
                        return (
                          <ProductSmallBlock key={index} {...item} />
                        )
                      })
                    }  
                    <GroupProductBlock />
                    {
                       products?.slice(2,4)?.map( (item: any, index: number) => {
                        return (
                          <ProductSmallBlock key={index} {...item} />
                        )
                      })
                    } 
                  </div>
                </div>
                <SortingBlock />
                <div className="rightside-bar">
                  <ProductQuickView />
                  <div className="row">
                    {
                       products?.slice(4,5)?.map( (item: any, index: number) => {
                        return (
                          <ProductSmallBlock key={index} {...item} spinBlock={true}/>
                        )
                      })
                    } 
                    {
                       products?.slice(5,6)?.map( (item: any, index: number) => {
                        return (
                          <ProductSmallBlock key={index} {...item} exploreBlock={true}/>
                        )
                      })
                    }                   
                  </div>
                </div>
                <Paging />
              </div>
            </div>
          </div>
        </section>
        {/* End Category */}
        {/* Footer */}
        <Footer />
        {/* End Footer */}
      </div>
      {/* Cart Popup */}
      <CartPopup />
      {/* Search Popup */}
      <SearchPopup 
        openSearchBox = { openSearchBox } 
        setOpenSearchBox= {setOpenSearchBox} 
      />
    </div>
  );
};

export default ProductListingScreen;
