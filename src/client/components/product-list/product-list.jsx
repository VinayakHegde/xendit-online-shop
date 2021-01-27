import React from "react";
import { AddToCart } from "../add-to-cart";
import { ProceedTo } from "../proceed-to";
import { ProductImage, ProductStock, ProductDescription, ProductName, ProductPrice } from "../product";
import { ProductQuantity } from "../product/product-quantity";
import './style.scss';

export const ProductList = ({
  products = [],
  title = "Product list",
  isFromCart = false
}) => (
  <section className="ProductList">
    <div>
      <h3>{isFromCart && !products.length ? 'Cart is empty' : title}</h3>
    </div>
    {(products.length > 0) && (
      <ul className="ProductList__wrapper">
        {products.map(product => (
          <li key={product.id} className="ProductList__item">
            <div className="ProductList__item__info">
              <ProductImage src={product.image} id={product.id} classPrefix="ProductList__item" />
              <ProductStock quantity={product.quantity} noRender={isFromCart} />
            </div>
            <div className="ProductList__item__info">
              <ProductName name={product.name} id={product.id} classPrefix="ProductList__item" />
              <ProductPrice price={product.price} classPrefix="ProductList__item" />
              <AddToCart product={product} classPrefix="ProductList__item" noRender={isFromCart} />
              <ProductQuantity quantity={product.quantity} noRender={!isFromCart} />
            </div>
            <ProductPrice price={product.price * product.quantity} caption="Total Price" classPrefix="ProductList__item" noRender={!isFromCart} />
            <ProductDescription descr={product.description} classPrefix="ProductList__item" noRender={isFromCart} />
          </li>
        ))}
      </ul>
    )}
    {isFromCart && (
      <div className="ProductList__cart__action">
        <ProceedTo />
      </div>
    )}
  </section>
);
