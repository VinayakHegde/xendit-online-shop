import React from "react";
import { AddToCart } from "../add-to-cart";
import { ProductImage, ProductStock, ProductDescription, ProductName, ProductPrice } from "../product";
import './style.scss';

export const ProductDetails = ({ product = {
  image: '',
  quantity: '',
  price: 0,
  description: '',
} }) => (
  <section className="ProductDetails">
    <div className="ProductDetails__info">
      <ProductImage src={product.image} classPrefix="ProductDetails" />
      <ProductStock quantity={product.quantity} />
      <ProductPrice price={product.price} classPrefix="ProductDetails" />
      <AddToCart product={product} classPrefix="ProductDetails" />
    </div>
    <div className="ProductDetails__info">
      <ProductName name={product.name} classPrefix="ProductDetails" tag="h2" />
      <ProductDescription descr={product.description} classPrefix="ProductDetails" />
    </div>
  </section >
);
