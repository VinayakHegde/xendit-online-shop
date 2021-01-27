import React from "react";
import { Link, } from "react-router-dom";
import './style.scss';

export const MiniCart = ({noLink = true, cartCount = ''}) => {
  const render = () => (
    <div className="MiniCart">
      <small className={`MiniCart__count ${noLink && 'MiniCart__count--noLink'}`}>
        {cartCount}
      </small>
      <img src="/images/cart.png" className="MiniCart__icon" alt="" />
    </div>
  );
  if (noLink) {
    return render();
  }
  return (
    <Link to="/cart">
      {render()}
    </Link>
  )

}
