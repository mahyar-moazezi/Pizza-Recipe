import React, { useContext } from "react";
import "./Cards.css";
import Card from "./Card/Card";
import { PizzaType } from "../../Context/PizzaType";
const Cards = () => {
  const { italian, american, type } = useContext(PizzaType); //Pizza States
  return (
    <React.Fragment>
      <section className="cards">
        {type
          ? american.map((cd) => (
              <Card
                key={cd.id}
                src={cd.src}
                name={cd.name}
                price={cd.price}
              />
            ))
          : italian.map((cd) => (
              <Card
                key={cd.id}
                src={cd.src}
                name={cd.name}
                price={cd.price}
              />
            ))}
      </section>
    </React.Fragment>
  );
};
export default Cards;
