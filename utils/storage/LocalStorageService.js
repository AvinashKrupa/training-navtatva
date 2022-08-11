const LocalStorageService = (function () {
  var localStorage
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setUserToken(tokenObj) {
    localStorage.setItem("user_token", tokenObj);
  }
  function _setCustomerId(customer_id) {
    localStorage.setItem("customer_id", customer_id);
  }
  function _getCustomerId() {
    return localStorage.getItem("customer_id");
  }
  function _setToken(tokenObj) {
    localStorage.setItem("access_token", tokenObj);
    localStorage.setItem("refresh_token", tokenObj);
  }
  function _getUserToken() {
    return localStorage.getItem("user_token");
  }
  function _getAccessToken() {
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
      return localStorage.getItem("access_token");
    } else {
      return "";
    }
  }
  function _getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }
  function _clearToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_token");
  }
  function _getCartRef() {
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
  return {
    getService: _getService,
    setToken: _setToken,
    setUserToken: _setUserToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    getUserToken: _getUserToken,
    clearToken: _clearToken,
    getCartRef: _getCartRef,
    setCustomerId:_setCustomerId,
    getCustomerId:_getCustomerId
  };
})();
export default LocalStorageService;
