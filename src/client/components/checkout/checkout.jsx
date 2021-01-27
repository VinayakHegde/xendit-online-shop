import React from "react";
import { ProductListContainer } from "../product-list";
import './style.css';

export const Checkout = () => {
  return (
    <main className="Checkout">
      <ProductListContainer title="Checkout" isFromCart />
    </main>
  );
}
