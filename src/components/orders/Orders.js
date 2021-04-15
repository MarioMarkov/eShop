import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/productActions';

const Orders = ({ order: { orders }, getOrders }) => {
  useEffect(() => {
    getOrders();
  }, []);

  if (orders === null && orders.items !== null) {
    <h4>Loading...</h4>;
  }

  return (
    <div className='container'>
      <span className='new-product'>My Orders</span>
      {orders.map((order) => (
        <div key={order.id} className='orders'>
          <span className='order-id'>Order #{order.id}</span>
          <div className='order-items'>
            <ul>
              <li>-{order.items[0].name}</li>
              <li>-{order.items[1].name}</li>
            </ul>
          </div>
          <span className='order-price'>
            {order.price} {order.currency}
          </span>
          <span className='order-payment'>{order.status}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.product,
});

export default connect(mapStateToProps, { getOrders })(Orders);
