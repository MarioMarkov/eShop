import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/productActions';

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const onSubmit = (e) => {
    if (name !== '' && image !== '' && price !== 0) {
      const newProduct = {
        name,
        price,
        image,
      };
      addProduct(newProduct);

      setName('');
      setPrice(0);
      setImage('');
    }
  };

  return (
    <div className='container'>
      <span className='new-product'>New Product</span>

      <form className='add-product-form'>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='Product name'
        />
        <input
          type='number'
          onChange={(e) => setPrice(parseInt(e.target.value))}
          placeholder='Price'
        />
        <input
          type='text'
          onChange={(e) => setImage(e.target.value)}
          placeholder='Image Url'
        />
        <button onClick={onSubmit}>Save</button>
      </form>
    </div>
  );
};

export default connect(null, { addProduct })(AddProduct);
