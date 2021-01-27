import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../button";
import { ProductPrice } from "../product";

export const ProceedTo = () => {
  const cart = useSelector(state => state.cart.data);
  const location = useLocation();
  const isCheckout = location.pathname.includes('/checkout');
  if ((cart || []).length === 0) {
    return (
      <>
        <Link to="/">
          <Button type="button" title="Start Shopping" />
        </Link>
      </>
    )
  }
  const cartTotal = cart.reduce((acc, { quantity, price }) => {
    const amount = price * quantity;
    return acc + amount;
  }, 0);

  return (
    <>
      <ProductPrice caption="Cart Total" price={cartTotal} />

      {!isCheckout ? (
        <Link to="/checkout">
          <Button type="button" title="Proceed to Checkout" />
        </Link>
      ) : (
          <Link to="/thankyou">
            <Button type="button" title="Pay now" />
          </Link>
        )
      }
    </>
  );
}
