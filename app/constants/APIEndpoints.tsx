import React from "react";
import constants from "./constant";
const API = {
  GET_CATEGORY: "get_all_nodes/cdfd93b9-b8d1-4019-b515-c31a4c18a1b7",
  GET_CATEGORY_TREE: "categories/tree",
  GET_BRANDS: "pcm_brands",
  GET_OCCASION: "pcm_occasion",
  GET_PRODUCT_LIST: "pcm_products",
  GET_PRODUCT_DETAIL: "pcm_product/",
  ORDER_TAKING_APP: {    
    GET_SELLERS: "get-all-customers",
    PLACE_ORDER: "place-custom-order",
    UPDATE_ORDER: "update-custom-order",
    GET_ORDERS: "get-custom-order",
    CALLBACK_URL: "callback-custom-order",
  },
  RUPIFI: {
    GET_ACCESS_TOKEN: constants.RUPIFI.BASE_URL_V1+"merchants/auth/token",
    CHECK_CREDIT_ELIGIBILITY: constants.RUPIFI.BASE_URL_V1+"customers/eligibility",
    CREATE_PAYMENT: constants.RUPIFI.BASE_URL_V2+"payments",
    CAPTURE_AMOUNT: constants.RUPIFI.BASE_URL_V2+"payments/capture",
    CHECK_PAYMENT_STATUS: constants.RUPIFI.BASE_URL_V1+"payments/?merchantPaymentRefId=",
  },  
};
export default API;
