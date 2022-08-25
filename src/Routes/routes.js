import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/header";
import Login from "../components/Login/login";
import Layout from "../components/Menu/layout";
import Responsables from "../components/Responsables/responsables";
import Equipos from "../components/Equipos/equipos";
import Reportes from "../components/Reportes/reportes";
import Inventario from "../components/Inventario/inventario";
import Dispositivos from "../components/Dispositivos/dispositivos";
import GenerarReportes from "../components/ReportesCliente/generarReportes";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/layout">
          <Layout/>
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
        <Route exact path="/inventario">
          <Inventario/>
        </Route>
        <Route exact path="/dispositivos">
          <Dispositivos/>
        </Route>
        <Route exact path="/generarReportes">
          <GenerarReportes/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
