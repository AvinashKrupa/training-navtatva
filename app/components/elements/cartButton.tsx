import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { ChangeEventHandler } from "react";
import shallow from "zustand/shallow";
import useCartStore from "../../../zustand/cart";
import LoadingSpinner from "./loadingSpinner";
import Badge from "react-bootstrap/Badge";
import { useRouter } from "next/router";
import Permalink from "../../../utils/Permalink";

function CartButton() {
  const route = useRouter();
  const cartCount = useCartStore((state: any) => state.count, shallow);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <li className="list-inline-item">
      {cartCount > 0 ? <Badge bg="danger">{cartCount}</Badge> : null}
      <a className="cart rounded-circle d-block" onClick={() => route.replace(Permalink.ofCart())}  title={""}>
        <img src="/images/cart.png" alt="" />
      </a>
    </li>
  );
}

export default CartButton;
