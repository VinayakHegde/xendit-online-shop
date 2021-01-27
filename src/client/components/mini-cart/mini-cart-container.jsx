import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MiniCart } from "./mini-cart";
import './style.scss';

export const MiniCartContainer = () => {
  const cart = useSelector(state => state.cart.data);
  const location = useLocation();

  if(location.pathname.includes('/cart')) {
    return null;
  }
  const noLink = cart.length === 0;
  const cartCount = noLink ? '' : cart.reduce((acc, { quantity }) => {
    return acc + quantity;
  }, 0);
  return (
    <MiniCart noLink={noLink} cartCount={cartCount} />
  )

}
