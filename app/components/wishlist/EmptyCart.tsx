import React from "react";
import { useRouter } from "next/router";
import Permalink from "../../../utils/Permalink";
const EmptyCart = (props: any) => {
    const route = useRouter();
  return (
    <>
      <div className="mt-5">
        <div className="text-center mt-5">
          <h1 className="fs-30 font-b text-color-2 list-inline-item">
          Wishlist is Empty!!
          </h1>
          <p className="fs-15 mt-2 text-color-2">Add items to it now.</p>
          <div>
            <a className="btn mt-3" onClick={() => route.replace(Permalink.ofShop())}>
            click to Create Now

            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
