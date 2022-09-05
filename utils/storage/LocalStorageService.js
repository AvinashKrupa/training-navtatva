class LocalStorageService {
  static getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  static setUserToken(tokenObj) {
    localStorage.setItem("user_token", tokenObj);
  }
  static setCustomerId(customer_id) {
    localStorage.setItem("customer_id", customer_id);
  }
  static setWishlist(ids) {
    localStorage.setItem("customer_wishlist", ids);
  }
  static getWishlist() {
    return localStorage.getItem("customer_wishlist");
  }

  static setCartItems(ids) {
    localStorage.setItem("customer_cart_items", JSON.stringify(ids));
  }
  static getCartItems() {
    let data = localStorage.getItem("customer_cart_items");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  static getCustomerId() {
    return localStorage.getItem("customer_id");
  }
  static logoutUser() {
    localStorage.removeItem("user_token");
    localStorage.removeItem("customer_id");
  }
  static setToken(tokenObj) {
    localStorage.setItem("access_token", tokenObj);
    localStorage.setItem("refresh_token", tokenObj);
  }
  static getUserToken() {
    return localStorage.getItem("user_token");
  }
  static getAccessToken() {
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
      return localStorage.getItem("access_token");
    } else {
      return null;
    }
  }
  static getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }
  static clearToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_token");
  }
  static getCartRef() {
    let cartRef = localStorage.getItem("cartRef");
    if (cartRef == undefined) {
      const uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      };
      cartRef = uid();
      localStorage.setItem("cartRef", cartRef);
    }
    return cartRef;
  }
}
export default LocalStorageService;
