import NavBar from "./components/NavBar/NavBar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CardContainer from "./components/CardContainer/CardContainer";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="d-flex justify-content-center align-items-center">
          <Switch>
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/" component={CardContainer} exact />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
