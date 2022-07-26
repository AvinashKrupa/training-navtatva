import API from "../../constants/APIEndpoints";
import constants from "../../constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
export class RupifiService extends HTTPBaseService {
  private static classInstance?: RupifiService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new RupifiService(token ?? "");
    }

    return this.classInstance;
  }

  public getSellerList = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_SELLERS)
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
