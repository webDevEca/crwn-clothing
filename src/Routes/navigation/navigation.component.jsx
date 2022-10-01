import React from "react";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation_style.scss";

function NavigationBar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
