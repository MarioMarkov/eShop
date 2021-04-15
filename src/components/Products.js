import React, { useEffect } from 'react';
import { ProductItem } from './ProductItem';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions';

const Products = ({ product: { products }, getProducts }) => {
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);
  if (products === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className='products'>
      {products.map((product) => (
        <ProductItem product={product} key={product.name} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);
