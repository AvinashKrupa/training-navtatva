import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { ChangeEventHandler } from "react";
import shallow from "zustand/shallow";
import useCartStore from "../../../zustand/cart";
import LoadingSpinner from "./loadingSpinner";
import Badge from "react-bootstrap/Badge";

function CartButton() {
  const cartCount = useCartStore((state: any) => state.count, shallow);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <li className="list-inline-item">
      {cartCount > 0 ? <Badge bg="danger">{cartCount}</Badge> : null}
      <a className="cart rounded-circle d-block" href="/cart" title={""}>
        <img src="/images/cart.png" alt="" />
      </a>
    </li>
  );
}

export default CartButton;
