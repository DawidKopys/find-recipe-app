import React, { useState, useEffect, useRef } from 'react';
import BurgerMenu from 'Assets/icon-burger-menu-grey.svg';
import './Navbar.css';
import { useOnClickOutside } from 'CustomHooks/useOnClickOutside';
import { Link, NavLink } from 'react-router-dom';

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
      <span className='reciply-logo'>
        <span className='reciply-logo__first-letter'>R</span>eciply
      </span>
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
          <NavLink
            to='/add-recipe'
            exact
            activeClassName='navbar__link--active'
            className='navbar__link'
          >
            Add Recipe
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink
            to='/'
            exact
            activeClassName='navbar__link--active'
            className='navbar__link'
          >
            Find Recipe
          </NavLink>
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
