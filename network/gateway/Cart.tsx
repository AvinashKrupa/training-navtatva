import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";

import { v4 as uuidv4 } from "uuid";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import { RupifiUCService } from "./RupifiUCService";
import useCartStore from "../../zustand/cart";
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

  static async regenrateCustomerCartAssociation() {
    let cartId = uuidv4();
    localStorage.setItem("CART_ID", cartId);
    let params = {
      data: [
        {
          type: "customer",
          id: LocalStorageService.getCustomerId(),
        },
      ],
    };

    return Cart.getInstance().cartAssociationWithCustomer(params);
  }

  public cartAssociationWithCustomer = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.CART_ASSOCIATION + "/" + Cart.getCartId(), data)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";
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
            let cartItems: any = LocalStorageService.getCartItems();
            console.log("paradsa", cartItems);
            if (cartItems) {
              cartItems.push(data.data.id);
            } else {
              cartItems = [data.data.id];
            }
            console.log("cartItemscartItems", cartItems);
            LocalStorageService.setCartItems(cartItems);
            useCartStore.setState({
              count: cartItems.length,
              cartItems: cartItems,
            });
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
            let cartItems = response.data.data;
            if (cartItems) {
              let prdId: any = cartItems.map((info: any) => {
                return info.product_id;
              });
              LocalStorageService.setCartItems(prdId);
              useCartStore.setState({
                count: cartItems.length,
                cartItems: cartItems,
              });
            }

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
          //    Toast.showError(error.message);
          reject(error);
        });
    });
  };

  static isProductInCart(id: string) {
    let data = LocalStorageService.getCartItems();
    return data?.includes(id) || false;
  }

  public deleteCartItem = (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .delete(API.DELETE_CART_ITEM + Cart.getCartId() + "/items/" + id)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data;
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

  public checkout = (data: any, order: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.CHECKOUT + "/" + Cart.getCartId(), data)
        .then((response) => {
          if (response.status == 200) {
            const { id } = response?.data?.data;
            const sellerId = LocalStorageService.getCustomerId();
            const requestJSON = {
              amount: order?.grandTotal,
              autoCapture: false,
              callbackUrl: API.RUPIFI_UC.CALLBACK_URL,
              merchantCustomerRefId: (
                constants.PAYMENT_METHOD.RUPIFI.TEST_ACCOUNT ?? sellerId
              ).toString(),
              merchantPaymentRefId: id,
              redirectCancelUrl:
                constants.PAYMENT_METHOD.RUPIFI.REDIRECT_CANCEL_URL,
              redirectConfirmUrl:
                constants.PAYMENT_METHOD.RUPIFI.REDIRECT_CONFIRM_URL,
            };

            /// Temporary Solution (Because of the backend issue)
            Cart.regenrateCustomerCartAssociation();

            RupifiUCService.getInstance("")
              .createRupifiPayment(requestJSON)
              .then((response: any) => {
                if (response.status == 200) {
                  resolve(response);
                } else {
                  reject(response);
                }
              })
              .catch((error: any) => {
                console.log(error);
                reject(error);
              });
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

  public applyCouponCode = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.APPLY_PROMOTION + "/" + `${Cart.getCartId()}`, data)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";

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
}
