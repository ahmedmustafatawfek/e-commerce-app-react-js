import React, { useContext } from "react";
import styles from "./Allorders.module.css";
import { CartContext, handleError } from "../../context/cartContext";

export default function Allorders() {
  let {
    setCartCount,
    updatedCartCount,
  } = useContext(CartContext);

  // handle error after payment
  function handlePaymentError(updatedCartCount) {
    handleError(setCartCount, updatedCartCount);
  }

  return (
    <div className="mt-5 w-75 mx-auto py-5 fs-1">
     
      {handlePaymentError(updatedCartCount)}
      <h1>All Orders</h1>
    </div>
  );
}
