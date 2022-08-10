import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/header";
import Login from "../components/Login/login";
import Menu from "../components/Menu/menu";
import Responsables from "../components/Responsables/responsables";
import Equipos from "../components/Equipos/equipos";
import Reportes from "../components/Reportes/reportes";


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
        <Route exact path="/responsables">
          <Responsables/>
        </Route>
        <Route exact path="/equipos">
          <Equipos/>
        </Route>
        <Route exact path="/reportes">
          <Reportes/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
