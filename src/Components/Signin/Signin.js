import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./Signin.css";
import { AuthContext } from "../../Context/AuthContext";
const Signin = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const [username, setUsername] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const emailChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const passChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const { authenticated, dispatch, showingModal } = useContext(
    AuthContext
  );
  const signinHandler = () => {
    if (
      username === "admin@gmail.com" &&
      password === "123456"
    ) {
      dispatch({ type: "login", payload: username });
      showingModal();
      props.history.replace("/");
    } else {
      alert("Username or Password is wrong!");
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <input
          type="email"
          placeholder="Email"
          onChange={emailChange}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={passChange}
        />
        <input
          type="submit"
          value="Signin"
          onClick={signinHandler}
        />
      </form>
    </div>
  );
};
export default withRouter(Signin);
