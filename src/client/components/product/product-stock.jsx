import React from "react";

export const ProductStock = ({
  quantity,
  noRender
}) => {
  if (noRender) {
    return null;
  }
  if (quantity > 0 && quantity < 4) {
    return (
      <div className="ProductStock__low">
        <small>only {quantity} left</small>
      </div>
    )
  }

  if (quantity === 0) {
    return (
      <div className="ProductStock__outofstock">
        <small>out of stock</small>
      </div>
    )
  }
  return null;
}
