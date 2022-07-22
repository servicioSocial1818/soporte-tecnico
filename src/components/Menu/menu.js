import React, { useEffect } from "react";
import "./menu.css";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../Context/context";
import GroupIcon from "@material-ui/icons/Group";
import ComputerIcon from "@material-ui/icons/Computer";
import ReportIcon from "@material-ui/icons/Report";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Menu = () => {
  let history = useHistory();

  const { setPath } = useAppContext();

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div className="containerData">
      <h2 className="generalTitle">Menu</h2>
      <div className="box">
        <div
          className="boxes boxes1"
          onClick={() => history.push("/my-account")}
        >
          <div className="boxesTitle">
            <AccountCircleIcon fontSize="large" />
          </div>
          <div className="boxesSub">
            <span>Mi Cuenta</span>
          </div>
        </div>
        <div className="boxes">
          <div className="boxesTitle">
            <GroupIcon fontSize="large" />
          </div>
          <div className="boxesSub">
            <span>Usuarios</span>
          </div>
        </div>
        <div className="boxes boxes3">
          <div className="boxesTitle">
            <ComputerIcon fontSize="large" />
          </div>
          <div className="boxesSub">
            <span>Equipos</span>
          </div>
        </div>
        <div className="boxes">
          <div className="boxesTitle">
            <ReportIcon fontSize="large" />
          </div>
          <div className="boxesSub">
            <span>Reportes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
