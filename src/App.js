import React from "react";

import "./App.css";
import Routes from "./Routes/routes";
import AuthState from "./components/Context/auth/authState";
import { ContextAppProvider } from "./components/Context/context";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {

  

  return (
    <>
      <AuthState>
        <ContextAppProvider>
          <Routes />
        </ContextAppProvider>
      </AuthState>

      <NotificationContainer />
    </>
  );
}

export default App;
