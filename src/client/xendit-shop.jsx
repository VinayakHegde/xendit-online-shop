import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThankYouContainer } from "./components/thank-you";
import { Checkout } from "./components/checkout";
import { ProductListContainer } from "./components/product-list";
import { ProductDetailsContainer } from "./components/product-details";
import { Layout } from "./components/layout";
import { getConfiguration } from "./store/config-slice";

const XenditShop = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/cart">
          <ProductListContainer title="Cart" isFromCart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/product/:id">
          <ProductDetailsContainer />
        </Route>
        <Route path="/thankyou">
          <ThankYouContainer />
        </Route>
        <Route path="/">
          <ProductListContainer />
        </Route>
      </Switch>
    </Layout>
  </Router>
);


export const XenditShopContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfiguration());
  }, []);
  return (
    <XenditShop />
  );
}
