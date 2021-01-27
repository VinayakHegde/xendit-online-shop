import React from "react";
import { useSelector } from "react-redux";

export const ProductPrice = ({
  caption = "Price",
  price,
  classPrefix = 'ProductPrice',
  noRender = false
}) => {
  const currency = useSelector(state => state.config.data?.currency || '');
  if (noRender) {
    return null;
  }
  const formattedPrice = `${currency || ''} ${price}`.trim();
  return (
    <div className={`${classPrefix}__info__price`}>
      <span className={`${classPrefix}__label`}>{caption}: </span>
      <span className={`${classPrefix}__price`}>{formattedPrice}</span>
    </div>
  );
}
