import React, { useEffect, useState } from "react";
import Error from "../Error/error";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../Context/context";

const Formulario = ({ setOpen, idExtract }) => {
  const { createNotification, setUsers, editing, setEditing } = useAppContext();

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
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  function handleClose() {
    setOpen(false);
    history.push("/responsables");
  }
  async function loadDatas() {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    setUsers(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      const response = await fetch(`http://localhost:4000/users/${idExtract}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      createNotification(
        "success",
        "Datos validados",
        "Usuario modificado con éxito"
      );
    } else {
      if (
        [
          user.paternal_surname,
          user.maternal_surname,
          user.first_name,
          user.date_birth,
          user.gender,
          user.phoneNumber,
          user.email,
          user.username,
          user.password,
          user.rol,
          user.location,
        ].includes("")
      ) {
        console.log("Hay al menos un campo vacío");
        setError(true);
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:4000/users", {
        method: "POST",
        body: JSON.stringify(user), //convierte el objeto en string
        headers: { "Content-Type": "application/json" }, //con esto sabe que es un json
      });

      createNotification(
        "success",
        "Datos validados",
        "Usuario registrado con éxito"
      );
      const data = await res.json(); // obtener los datos por respuesta

      console.log(data);

      // console.log("usuario agregado");
    }
    handleClose();
    loadDatas();
    //validacion del formulario
    setEditing(false);
  };

  const loadUser = async (id) => {
    const res = await fetch(`http://localhost:4000/users/${id}`);
    const data = await res.json();
    setUser({
      paternal_surname: data.paternal_surname,
      maternal_surname: data.maternal_surname,
      first_name: data.first_name,
      date_birth: data.date_birth,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      email: data.email,
      username: data.username,
      password: data.password,
      rol: data.rol,
      location: data.location,
    });
    console.log(setUser);
    setEditing(true);

  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    if (idExtract) {
      loadUser(idExtract);
    }
  }, [idExtract]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && (
          <Error>
            <p>Campos obligatorios vacíos</p>
          </Error>
        )}
        <div className="row">
          <div className="ap">
            <label>Apellido Paterno</label>
            <input
              id="apellidoP"
              placeholder="Apellido Paterno"
              type="text"
              value={user.paternal_surname}
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
              value={user.maternal_surname}
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
              value={user.first_name}
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div className="fechaNacimiento">
            <label>Fecha de Nacimiento</label>
            <input
              id="fechaNacimiento"
              type="date"
              value={user.date_birth}
              name="date_birth"
              onChange={handleChange}
            />
          </div>
          <div className="genero">
            <label htmlFor="genero">Género</label>
            <select
              id="genero"
              name="gender"
              onChange={handleChange}
              value={user.gender}
            >
              <option value="" selected disabled hidden>
                Elegir una opción
              </option>
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
              value={user.phoneNumber}
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
              value={user.email}
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
              value={user.username}
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
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="colum">
            <label htmlFor="rol">Rol de Usuario</label>
            <select
              id="rol"
              name="rol"
              onChange={handleChange}
              value={user.rol}
            >
              <option value="" selected disabled hidden>
                Elegir Rol
              </option>
              <option value="2">Cliente</option>
              <option value="1">Administrador</option>
            </select>
          
        </div>
        <div className="ubica">
          <label>Ubicación</label>
          <textarea
            id="ubicacion"
            name="location"
            onChange={handleChange}
            value={user.location}
          />
        </div>
        <div className="botones">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={
              !user.paternal_surname ||
              !user.maternal_surname ||
              !user.first_name ||
              !user.date_birth ||
              !user.gender ||
              !user.phoneNumber ||
              !user.email ||
              !user.username ||
              !user.password ||
              !user.rol ||
              !user.location
            }
          >
            {loading ? (
              <CircularProgress color="inherit" size={24} />
            ) : editing ? (
              "Editar"
            ) : (
              "Crear"
            )}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
