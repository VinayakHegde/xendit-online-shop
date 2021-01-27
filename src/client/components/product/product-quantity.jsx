import React from "react";

export const ProductQuantity = ({
  quantity,
  noRender = false
}) => {
  if (noRender) {
    return null;
  }
  return (
    <div className="ProductQuantity__info__quantity">
      <span className="ProductQuantity__label">Quantity: </span>
      <span className="ProductQuantity__quantity">{quantity}</span>
    </div>
  );
}
