import React, { useState } from "react";
import classes from "../styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextPorvider";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const { currentUserState, logout } = useAuth();

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
        {currentUserState ? (
          <>
            <div className="flex flex-col-reverse items-center">
              <li className={`${classes.nav__item} text-red-400 text-sm`}>
                {currentUserState?.displayName}
              </li>
              <li className={`${classes.nav__item} `}>
                <img
                  src={currentUserState?.photoURL}
                  className="w-8, h-8 rounded-full"
                  alt="pic"
                />
              </li>
            </div>

            <li
              style={{ fontSize: "1.1em" }}
              className={`btn btn--red ${classes.nav__link}`}
              onClick={logout}
            >
              Logout
            </li>
          </>
        ) : (
          <li className={classes.nav__item}>
            <Link
              to="/signin"
              style={{ fontSize: "1.1em" }}
              className={`btn btn--red ${classes.nav__link}`}
            >
              SignIn
            </Link>
          </li>
        )}
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
