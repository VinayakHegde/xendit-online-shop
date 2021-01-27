import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product-slice";
import { ProductList } from "./product-list";
import './style.scss';

export const ProductListContainer = ({ title = "Product list", isFromCart = false }) => {
  const products = useSelector(state => {
    if (isFromCart) {
      return state.cart.data || [];
    }
    return state.products.data || []
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isFromCart) {
      dispatch(getProducts());
    }
  }, [isFromCart]);
  return (
    <ProductList products={products} title={title} isFromCart={isFromCart} />
  );
}
