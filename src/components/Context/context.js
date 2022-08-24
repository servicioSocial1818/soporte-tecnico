import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  Children,
} from "react";
import { NotificationManager } from "react-notifications";
// export const UserContext = createContext(null)

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
  const [user, setUser] = useState("Alex");
  const [path, setPath] = useState();

  const contextValue = useMemo(() => {
    const contextAppState = {
      isLogged,
      user,
      path,
      setPath,
      setIsLogged,
      setUser,
      createNotification,
    };

    return contextAppState;
  }, [isLogged, path]);

  return (
    <ContextApp.Provider value={contextValue}>{children}</ContextApp.Provider>
  );
};

export const useAppContext = () => useContext(ContextApp);
