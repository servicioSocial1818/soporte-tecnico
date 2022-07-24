import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/header";
import Login from "../components/Login/login";
import Menu from "../components/Menu/menu";


const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/my-account">
          
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
