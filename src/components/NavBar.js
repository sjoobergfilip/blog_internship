import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-green-700">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="nav-link-active"
                        className="home-name inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-5 text-3xl font-bold cursive tracking-widest"
                    >
                        MCL internship
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="nav-link-active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-50"
                    >
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
