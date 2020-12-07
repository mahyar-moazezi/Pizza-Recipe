import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import FilterBar from "./Components/FilterBar/FilterBar";
import Cards from "./Components/Cards/Cards";
import PizzaTypeProvider from "./Context/PizzaType";
import Modal from "./Container/Modal/Modal";
import ErrorHandler from "./Components/Error/ErrorHandler";
const App = (props) => {
  return (
    <BrowserRouter>
      <PizzaTypeProvider>
        <div className="App">
          <Modal />
          <Navbar />
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <FilterBar />
                  <Cards />
                </div>
              )}
            />
            <Route component={ErrorHandler} />
          </Switch>
        </div>
      </PizzaTypeProvider>
    </BrowserRouter>
  );
};
export default App;
