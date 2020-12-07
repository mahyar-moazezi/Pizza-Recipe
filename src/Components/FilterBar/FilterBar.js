/* eslint-disable no-cond-assign */
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import "./FilterBar.css";
import { PizzaType } from "../../Context/PizzaType";
const FilterBar = () => {
  const {
    changeType,
    italian,
    american,
    searchSetBar,
    type,
    sortAscPrice,
    sortDecPrice,
  } = useContext(PizzaType);
  useEffect(() => {
    if (type) {
      setArraryHolder(american); // access to american pizza names
    } else {
      setArraryHolder(italian); //access to italian pizza names
    }
  }, [type]);
  const typeHandler = (value) => {
    if ((value = "American")) {
      changeType();
    }
  };
  const [searchBarValue, setSearchBarValue] = useState("");
  const [arrayHolder, setArraryHolder] = useState([]); // state holder for searchBar
  const searchingHandler = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const items = item.name.toUpperCase();
      const valueItems = event.target.value.toUpperCase();
      return items.indexOf(valueItems) > -1;
    });
    searchSetBar(itemData);
    setSearchBarValue(event.target.value);
    console.log("italian man " + italian);
  };
  const cleanSearchBar = () => {
    setSearchBarValue("");
  };
  const [targetValue, setTargetValue] = useState("random");
  const priceHandler = (event) => {
    let cool = event.target.value;
    setTargetValue(cool);
    switch (cool) {
      case "hp":
        sortDecPrice();
        break;
      case "lp":
        sortAscPrice();
        break;
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <section className="filterbar">
        <div className="type">
          <select name="type" id="type" onChange={typeHandler}>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
          </select>
        </div>
        <div className="sort">
          <label for="sort">Sort by : </label>
          <select
            name="sort"
            id="sort"
            onChange={priceHandler}
            value={targetValue}
          >
            <option value="random" selected>
              ...
            </option>
            <option value="hp">Highest Price</option>
            <option value="lp">Lowest Price</option>
          </select>
        </div>
        <input
          type="search"
          placeholder={`Search ${
            type ? "American" : "Italian"
          } Pizza`}
          value={searchBarValue}
          onChange={searchingHandler}
          onBlur={cleanSearchBar}
        />
      </section>
    </React.Fragment>
  );
};
export default React.memo(FilterBar);
