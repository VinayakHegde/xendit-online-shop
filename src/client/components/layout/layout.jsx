import React from 'react';
import { Link } from 'react-router-dom';
import { MiniCartContainer } from '../mini-cart';
import './style.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <header className="Layout__header">
        <Link to="/" className="Layout__header__logo">
          <img src="/images/mystore-logo.svg" alt="" />
        </Link>
        <MiniCartContainer />
      </header>
      {children}
    </>
  );
};
