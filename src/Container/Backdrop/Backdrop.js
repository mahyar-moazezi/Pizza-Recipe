import React, { useContext } from "react";
import "./Backdrop.css";
import { AuthContext } from "../../Context/AuthContext";
const Backdrop = (props) => {
  const { showModal, showingModal } = useContext(AuthContext);
  const closeHandler = () => {
    showingModal();
  };
  return (
    <React.Fragment>
      {showModal ? (
        <div className="backdrop" onClick={closeHandler}>
          {props.children}
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default Backdrop;
