import React from "react";

export const ProductDescription = ({
  descr,
  classPrefix = 'ProductDescription',
  noRender = false
}) => {
  if (noRender) {
    return null;
  }
  return (
    <div className={`${classPrefix}__info__description`}>
      {descr || ''}
    </div>
  );
}
