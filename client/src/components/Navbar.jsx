import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import TableComponent from './TableComponent';
import Card from './Card';
import NotificationsSignInPageError from './NotificationsSignInPageError';
import User from './User';
import RecipeReviewCard from './RecipeReviewCard';
import MockDataProducts from './MockDataProducts';
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#fc036f', padding: '10px', textAlign: 'center' ,width:'100'}}>
      <Link
        to="/"
        style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}
      >
        Home
      </Link>
      <Link
        to="/mockDataProducts"
        style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}
      >
        Products
      </Link>
      <Link
        to="/tableComponent"
        style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}
      >
        Customers
      </Link>
      <Link
        to="/card"
        style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}
      >
        Orders
      </Link>
      <Link
        to="/notificationsSignInPageError"
        style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}
      >
        Sign In
      </Link>
      <Link
        to="/user"
        style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}
      >
        Profile
      </Link>
      <Link
        to="/recipeReviewCard"
        style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}
      >
        Recipes
      </Link>
    </nav>
  );
};

export default Navbar;