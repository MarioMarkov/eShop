import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h1 style={{ margin: '0' }} className='logo'>
          <i class='fas fa fa-shopping-cart '></i>
          eShop.com
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Products</Link>{' '}
            </li>
            <li>
              <Link to='/orders'>My Orders</Link>{' '}
            </li>
            <li>
              <Link to='/addProduct'>Add product</Link>{' '}
            </li>
            <li>
              <div id='cart' class='d-none'></div>
              <a
                href='/store/cart.stml'
                class='cart position-relative d-inline-flex'
                aria-label='View your shopping cart'
              >
                <i class='fas fa fa-shopping-cart fa-lg'></i>
                <span class='counter cart-basket d-flex align-items-center justify-content-center'>
                  0
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
