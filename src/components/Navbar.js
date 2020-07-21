import React from "react"
import {NavLink} from "react-router-dom"

export const Navbar = () =>
    (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <NavLink className="navbar-brand text-light" to={"/"}>Todos</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to={"/"}
                            exact
                            >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
