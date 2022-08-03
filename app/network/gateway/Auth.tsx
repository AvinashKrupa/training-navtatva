import API from "../../constants/APIEndpoints";
import constants from "../../constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
import { Cart } from "./Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";

export class Auth extends HTTPBaseService {
  private static classInstance?: Auth;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new Auth(token ?? "");
    }

    return this.classInstance;
  }

  public login = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.LOGIN, data)
        .then(async (response) => {
          if (response.status == 200) {
            console.log("login data", response);
            let message = response.data.msg ?? "Login success";
            const { customer_id, token } = response.data.data;

            let params = {
              data: [
                {
                  type: "customer",
                  id: customer_id,
                },
              ],
            };
            console.log("login data", params);
            LocalStorageService.setToken(token);
            let obj = Cart.getInstance();

            await obj.cartAssociationWithCustomer(params);

            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "Login failed";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          // Toast.showError(
          //   JSON.parse(error.response.request.response).msg.detail
          // );
          reject(error);
        });
    });
  };
}
