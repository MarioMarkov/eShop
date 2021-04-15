import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h1 className='logo'>eShop.com</h1>
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
          </ul>
        </nav>
      </div>
    </div>
  );
};
