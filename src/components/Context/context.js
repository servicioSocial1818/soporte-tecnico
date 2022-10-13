import React, {
  createContext,
  useState,
  useContext,
  useMemo
} from "react";
import { NotificationManager } from "react-notifications";
import { Button } from "@material-ui/core";

const ContextApp = createContext(); //Contexto que agrupa

export const ContextAppProvider = (props) => { //permite comunicarte con el contexto
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
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [editing, setEditing] = useState(false);
  const [equipo, setEquipo] = useState([]);
  
  const contextValue = useMemo(() => {
    const contextAppState = {
      isLogged,
      user,
      path,
      isNotAdmin,
      isShow,
      error,
      users,
      assignments,
      editing,
      equipo,
      setPath,
      setIsLogged,
      setUser,
      setIsNotAdmin,
      setIsShow,
      setError,
      setUsers,
      setEditing,
      setEquipo,
      setAssignments,
      createNotification,
    };

    return contextAppState;
  }, [
    isLogged,
    path,
    isShow,
    isNotAdmin,
    editing,
    users,
    assignments,
    setError,
  ]);

  return (
    <ContextApp.Provider value={contextValue}>{children}</ContextApp.Provider>
  );
};

//Esto actua como un "Hook"
export const useAppContext = () => useContext(ContextApp);
