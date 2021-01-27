import React from "react";
import { Link } from "react-router-dom";

export const ProductImage = ({
  src,
  classPrefix,
  id = null
}) => {
  if (id) {
    return (
      <Link to={`/product/${id}`} className={`${classPrefix}__link`}>
        <img src={`/images/${src}`} className={`${classPrefix}__image`} alt="" />
      </Link>
    );
  }
  return (
    <img src={`/images/${src}`} className={`${classPrefix}__image`} alt="" />
  );
}
