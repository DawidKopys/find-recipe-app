import React, { useState, useEffect, useRef } from 'react';
import Logo from 'Assets/logo-reciply-purple-uppercase.svg';
import BurgerMenu from 'Assets/icon-burger-menu-grey.svg';
import './Navbar.css';
import { useOnClickOutside } from 'CustomHooks/useOnClickOutside';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const sidebarRef = useRef();
  useOnClickOutside(sidebarRef, () => setIsSidebarOpen(false));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  return (
    <nav
      className={`navbar${
        isSidebarOpen ? ' navbar--with-overlay' : ''
      } recipe-finder-app__navbar`}
    >
      <img src={Logo} alt='Reciply Logo' className='navbar__logo-img' />
      <button
        className='navbar__btn-open-sidebar btn'
        onClick={() => setIsSidebarOpen(true)}
      >
        <img src={BurgerMenu} alt='Show Menu' />
      </button>
      <ul
        className={`navbar__links-list${
          isSidebarOpen ? ' navbar__links-list--open' : ''
        }`}
        ref={sidebarRef}
      >
        <li className='navbar__list-item'>
          <button
            className='navbar__btn-close-sidebar btn'
            onClick={() => setIsSidebarOpen(false)}
          />
        </li>
        <li className='navbar__list-item'>
          <Link to='/add-recipe' className='navbar__link'>
            Add Recipe
          </Link>
        </li>
        <li className='navbar__list-item'>
          <Link to='/' className='navbar__link'>
            Find Recipe
          </Link>
        </li>
        <li className='navbar__list-item navbar__list-item--sign-in'>
          <Link to='/' className='navbar__link navbar__link--sign-in'>
            Sign In
          </Link>
        </li>
        <li className='navbar__list-item navbar__list-item--sign-up'>
          <Link to='/' className='navbar__link navbar__link--sign-up'>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
