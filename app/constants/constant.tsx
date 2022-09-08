import React from "react";

const RupifiSandbox = {
  BASE_URL_V1: "https://api-sandbox.rupifi.com/v1/",
  BASE_URL_V2: "https://credit-line-api-sandbox.rupifi.com/v2.1/",
  TEST_ACCOUNT: 7976545492, //8660178047 // 7976545492
  MERCHANT_ID: "TESTCLIENT",
  MERCHANT_SECRET: "OGFlN2Q2MGItMmJiYy00OTU0LWE1MWItMTU1OGJmYTU4YThm",
  REDIRECT_CANCEL_URL: "http://www.navtatva.fashion/order-taking-app/cancel",
  REDIRECT_CONFIRM_URL:
      "http://www.navtatva.fashion/order-taking-app/success",
};

const RupifiProduction = {
  BASE_URL_V1: "https://api.rupifi.com/v1/",
  BASE_URL_V2: "https://credit-line-api.rupifi.com/v2.1/",
  TEST_ACCOUNT: null,
  MERCHANT_ID: "NAVTATVA_FASHION",
  MERCHANT_SECRET: "YjZiMGViYzYtNGJjZS00NGM3LTgxNDMtMDVkNzRhNTcwYjAw",
  REDIRECT_CANCEL_URL: "http://www.navtatva.fashion/order-taking-app/cancel",
  REDIRECT_CONFIRM_URL:
      "http://www.navtatva.fashion/order-taking-app/success",
};

const RupifiUC = {
  BASE_URL: "http://3.109.249.174:1880/rupifi/",
  REDIRECT_CANCEL_URL: "http://www.navtatva.fashion/checkout/cancel",
  REDIRECT_CONFIRM_URL: "http://www.navtatva.fashion/checkout/thank-you",
  TEST_ACCOUNT: 7976545492, //8660178047 // 7976545492
};

const constants = {
  assetsBaseURL: "http://3.109.249.174:1880",
  baseURL: "http://3.109.249.174:1880/",
  ACCESS_TOKEN: "0f40c705ef74aa0b3f20817c4aaf70d65938de66",
  RUPIFI: RupifiProduction,
  PAYMENT_METHOD: {
    RUPIFI: RupifiUC
  }
};
export default constants;
