import React from "react";
import { Link } from "react-router-dom";

export const ProductName = ({
  name,
  classPrefix,
  id = null,
  tag = 'strong'
}) => {
  const render = () => React.createElement(tag, { className: `${classPrefix}__name` }, name);
  if (id) {
    return (
      <Link to={`/product/${id}`} className={`${classPrefix}__link`}>
        {render()}
      </Link>
    );
  }
  return render();
}
