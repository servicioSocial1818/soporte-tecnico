import React, { useContext, useEffect } from "react";
import "./css/formLogin.css";
import { Form, Input } from "informed";
import Button from "@material-ui/core/Button";
import CustomInput from "../CustomComponents/customInput";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../Context/context";
import authContext from "../Context/auth/authContext";

const FormLogin = () => {
  let history = useHistory();

  const AuthContext = useContext(authContext);
  const { autenticado, iniciarSesion, usuarioAutenticado, usuario } =
    AuthContext;
  const { createNotification, setIsLogged, setUser, setIsNotAdmin, user } =
    useAppContext();

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  useEffect(() => {
    if (autenticado) {
      history.push("/layout");

      // if (usuario.rol === 2) {
      //   setIsNotAdmin(false);
      //   setIsLogged(true);
      //   setUser(usuario);
      //   history.push("/layout");
      // } else if (usuario.rol === 1) {
      //   setIsNotAdmin(true);
      //   setIsLogged(true);
      //   setUser(usuario);
      //   history.push("/layout");
      // } else {
      //   createNotification(
      //     "error",
      //     "Datos Incorrectos",
      //     "Usuario o contraseña incorrectos."
      //   );
      // }
    }
  }, [autenticado]);

  const handleSubmit = ({ values }) => {
    
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
