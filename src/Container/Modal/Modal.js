import React, { useContext } from "react";
import "./Modal.css";
import { AuthContext } from "../../Context/AuthContext";
import Backdrop from "../Backdrop/Backdrop";
import Signin from "../../Components/Signin/Signin";
const Modal = (props) => {
  const { showModal } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Backdrop />
      {showModal ? (
        <div className="modal">
          <Signin />
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default Modal;
