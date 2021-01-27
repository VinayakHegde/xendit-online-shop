import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";
import './style.scss';

export const ThankYou = () => (
  <div className="ThankYou">
    <div className="ThankYou__container">
      <img src={`/images/success.svg`} className="ThankYou__image" alt="success" />
      <img src="/images/thank-you.svg" className="ThankYou__image" alt="thank-you" />
      <p className="ThankYou__message">
        <span>Your order has been successfully placed.</span>
      </p>
      <Link to="/" className="button">
        <Button type="button" title="Return Home" />
      </Link>
    </div>
  </div>
);
