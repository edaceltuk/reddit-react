import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import List from "./pages/List/List";
import AddLlink from "./pages/AddLink/AddLink";
import Header from "./components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/add-link">
            <AddLlink />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
