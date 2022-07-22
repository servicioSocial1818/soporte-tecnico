import React, { useEffect } from "react";
import UserData from "../UserSesionData/userData";
import { useAppContext } from "../Context/context";

const MyAccount = () => {
  const { setPath } = useAppContext();

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <>
      <UserData />
    </>
  );
};

export default MyAccount;
