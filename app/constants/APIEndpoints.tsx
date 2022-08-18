import React from "react";
import constants from "./constant";
const API = {
  LOGIN: "login",
  GET_CATEGORY: "get_all_nodes",
  GET_CATEGORY_TREE: "categories/tree",
  GET_BRANDS: "pcm_brands",
  GET_OCCASION: "pcm_occasion",
  GET_PRODUCT_LIST: "pcm_products",
  ADD_TO_CART: "add-to-cart",
  CART_ASSOCIATION: "create_customer_cart_association",
  GET_CART: "get_customer_cart",
  GET_PRODUCT_DETAIL: "pcm_product/",
  GET_PRODUCT_BY_NODE:'products_by_node/',
  DELETE_CART_ITEM:'carts/',
  CHECKOUT:"checkout",
  ADD_ADDRESS:"createAddress",
  UPDATE_ADDRESS :"updateAddress",
  ORDER_TAKING_APP: {
    GET_SELLERS: "get-all-customers",
    PLACE_ORDER: "place-custom-order",
    UPDATE_ORDER: "update-custom-order/",
    GET_ORDERS: "get-custom-order",
    CALLBACK_URL: "callback-custom-order",
  },
  RUPIFI: {
    GET_ACCESS_TOKEN: constants.RUPIFI.BASE_URL_V1 + "merchants/auth/token",
    CHECK_CREDIT_ELIGIBILITY:
      constants.RUPIFI.BASE_URL_V1 + "customers/eligibility",
    CREATE_PAYMENT: constants.RUPIFI.BASE_URL_V2 + "payments",
    CAPTURE_AMOUNT: constants.RUPIFI.BASE_URL_V2 + "payments/capture",
    CHECK_PAYMENT_STATUS:
      constants.RUPIFI.BASE_URL_V1 + "payments/?merchantPaymentRefId=",
  },
};
export default API;
