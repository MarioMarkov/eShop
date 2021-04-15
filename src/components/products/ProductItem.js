import React from 'react';

export const ProductItem = ({ product }) => {
  const onClick = () => {
    let count = document.querySelector('.counter').innerHTML;
    count = parseInt(count);
    count++;
    document.querySelector('.counter').innerHTML = count;
  };
  return (
    <div className='product-card'>
      <img src={product.image} alt='' />
      <span className='product-details'>
        <span className='product-name'>{product.name}</span>
        <span className='product-price'>
          <a href='#' onClick={onClick}>
            <i className='fas fa-shopping-cart fa-2x'></i>
          </a>
        </span>
      </span>
    </div>
  );
};
