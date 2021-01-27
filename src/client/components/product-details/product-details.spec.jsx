import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as ReactRedux from 'react-redux';
import { fromString } from "uuidv4";
import { ProductDetails } from "./product-details";

afterAll(() => {
  jest.clearAllMocks();
});
const spyOnUseDispatch = (mock, expected) =>
  jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => mock.mockResolvedValue(expected));

const getProduct = (props = {}) => {
  return {
    product: {
      id: fromString('Sunglass'),
      name: 'Sunglass',
      price: 9299,
      image: 'sunglasses.png',
      quantity: 10,
      description: 'Sunglasses or sun glasses (informally called shades or sunnies) are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes. They can sometimes also function as a visual aid, as variously termed spectacles or glasses exist, featuring lenses that are colored, polarized or darkened. In the early 20th century, they were also known as sun cheaters',
      ...props
    }
  }
}
describe.each([
  ["with default stock", getProduct()],
  ["with out of stock", getProduct({ quantity: 0 })],
  ["with low stock", getProduct({ quantity: 2 })]
])('ProductList %s', (a, props) => {
  it('should render without crash', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockImplementation(() => { });
    spyOnUseDispatch(jest.fn(), {});
    const { container } = render(<BrowserRouter><ProductDetails {...props} /></BrowserRouter>)
    expect(container).toMatchSnapshot();
  });
});
