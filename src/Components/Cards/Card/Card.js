import React from "react";
import "./Card.css";
const Card = (props) => {
  let auth = false;
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    auth = true;
  }
  return (
    <>
      <div className="card">
        <img src={props.src} alt="Pizza-I1" />
        <h3>{props.name}</h3>
        <h3 className="price">$ {props.price} </h3>
        {auth && <button className="cart-btn">More...</button>}
      </div>
    </>
  );
};
export default Card;
