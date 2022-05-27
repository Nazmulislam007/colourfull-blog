import React, { useState } from "react";
import classes from "../styles/Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
      <Link to="/" className={classes.navbar__brand}>
        Colour Full
      </Link>
      <ul className={`${classes.navbar__nav} ${toggle && classes.active}`}>
        <li className={classes.nav__item}>
          <Link to="/" className={classes.nav__link}>
            Home
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to="/about" className={classes.nav__link}>
            About
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to="/blogs" className={classes.nav__link}>
            Blogs
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to="/contact" className={classes.nav__link}>
            Contact
          </Link>
        </li>
        <li className={`${classes.nav__item} search`}>
          <FaSearch color="white" />
        </li>
        {/* <li className={classes.nav__item}>

        </li> */}
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
