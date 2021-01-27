import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThankYou } from "./thank-you";

describe('ThankYou', () => {
  it('should render without crash', () => {
    const { container } = render(<BrowserRouter><ThankYou /></BrowserRouter>)
    expect(container).toMatchSnapshot();
  });
});
