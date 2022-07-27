import API from "../../constants/APIEndpoints";
import constants from "../../constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
export class OrderTakingAppService extends HTTPBaseService {
  private static classInstance?: OrderTakingAppService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new OrderTakingAppService(token ?? "");
    }

    return this.classInstance;
  }

  public getSellerList = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.ORDER_TAKING_APP.GET_SELLERS)
        .then((response) => {
          if (response.status == 200) {
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

  public getOrderList = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.ORDER_TAKING_APP.GET_ORDERS)
        .then((response) => {
          if (response.status == 200) {
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

  public placeOrder = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.ORDER_TAKING_APP.PLACE_ORDER, data)
        .then((response) => {
          if (response.status == 200) {
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

  public updateOrder = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.ORDER_TAKING_APP.UPDATE_ORDER, data)
        .then((response) => {
          if (response.status == 200) {
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
}
