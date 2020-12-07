import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../../Assets/1.jpg";
export default function ErrorHandler() {
  return (
    <div>
      <img
        style={{ width: "320px" }}
        src={ErrorImage}
        alt="404Image"
      />
      <h1>You Are Lost My Friend</h1>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "1.3rem",
          color: "black",
        }}
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
