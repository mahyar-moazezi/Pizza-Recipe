import React, { useState, useReducer } from "react";
export const AuthContext = React.createContext();
const authpatch = (state, action) => {
  switch (action.type) {
    case "login": {
      const userInfo = {
        username: action.payload,
        authenticated: true,
      };
      localStorage.setItem("user", JSON.stringify(userInfo));
      return { athenticated: true };
    }
    case "logout": {
      localStorage.removeItem("user");
      break;
    }

    default:
      return state;
  }
};
const AuthContextProvider = (props) => {
  const [showModal, setModalShow] = useState(false);
  const showingModal = () => {
    setModalShow(!showModal);
  };
  const [authenticated, dispatch] = useReducer(authpatch, false);
  return (
    <AuthContext.Provider
      value={{
        showModal,
        showingModal,
        authenticated,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
