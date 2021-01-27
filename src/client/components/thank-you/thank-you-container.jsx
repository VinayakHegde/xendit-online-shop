import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart-slice";
import { ThankYou } from "./thank-you";

export const ThankYouContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, []);
  return (
    <ThankYou />
  );
}
