import * as React from "react";
import "./isNotAdmin.css";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../Context/context";
import { useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GroupIcon from "@material-ui/icons/Group";

const IsNotAdmin = () => {
  let history = useHistory();

  const { setPath } = useAppContext();

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <>
      <div className="containerData">
        <h1 className="generalTitle">Menu</h1>
        <div className="boxUser">
          <div
            className="boxes boxes1"
            onClick={() => history.push("/dispositivos")}
          >
            <div className="boxesTitle">
              <AccountCircleIcon fontSize="large" />
            </div>
            <div className="boxesSub">
              <span>Dispositivos</span>
            </div>
          </div>
          <div className="boxes" onClick={() => history.push("/generarReportes")}>
            <div className="boxesTitle">
              <GroupIcon fontSize="large" />
            </div>
            <div className="boxesSub">
              <span>Reportes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsNotAdmin;
