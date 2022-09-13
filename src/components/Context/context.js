import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  Children,
} from "react";
import { NotificationManager } from "react-notifications";

const ContextApp = createContext();

export const ContextAppProvider = (props) => {
  const { children } = props;

  const createNotification = (type, title, message) => {
    if (type === "info") {
      return NotificationManager.info(message);
    } else if (type === "success") {
      return NotificationManager.success(message, title);
    } else if (type === "warning") {
      return NotificationManager.warning(message, title, 3000);
    } else if (type === "error") {
      return NotificationManager.error(message, title, 3000);
    }
  };

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState();
  const [path, setPath] = useState();
  const [isNotAdmin, setIsNotAdmin] = useState(false);
  const [isShow, setIsShow] = useState(false);
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

  const contextValue = useMemo(() => {
    const contextAppState = {
      isLogged,
      user,
      path,
      isNotAdmin,
      isShow,
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
      error,
      setPath,
      setIsLogged,
      setUser,
      setIsNotAdmin,
      setIsShow,
      setApellidoP,
      setApellidoM,
      setNombre,
      setFechaNacimiento,
      setGenero,
      setTelefono,
      setCorreo,
      setUsername,
      setPassword,
      setRol,
      setUbicacion,
      setError,
      createNotification,
    };

    return contextAppState;
  }, [
    isLogged,
    path,
    isShow,
    isNotAdmin,
    setApellidoP,
    setApellidoM,
    setNombre,
    setFechaNacimiento,
    setGenero,
    setTelefono,
    setCorreo,
    setUsername,
    setPassword,
    setRol,
    setUbicacion,
    setError,
  ]);

  return (
    <ContextApp.Provider value={contextValue}>{children}</ContextApp.Provider>
  );
};

export const useAppContext = () => useContext(ContextApp);
