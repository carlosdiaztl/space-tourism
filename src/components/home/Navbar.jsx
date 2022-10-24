import React from "react";
import { Link, NavLink } from "react-router-dom";
import logonav from "../../imgs/shared/logo.svg";
import Home from "./Home";

const Navbar = () => {
  return (
   
    <nav className="nav">
      <figure>
        {" "}
        <img src={logonav} />{" "}
      </figure>
      <section>
        <ul>
          <li>
            <NavLink to={'crew'}>Home

            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
    
  );
};

export default Navbar;
