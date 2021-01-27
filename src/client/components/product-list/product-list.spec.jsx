import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as ReactRedux from 'react-redux';
import { fromString } from "uuidv4";
import { ProductList } from "./product-list";

afterAll(() => {
  jest.clearAllMocks();
});
const spyOnUseDispatch = (mock, expected) =>
  jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => mock.mockResolvedValue(expected));

const getProps = (props) => {
  return {
    products: [{
      id: fromString('Sunglass'),
      name: 'Sunglass',
      price: 9299,
      image: 'sunglasses.png',
      quantity: 10,
      description: 'Sunglasses or sun glasses (informally called shades or sunnies) are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes. They can sometimes also function as a visual aid, as variously termed spectacles or glasses exist, featuring lenses that are colored, polarized or darkened. In the early 20th century, they were also known as sun cheaters'
    }, {
      id: fromString('Headphone'),
      name: 'Headphone',
      price: 5049,
      image: 'headphones.png',
      quantity: 10,
      description: 'Headphones are a pair of small loudspeaker drivers worn on or around the head over a user\'s ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earspeakers, earphones, colloquially, cans.',
    }, {
      id: fromString('Chair'),
      name: 'Chair',
      price: 8000,
      image: 'chair.png',
      quantity: 10,
      description: 'Chairs vary in design. An armchair has armrests fixed to the seat, a recliner is upholstered and under its seat is a mechanism that allows one to lower the chair\'s back and raise into place a fold-out footrest, a rocking chair has legs fixed to two long curved slats and a wheelchair has wheels fixed to an axis under the seat.',
    }, {
      id: fromString('Flashlight'),
      name: 'Flashlight',
      price: 2099,
      image: 'flashlight.png',
      quantity: 3,
      description: 'A flashlight (US) or torch (UK) is a portable hand-held electric light. The source of the light often used to be an incandescent light bulb (lamp) but has been gradually replaced by light-emitting diodes (LEDs) since the mid-2000s. A typical flashlight consists of the light source mounted in a reflector, a transparent cover (sometimes combined with a lens) to protect the light source and reflector, a battery, and a switch. These are supported and protected by a case.',
    }, {
      id: fromString('Phone'),
      name: 'Phone',
      price: 40000,
      image: 'phone.png',
      quantity: props.isFromCart ? 10 : 0,
      description: 'A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone, sometimes shortened to simply mobile, cell or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area. ',
    }],
    title: "Product list",
    isFromCart: false,
    ...props
  }
}
describe.each([
  ["Product list", getProps({})],
  ["Cart", getProps({
    title: "Cart",
    isFromCart: true
  })],
  ["Empty Cart", getProps({
    products: [],
    isFromCart: true
  })]
])('ProductList %s', (a, props) => {
  it('should render without crash', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockImplementation(() => { });
    spyOnUseDispatch(jest.fn(), {});
    const { container } = render(<BrowserRouter><ProductList {...props} /></BrowserRouter>)
    expect(container).toMatchSnapshot();
  });
});
