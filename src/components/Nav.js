import React from "react";
import { NavLink } from "react-router-dom";

function NavPill(props) {
  return (
    <NavLink
      exact
      to={props.to}
      className="flex-1 px-8 pt-2 pb-safeBottom flex flex-col bg-white border-gray-200 border-t text-sm leading-8 text-gray-400 text-center hover:bg-gray-100 transition-all ease-in-out duration-200 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-800"
      activeClassName="text-primary"
    >
      {props.children}
    </NavLink>
  );
}

function Nav() {
  return (
    <nav className="sticky z-50 bottom-0 flex justify-center self-end w-full">
      <NavPill to="/">
        <i className="ri-home-line text-base"></i>Hem
      </NavPill>
      <div
        style={{ width: "120px" }}
        className="relative bg-menu-bg dark:bg-menu-dark bg-no-repeat bg-center-top bg-cover"
      >
        <NavLink
          exact
          to="/boka"
          className="flex-1 flex justify-center items-center mx-auto -mt-10 bg-gradient-to-tr from-secondary to-primary w-20 h-20 rounded-full text-base text-white shadow-md transition-all ease-in-out duration-200 transform hover:scale-105"
          activeClassName="text-primary"
        >
          <i className="ri-add-line text-title1 leading-none"></i>
        </NavLink>
      </div>
      <NavPill to="/profil">
        <i className="ri-user-line text-base"></i>Profil
      </NavPill>
    </nav>
  );
}

export default Nav;
