import { ADD_PRODUCT, GET_PRODUCTS } from '../actions/types';

const inititalState = {
  products: [],
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    default:
      return state;
  }
};
