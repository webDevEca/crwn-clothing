import React from "react";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/user.contexts";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation_style.scss";

function NavigationBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="nav_bar">
        <Link className="logo_container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav_links_container">
          <Link className="nav_link" to="/shop">
            <p>SHOP</p>
          </Link>
          {currentUser ? (
            <span className="nav_link" onClick={signOutUser}>
              {""}
              SIGN OUT{""}
            </span>
          ) : (
            <Link className="nav_link" to="/auth">
              <p>SIGN IN</p>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
