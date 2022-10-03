import React, { useEffect, useState } from "react";
import Error from "../Error/error";
import { Button } from "@material-ui/core";
import { createUserRequest } from "../../api/users.api";

const Formulario = ({ usuarios, setUsuarios, usuario, setUsuario }) => {
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(usuario).length > 0) {
      setApellidoP(usuario.apellidoP);
      setApellidoM(usuario.apellidoM);
      setNombre(usuario.nombre);
      setFechaNacimiento(usuario.fechaNacimiento);
      setGenero(usuario.genero);
      setTelefono(usuario.telefono);
      setCorreo(usuario.correo);
      setUsername(usuario.username);
      setPassword(usuario.password);
      setRol(usuario.rol);
      setUbicacion(usuario.ubicacion);
    }
  }, [usuario]);

  // const generarId = () => {
  //   const random = Math.random().toString(36).substring(2);
  //   const fecha = Date.now().toString(36);
  //   return random + fecha;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario alch
    if (
      [
        apellidoP,
        apellidoM,
        nombre,
        fechaNacimiento,
        genero,
        telefono,
        correo,
        username,
        password,
        rol,
        ubicacion,
      ].includes("")
    ) {
      console.log("Hay al menos un campo vacío");
      setError(true);
      return;
    }

    setError(false);

    // Objeto de Usuario
    const objetoUsuario = {
      apellidoP,
      apellidoM,
      nombre,
      fechaNacimiento,
      genero,
      telefono,
      correo,
      username,
      password,
      rol,
      ubicacion,
    };

    // if (usuario.id) {
    //   //Editando el registro
    //   objetoUsuario.id = usuario.id;

    //   const usuariosActualizados = usuarios.map((usuarioState) =>
    //     usuarioState.id === usuario.id ? objetoUsuario : usuarioState
    //   );
    //   //.map retorna un arreglo nuevo y se puede setear a usuarios

    //   setUsuarios(usuariosActualizados);
    //   setUsuario({});
    // } else {
    //   //Nuevo registro
    //   // objetoUsuario.id = generarId();
    //   setUsuarios([...usuarios, objetoUsuario]);
    // }

    console.log(objetoUsuario);

    // Reiniciar Datos del usuario xd
    setApellidoP("");
    setApellidoM("");
    setNombre("");
    setFechaNacimiento("");
    setGenero("");
    setTelefono("");
    setCorreo("");
    setUsername("");
    setPassword("");
    setRol("");
    setUbicacion("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
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
              value={apellidoP}
              onChange={(e) => setApellidoP(e.target.value)}
            />
          </div>
          <div className="apm">
            <label>Apellido Materno</label>
            <input
              id="apellidoM"
              placeholder="Apellido Materno"
              type="text"
              value={apellidoM}
              onChange={(e) => setApellidoM(e.target.value)}
            />
          </div>
          <div className="nombre">
            <label>Nombre</label>
            <input
              id="nombre"
              placeholder="Nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="fechaNacimiento">
            <label>Fecha de Nacimiento</label>
            <input
              id="fechaNacimiento"
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>
          <div className="genero">
            <label htmlFor="genero">Género</label>
            <select
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
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
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="correo">
            <label>Correo</label>
            <input
              id="correo"
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            ></input>
          </div>
          <div className="usuario">
            <label>Usuario</label>
            <input
              id="usuario"
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="contra">
            <label>Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="colum">
          <div className="usuario">
            <label htmlFor="rol">Rol de Usuario</label>
            <select
              id="rol"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="C">Cliente</option>
              <option value="A">Administrador</option>
            </select>
          </div>
        </div>
        <div className="ubica">
          <label>Ubicación</label>
          <textarea
            id="ubicacion"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </div>
        <div className="botones">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Agregar
          </Button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
