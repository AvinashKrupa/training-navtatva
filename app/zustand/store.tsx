import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create((set) => ({
  isLogin: false,
  setUserInfo: (data: any) => {
    set((state) => ({
      isLogin: true,
      userInfo: data,
    }));
  },
  removeUserInfo: (data: any) => {
    set((state) => ({
      isLogin: false,
    }));
  },
}));
export default useStore;
