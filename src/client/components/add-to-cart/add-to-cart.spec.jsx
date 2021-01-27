import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import * as ReactRedux from 'react-redux';
import { AddToCart } from ".";


const spyOnUseDispatch = (mock, expected) =>
  jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => mock.mockResolvedValue(expected));

afterAll(() => {
  jest.clearAllMocks();
});
const product = (quantity) => ({
  quantity
});
describe.each([
  ['enabled', 10],
  ['disabled', 0]
])('AddToCart - %s', (a, b) => {

  it('should render without crash', () => {
    const mockDispatch = jest.fn();
    spyOnUseDispatch(mockDispatch, () => { });
    const { container } = render(<AddToCart product={product(b)} classPrefix="ProductDetails" />)
    expect(container).toMatchSnapshot();
  });
  it('should fire click event', () => {
    const mockDispatch = jest.fn();
    spyOnUseDispatch(mockDispatch, () => { });
    const { getByTitle } = render(<AddToCart product={product(b)} classPrefix="ProductDetails" />)
    const button = getByTitle('Add to cart');
    act(() => {
      fireEvent.click(button);
    });
    if (b) {
      expect(mockDispatch).toHaveBeenCalled();
    } else {
      expect(mockDispatch).not.toHaveBeenCalled();
    }
  });
});
