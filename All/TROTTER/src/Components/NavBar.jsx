import React, { useState } from "react";

import Classes from "../Styles/NavBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>

      <nav className={Classes.Navbar}>
        <div class="form-check form-switch form-check-reverse">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse"/>
         <label class="form-check-label" for="flexSwitchCheckReverse">Enable Dark-Mode</label>
    </div>
        <div className={Classes.brand}>
          <h1 className={Classes.NavLogo}>
            Global<span>@Trotter</span>
          </h1>

          <div className={Classes.hamburger}>
            {toggle ? (
              <FontAwesomeIcon
                icon={faClose}
                className={Classes.menuIcon}
                onClick={() => setToggle(true)}
              />
            ) : (
              <FontAwesomeIcon
                className={Classes.menuIcon}
                icon={faBars}
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>

        <ul className={toggle ? Classes.open : ""}>
          <li>
            <a href="#hero" className={Classes.active}>
              home
            </a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#recommendation">places</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default NavBar;
