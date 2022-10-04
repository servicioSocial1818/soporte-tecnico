import React, { useEffect, useState } from "react";
import Error from "../Error/error";
import { Button } from "@material-ui/core";
import { createUserRequest } from "../../api/users.api";
import { CircularProgress } from "@mui/material";

const Formulario = ({}) => {
  const [user, setUser] = useState({
    paternal_surname: "",
    maternal_surname: "",
    first_name: "",
    date_birth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
    rol: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(user), //convierte el objeto en string
      headers: { "Content-Type": "application/json" }, //con esto sabe que es un json
    });
    const data = await res.json(); // obtener los datos por respuesta
    console.log(data);
    //validacion del formulario alch
    if (
      [
        user.username,
        user.password,
        user.paternal_surname,
        user.maternal_surname,
      ].includes("")
    ) {
      console.log("Hay al menos un campo vacío");
      setError(true);
      return;
    }

    setError(false);
    setLoading(false);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="row">
          <div className="ap">
            <label>Apellido Paterno</label>
            <input
              id="apellidoP"
              placeholder="Apellido Paterno"
              type="text"
              name="paternal_surname"
              onChange={handleChange}
            />
          </div>
          <div className="apm">
            <label>Apellido Materno</label>
            <input
              id="apellidoM"
              placeholder="Apellido Materno"
              type="text"
              name="maternal_surname"
              onChange={handleChange}
            />
          </div>
          <div className="nombre">
            <label>Nombre</label>
            <input
              id="nombre"
              placeholder="Nombre"
              type="text"
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div className="fechaNacimiento">
            <label>Fecha de Nacimiento</label>
            <input
              id="fechaNacimiento"
              type="date"
              name="date_birth"
              onChange={handleChange}
            />
          </div>
          <div className="genero">
            <label htmlFor="genero">Género</label>
            <select id="genero" name="gender" onChange={handleChange}>
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
            </select>
          </div>
          <div className="telefono">
            <label>Télefono</label>
            <input
              id="telefono"
              type="text"
              placeholder="Telefono"
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
          <div className="correo">
            <label>Correo</label>
            <input
              id="correo"
              type="email"
              placeholder="Correo"
              name="email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="usuario">
            <label>Usuario</label>
            <input
              id="usuario"
              type="text"
              placeholder="Usuario"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="contra">
            <label>Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="colum">
          <div className="usuario">
            <label htmlFor="rol">Rol de Usuario</label>
            <select id="rol" name="rol" onChange={handleChange}>
              <option value="2">Cliente</option>
              <option value="1">Administrador</option>
            </select>
          </div>
        </div>
        <div className="ubica">
          <label>Ubicación</label>
          <textarea id="ubicacion" name="location" onChange={handleChange} />
        </div>
        <div className="botones">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!user.username || !user.password}
          >
            {loading ? <CircularProgress color="inherit" size={24} /> : "Crear"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
