import React from "react";

import "./App.css";
import Routes from "./Routes/routes";

import { ContextAppProvider } from "./components/Context/context";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
  return (
    <>
      <ContextAppProvider>
        <Routes />
      </ContextAppProvider>

      <NotificationContainer />
    </>
  );
}

export default App;
