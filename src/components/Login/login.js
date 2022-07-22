import React, { useEffect } from "react";
import FormLogin from "./formLogin";
import "./css/login.css";
import { useAppContext } from "../Context/context";

const Login = () => {
  const { setPath } = useAppContext();

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div>
      <div className="backgroundContainer">
        <div className="loginContainer">
          <div className="halfLeft">
            <img src="images/bgLogin2.jpg" className="imageLogin" />
          </div>
          <div className="halfRight">
            <div>
              <h3 className="loginTitle">Inicio de Sesión</h3>
            </div>
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
