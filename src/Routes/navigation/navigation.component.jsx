import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation_style.scss"
import {ReactComponent as Logo} from "../../assets/Logo.svg";

function NavigationBar() {
    return (
        <Fragment>
            <div className="nav_bar">
                <Link className="logo_container" to="/">
                    <Logo className="logo"/>
                </Link>
              <div className="nav_links_container">

                <Link className="nav_link" to="/#">
                  <p>HOME</p>
                </Link>

                <Link className="nav_link" to="/shop">
                  <p>SHOP</p>
                </Link>

                <Link className="nav_link" to="/#">
                  <p>ABOUT</p>
                </Link>

                <Link className="nav_link" to="/#">
                  <p>SUPPORT</p>
                </Link>

                <Link className="nav_link" to="/sign-in">
                  <p>SIGN IN</p>
                </Link>
              </div>
            </div>
            <Outlet/>
        </Fragment>
        
    );
};

export default NavigationBar