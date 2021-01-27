import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Button } from ".";

afterAll(() => {
  jest.clearAllMocks();
});
describe.each([
  ['enabled', false],
  ['disabled', true]
])('Button - %s', (a, b) => {

  it('should render without crash', () => {
    const onClick = jest.fn();
    const { container } = render(<Button disabled={b} type="button" onClick={onClick} className="My__button" title="Click me" />)
    expect(container).toMatchSnapshot();
  });
  it('should fire click event', () => {
    const onClick = jest.fn();
    const { getByTitle } = render(<Button disabled={b} type="button" onClick={onClick} className="My__button" title="Click me" />)
    const button = getByTitle('Click me');
    act(() => {
      fireEvent.click(button);
    });
    if (!b) {
      expect(onClick).toHaveBeenCalled();
    } else {
      expect(onClick).not.toHaveBeenCalled();
    }
  });
});
