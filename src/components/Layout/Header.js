/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const openHamb = () => {
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    // open navbar
    navLinks.classList.toggle("open");
    // for make the show of links is good
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  };

  useEffect(() => {
    // for sublinks in mobile phones
    const mainLinks = document.querySelectorAll(".main-link");
    mainLinks.forEach((link) => {
      const beforeSubLinks = link.querySelector(".before-sub-links");
      const subLinks = beforeSubLinks.querySelector(".sub-links");
      const subLinksHeight = subLinks.clientHeight;

      // this function for open and close sub links
      // this function for check if the screen is phone or no to prevent errors
      // [type] param is for check if the coming is mouseenter || mouseleave
      const styling = (type) => {
        const media = window.matchMedia("(max-width: 768px)"); // the media
        if (media.matches) {
          if (type === "open") {
            beforeSubLinks.style.height = `${subLinksHeight}px`;
          } else {
            beforeSubLinks.style.height = 0;
          }
        }
      };

      link.addEventListener("mouseenter", () => {
        // call styling function for open the sub-links
        styling("open");
      });
      link.addEventListener("mouseleave", () => {
        // call styling function for close the sub-links
        styling("close");
      });
    });
  }, []);

  const classNameCheck = ({ isActive }) => (isActive ? "active_link" : "");
  return (
    <nav>
      <div onClick={openHamb} className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="logo">
        <li>
          <Link to="/">Squid Hotel</Link>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <NavLink className={classNameCheck} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={classNameCheck} to="/rooms">
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink className={classNameCheck} to="/store">
            Store
          </NavLink>
        </li>
        <li className="main-link">
          <a>Monster</a>
          <div className="before-sub-links">
            <ul className="sub-links">
              <li>
                <NavLink className={classNameCheck} to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink className={classNameCheck} to="/room">
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink className={classNameCheck} to="/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <HeaderComponent />,
        document.getElementById("root-header")
      )}
    </Fragment>
  );
};

export default Header;
