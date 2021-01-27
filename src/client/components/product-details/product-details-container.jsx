import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../../store/product-slice";
import { Button } from "../button";
import { ProductDetails } from "./product-details";
import './style.scss';

export const ProductDetailsContainer = () => {
  const { id } = useParams();
  const { product, noSuchProduct } = useSelector(state => {
    const { data } = state.products;

    return {
      product: data.find(p => p.id === id),
      noSuchProduct: data.length > 0
    };
  });
  const dispatch = useDispatch();
  if (!noSuchProduct) {
    return (
      <>
        <div>Product you looking for does not exist!</div>
        <Link to="/" className="button">
          <Button type="button" title="Return Home" />
        </Link>
      </>
    );
  }
  if (!product) {
    dispatch(getProducts());
    // if product not found, then make api cann to get that product
    return <div>Loading...</div>;
  }
  return (
    <ProductDetails product={product} />
  );
}
