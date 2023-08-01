import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from "react";

import './header.scss';

import logo from '../../img/logo.svg';
import CustomBurgerIcon from './customBurgerIcon';

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    document.querySelector(".header").classList.add("header_fixed");
  } else {
    document.querySelector(".header").classList.remove("header_fixed");
  }
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (isOpen && !event.target.closest(".bm-menu-wrap")) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleMenuStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Закрыть меню при клике на ссылку
  };

  return (
    <header className="header">
      <div className="header__mobile-container">
        <div className="header__mobile-menu">

        </div>
      </div>

      <div className="header__mobile">
        <NavLink to="/" className="header__mobile-logo">
          <img src={logo} alt="" />
        </NavLink>
        <Menu
          customBurgerIcon={<CustomBurgerIcon />}
          right
          isOpen={isOpen} // Передаем состояние меню
          onStateChange={handleMenuStateChange}
        >
          {/* <button className="header__mob-close">X</button> */}
          <NavLink to='/' onClick={handleLinkClick}>Home</NavLink>
          <NavLink to='/about' onClick={handleLinkClick}>About us</NavLink>
          <NavLink to='/teacher' onClick={handleLinkClick}>Teachers</NavLink>
          <NavLink to='/course' onClick={handleLinkClick}>Courses</NavLink>
          <NavLink to='/plans' onClick={handleLinkClick}>Plans</NavLink>
          <NavLink to='/contact' onClick={handleLinkClick}>Contacts</NavLink>
        </Menu>
        {/* </button> */}
      </div>

      <nav className="header__nav">
        <NavLink to='/' className="header__link">Home</NavLink>
        <NavLink to='/about' className="header__link">About us</NavLink>
        <NavLink to='/teacher' className="header__link">Teachers</NavLink>
        <NavLink to='/course' className="header__link">Courses</NavLink>
        <NavLink to='/plans' className="header__link">Plans</NavLink>
        <NavLink to='/contact' className="header__link">Contacts</NavLink>
      </nav>


    </header>
  );
}

export default Header;