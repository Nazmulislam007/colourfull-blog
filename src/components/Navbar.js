import React, { useState } from "react";
import classes from "../styles/Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className={classes.navbar}>
      <a href="/" className={classes.navbar__brand}>
        Colour Full
      </a>
      <ul className={`${classes.navbar__nav} ${toggle && classes.active}`}>
        <li className={classes.nav__item}>
          <a href="/" className={classes.nav__link}>
            Home
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="/" className={classes.nav__link}>
            About
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="/" className={classes.nav__link}>
            Blog
          </a>
        </li>
        <li className={classes.nav__item}>
          <a href="/" className={classes.nav__link}>
            Contact
          </a>
        </li>
        <li className={`${classes.nav__item} search`}>
          <FaSearch color="white" />
        </li>
      </ul>
      <GiHamburgerMenu
        fontSize="26px"
        className={classes.hamburger}
        cursor="pointer"
        onClick={toggleHandle}
      />
    </div>
  );
};

export default Navbar;
