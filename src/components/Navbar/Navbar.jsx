import React from "react";
import { Link, NavLink } from "react-router-dom";
import logonav from "../../imgs/shared/logo.svg";
import "../Navbar/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <figure>
        {" "}
        <img src={logonav} alt={"yo"} />{" "}
      </figure>
      <br />
      <section>
        <ul>
          <li>
            <NavLink to={"/"}>00 Home</NavLink>
          </li>
          <li>
            <NavLink to={"Destination"}>01 Destinaton</NavLink>
          </li>
          <li>
            <NavLink to={"Crew"}>02 Crew</NavLink>
          </li>
          <li>
            <NavLink to={"Technology"}>03 Technology</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
