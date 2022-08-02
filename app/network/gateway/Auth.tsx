import API from "../../constants/APIEndpoints";
import constants from "../../constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
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
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "Login success";
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
          Toast.showError(
            JSON.parse(error.response.request.response).msg.detail
          );
          reject(error);
        });
    });
  };
}
