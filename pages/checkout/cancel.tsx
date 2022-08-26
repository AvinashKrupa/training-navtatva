import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import { useRouter } from "next/router";
import { Cart } from "../../network/gateway/Cart";
import Footer from "../../app/components/common/Footer";
import Header from "../../app/components/common/Header";

interface iProps { }

function ThankYou(props: any) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Header />
      <section className="thankYou text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="fs-40 font-b text-color-2 list-inline-item">
              Thanks For Shopping With Us
            </h1>
            <p className="fs-20 font-m text-color-1 mt-3">
              Your Order has been Cancelled
            </p>
            <div style={{ marginBottom: 400 }}>
              <a href="/shop" className="btn mt-3">
                Shop Now!
              </a>
            </div>
            <br />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ThankYou;
