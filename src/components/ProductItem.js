import React from 'react';

export const ProductItem = ({ product }) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt='' />
      <span className='product-details'>
        <span className='product-name'>{product.name}</span>
        <span className='product-price'>
          <a href=''>
            <i className='fas fa-shopping-cart fa-2x'></i>
          </a>
        </span>
      </span>
    </div>
  );
};
