import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../app/components/common/Header";

const ProductBySlugScreen: NextPage = () => {

  const router = useRouter();
  const { productSlug } = router.query;
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);

   return (
    <div>
      <div className="wrapper">
        {/* Header */}
        <Header/>
        {/* End Header */}
        {/* Product */}
        <h1>Product Slug: {productSlug}</h1>
        {/* End Product */}
       </div>
    </div>
  );
};

export default ProductBySlugScreen;
