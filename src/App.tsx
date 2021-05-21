import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import MainPage from "./Pages/MainPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CartPage from "./Pages/Cart";

const App = () => {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/cart">
          <div className="App">
            <CartPage />
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <MainPage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
