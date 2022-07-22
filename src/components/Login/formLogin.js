import React from "react";
import "./css/formLogin.css";
import { Form, Input } from "informed";
import Button from "@material-ui/core/Button";
import CustomInput from "../CustomComponents/customInput";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../Context/context";

const FormLogin = () => {
  let history = useHistory();

  const { createNotification, setIsLogged, setUser } = useAppContext();

  const handleSubmit = ({ values }) => {
    const { user, password } = values;
    if (user === "Alex" && password === "123456") {
      setIsLogged(true);
      setUser(user);
      history.push("/menu");
    } else {
      createNotification(
        "error",
        "Datos Incorrectos",
        "Usuario o contraseña incorrectos."
      );
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="formContainer">
        <div className="inputs">
          <div className="inputUser">
            <CustomInput
              field="user"
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
