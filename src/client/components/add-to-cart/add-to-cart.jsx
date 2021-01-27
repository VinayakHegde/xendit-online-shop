import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";
import { Button } from "../button";

export const AddToCart = ({ product, classPrefix, noRender = false }) => {
  const dispatch = useDispatch();
  if (noRender) {
    return null;
  }
  const disabled = product.quantity === 0;
  const onClick = () => {
    if(!disabled) {
      dispatch(addToCart(product));
    }
  };

  return (
    <Button type="button" disabled={disabled} onClick={onClick} className={`AddToCart ${classPrefix}__button`} title="Add to cart" />
  );
}
