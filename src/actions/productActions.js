import { GET_PRODUCTS, ADD_PRODUCT, GET_ORDERS } from './types';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/orders');
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_ORDERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
