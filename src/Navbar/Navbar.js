import React from 'react';
import Logo from 'Assets/logo-reciply-purple-uppercase.svg';
import BurgerMenu from 'Assets/icon-burger-menu-grey.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar recipe-finder-app__navbar'>
      <img src={Logo} alt='Reciply Logo' className='navbar__logo-img' />
      <button className='navbar--burger-menu'>
        <img src={BurgerMenu} alt='Show Menu' />
      </button>
      <ul className='navbar__links-list'>
        <li className='navbar__list-item'>
          <a href='' className='navbar__link'>
            Add Recipe
          </a>
        </li>
        <li className='navbar__list-item'>
          <a href='' className='navbar__link'>
            Find Recipe
          </a>
        </li>
        <li className='navbar__list-item'>
          <a href='' className='navbar__link navbar__link--sign-in'>
            Sign In
          </a>
        </li>
        <li className='navbar__list-item'>
          <a href='' className='navbar__link navbar__link--sign-up'>
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
