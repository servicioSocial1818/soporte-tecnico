import React from "react";
import "./userData.css";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailIcon from "@material-ui/icons/Mail";
import CakeIcon from "@material-ui/icons/Cake";

const UserData = () => {
  let history = useHistory();
  return (
    <div className="containerData">
      <h2 className="generalTitle">Datos de usuario</h2>
      <div className="box">
        <div className="boxes boxes1">
          <div className="boxesTitle">
            <PersonIcon />
          </div>
          <div className="boxesSub">
            <span>Alejandro Degollado Flores</span>
          </div>
        </div>
        <div className="boxes">
          <div className="boxesTitle">
            <PhoneIphoneIcon />
          </div>
          <div className="boxesSub">
            <span>55-69-85-45-85</span>
          </div>
        </div>
        <div className="boxes boxes3">
          <div className="boxesTitle">
            <MailIcon />
          </div>
          <div className="boxesSub">
            <span>alumbradopublico@gmail.com</span>
          </div>
        </div>
        <div className="boxes">
          <div className="boxesTitle">
            <CakeIcon />
          </div>
          <div className="boxesSub">
            <span>24/07/1997</span>
          </div>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/menu")}
        >
          Atras
        </Button>
      </div>
    </div>
  );
};

export default UserData;
