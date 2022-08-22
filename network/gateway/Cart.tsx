import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";

import { v4 as uuidv4 } from "uuid";
import LocalStorageService from "../../utils/storage/LocalStorageService";
export class Cart extends HTTPBaseService {
  private static classInstance?: Cart;
  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new Cart(token ?? "");
    }

    return this.classInstance;
  }

  static getCartId() {
    let cartId = localStorage.getItem("CART_ID");

    if (!cartId) {
      cartId = uuidv4();
      localStorage.setItem("CART_ID", cartId);
    }
    return cartId;
  }

  public cartAssociationWithCustomer = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.CART_ASSOCIATION + "/" + Cart.getCartId(), data)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";
            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(
            JSON.parse(error.response.request.response).msg.detail
          );
          reject(error);
        });
    });
  };

  public addToCart = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.ADD_TO_CART + "/" + Cart.getCartId(), data)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";
            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(
            JSON.parse(error.response.request.response).msg.detail
          );
          reject(error);
        });
    });
  };

  public getCustomerCart = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_CART + "/" + `${LocalStorageService.getAccessToken()}`)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";
            localStorage.setItem("CART_ID", response.data.refId);
            //Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public deleteCartItem = (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .delete(API.DELETE_CART_ITEM + Cart.getCartId() + "/items/" + id)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data;
            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.message;
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public checkout = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.CHECKOUT + "/" + Cart.getCartId(), data)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";
            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(error.message);

          reject(error);
        });
    });
  };
}
