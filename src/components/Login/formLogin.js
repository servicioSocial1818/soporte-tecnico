import React, { useContext } from "react";
import "./css/formLogin.css";
import { Form, Input } from "informed";
import Button from "@material-ui/core/Button";
import CustomInput from "../CustomComponents/customInput";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../Context/context";
import { useEffect } from "react";
import authContext from "../Context/auth/authContext";

const FormLogin = () => {
  let history = useHistory();

  const AuthContext = useContext(authContext);
  const { autenticado, iniciarSesion } = AuthContext;
  const { createNotification, setIsLogged, setUser, setIsNotAdmin } = useAppContext();

  useEffect(() => {
    //setUser(null);
    if (autenticado) {
      
    }
  }, [autenticado]);
  const handleSubmit = ({ values }) => {
    console.log(values);
    // if (user === "Alex" && password === "123456") {
    //   setIsNotAdmin(false);
    //   setIsLogged(true);
    //   setUser(values.user);
    //   history.push("/layout");
    // } else if(user === "user" && password === "pass" ) {
    //   setIsNotAdmin(true);
    //   setIsLogged(true);
    //   setUser(values.user);
    //   history.push("/layout");
    // }
    // else {
    //   createNotification(
    //     "error",
    //     "Datos Incorrectos",
    //     "Usuario o contraseña incorrectos."
    //   );
    // }
    iniciarSesion(values);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="formContainer">
        <div className="inputs">
          <div className="inputUser">
            <CustomInput
              field="username"
              id="standard-basic"
              label="Usuario"
              required
            />
          </div>
          <div className="inputPass">
            <CustomInput
              field="password"
              id="standard-basic"
              label="Contraseña"
              type="password"
              required
            />
          </div>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
