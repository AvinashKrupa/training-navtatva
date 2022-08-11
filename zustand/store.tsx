import create from "zustand";
import { devtools } from "zustand/middleware";
import LocalStorageService from "../utils/storage/LocalStorageService";

const useUserStore = create((set) => ({
  isLogin: LocalStorageService.getAccessToken(),
  loginPopup: false,
  userInfo: null,
  setUserInfo: (data: any) => {
    set((state) => ({
      loginPopup: false,
      isLogin: true,
      userInfo: data,
    }));
  },
  removeUserInfo: (data: any) => {
    set((state) => ({
      isLogin: false,
    }));
  },
  showLogin: (data: boolean) => {
    set((state) => ({
      loginPopup: data,
    }));
  },
}));
export default useUserStore;
