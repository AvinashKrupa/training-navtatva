import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import API from "../constants/APIEndpoints";
import LocalStorageService from "../../utils/storage/LocalStorageService";
interface RefreshToken {
  status: number;
  data: {
    access_token: string;
  };
}

export abstract class HTTPBaseService {
  protected instance: AxiosInstance;
  protected token: string;
  protected readonly baseURL: string;

  public constructor(baseURL: string, token: string) {
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL,
    });

    if (token && token != "") {
      this.token = token;
    } else {
      this.token = localStorage.getItem("hashToken") ?? "";
    }

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response) => {
      if (response.headers && response.headers.authorization) {
        const responseToken = (response.headers.authorization as string).split(
          " "
        )[1];
        this.token = responseToken;

        localStorage.setItem("hashToken", this.token);
      }
      return response;
    }, this.handleError);
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    // if (this.token == "") {
    //   const refreshToken = await this.refreshToken();
    //   if (refreshToken.status === 200) {
    //     this.token = refreshToken.data.access_token;
    //     localStorage.setItem("hashToken", this.token);
    //     console.log("hashToken", this.token);
    //     //  return this.instance(originalRequest);
    //   }
    // }

    const headerJson = {
      "Content-Type": `application/json`,
      Accept: `application/json`,
      Authorization: `Bearer ${this.token}`,
      accessToken: `${LocalStorageService.getAccessToken()}`,
    };

    config.headers = headerJson;

    if (
      config.url?.startsWith(API.RUPIFI.CHECK_CREDIT_ELIGIBILITY) ||
      config.url?.startsWith(API.RUPIFI.CREATE_PAYMENT) ||
      config.url?.startsWith(API.RUPIFI.CAPTURE_AMOUNT) ||
      config.url?.startsWith(API.RUPIFI.CHECK_PAYMENT_STATUS)
    ) {
      let rpf_token: any = localStorage.getItem("rpf_token");
      rpf_token = JSON.parse(rpf_token);
      config.headers["Authorization"] = `Bearer ${rpf_token.accessToken}`;
    }

    return config;
  };

  private handleError = async (error: AxiosError) => {
    const originalRequest = error.config;
    if (error.response?.status === 401) {
      const refreshToken = await this.refreshToken();
      if (refreshToken.status === 200) {
        this.token = refreshToken.data?.access_token || "";
        localStorage.setItem("hashToken", this.token);
        return this.instance(originalRequest);
      }
    } else {
      throw error;
    }
  };

  private async refreshToken(): Promise<RefreshToken> {
    // const refreshTokenRequest = {
    //   hashToken: this.token,
    // };

    // const { data } = await this.addRequestOptionsForClientSecrect();
    // const options: AxiosRequestConfig = {
    //   headers: {
    //     CLIENT_KEY: data.clientKey,
    //   },
    // };

    return axios.get(`${this.baseURL}access-token`);

    // return axios.get(
    //   `${this.baseURL}/access-token`,
    //   refreshTokenRequest,
    //   options
    // );
  }

  private addRequestOptionsForClientSecrect() {
    return axios.get(`${this.baseURL}access-token`);
  }
}
