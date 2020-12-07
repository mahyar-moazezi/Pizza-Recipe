import React, { useState } from "react";
import FirstItl from "../Assets/Italian1.jpg";
import SecItl from "../Assets/Italian2.jpg";
import ThirdItl from "../Assets/Italian3.jpg";
import FirstAmr from "../Assets/american1.jpg";
import SecAmr from "../Assets/american2.jpg";
import ThirdAmr from "../Assets/american3.jpg";
import ForAmr from "../Assets/american4.jpg";
export const PizzaType = React.createContext();
const PizzaTypeProvider = (props) => {
  const [type, setType] = useState(false);
  const changeType = () => {
    setType(!type);
  };
  const [italian, setItalian] = useState([
    {
      id: 1,
      name: "Pizza Neopolitana",
      src: FirstItl,
      price: "26",
    },
    {
      id: 2,
      name: "Pasta Fettuccine",
      src: SecItl,
      price: "39",
    },
    {
      id: 3,
      name: "Pizza The Big Dill",
      src: ThirdItl,
      price: "30",
    },
  ]);
  const [american, setAmerican] = useState([
    {
      id: 1,
      name: "Pizza Americano",
      src: FirstAmr,
      price: "53",
    },
    { id: 2, name: "Pizza Chicken", src: SecAmr, price: "44" },
    {
      id: 3,
      name: "Pizza Vegetables",
      src: ThirdAmr,
      price: "36",
    },
    { id: 4, name: "Pizza Meat", src: ForAmr, price: "49" },
  ]);
  const searchSetBar = (itemData) => {
    if (type) {
      setAmerican(itemData);
    } else {
      setItalian(itemData);
    }
  };
  const sortDecPrice = () => {
    const italianArray = [...italian];
    const itDes = italianArray.sort((a, b) => {
      return b.price - a.price;
    });
    setItalian(itDes);
    const americanArray = [...american];
    const amDes = americanArray.sort((a, b) => {
      return b.price - a.price;
    });
    setAmerican(amDes);
  };
  const sortAscPrice = () => {
    const italianArray = [...italian];
    const itAsc = italianArray.sort((a, b) => {
      return a.price - b.price;
    });
    setItalian(itAsc);
    const americanArray = [...american];
    const amAsc = americanArray.sort((a, b) => {
      return a.price - b.price;
    });
    setAmerican(amAsc);
  };

  return (
    <PizzaType.Provider
      value={{
        italian,
        american,
        type,
        changeType,
        searchSetBar,
        sortDecPrice,
        sortAscPrice,
      }}
    >
      {props.children}
    </PizzaType.Provider>
  );
};
export default PizzaTypeProvider;
