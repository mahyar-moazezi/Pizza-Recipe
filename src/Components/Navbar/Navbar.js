import React, { useContext, useState } from "react";
import "./Navbar.css";
import { withRouter, Link } from "react-router-dom";
import PizzaIcon from "../../Assets/icon.png";
import { AuthContext } from "../../Context/AuthContext";
const Navbar = (props) => {
  const { showingModal, dispatch } = useContext(AuthContext);
  const showingHandler = () => {
    showingModal();
  };
  const signoutHandler = () => {
    dispatch({ type: "logout" });
    props.history.replace("/");
  };
  const [styles, setStyles] = useState("hidden");
  const burgerMenuHandler = () => {
    setStyles("visible");
  };
  let auth = false;
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    auth = true;
  }
  const closeHandler = () => {
    setStyles("hidden");
  };
  return (
    <React.Fragment>
      <nav className="navbar">
        <Link to="/">
          <img
            src={PizzaIcon}
            alt="PizzaIcon"
            className="pizza-icon"
          />
        </Link>
        <div className="menu-container">
          <ul
            className="navbar-menu"
            style={{ visibility: `${styles}` }}
          >
            <li className="closeIcon" onClick={closeHandler}>
              <span> &#215;</span>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/cuisines">Cuisines</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="btn-controler">
          {auth ? (
            <button className="signout" onClick={signoutHandler}>
              Sign out
            </button>
          ) : (
            <button className="signin" onClick={showingHandler}>
              Sign in
            </button>
          )}
        </div>
        <button
          className="burgermenu"
          onClick={burgerMenuHandler}
        >
          <span>&#9776;</span>
        </button>
      </nav>
    </React.Fragment>
  );
};
export default withRouter(Navbar);
