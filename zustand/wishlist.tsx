import create from "zustand";
import { devtools } from "zustand/middleware";
import LocalStorageService from "../utils/storage/LocalStorageService";

const useWishlistStore = create((set) => ({

  wishlistItems: [],

  synchronized: (data: boolean) => {
    set((state) => ({

      wishlistItems:LocalStorageService.getWishlist() || []
    }));
  },
}));
export default useWishlistStore
