import React from 'react'
import IsNotAdmin from './isNotAdmin'
import Menu from './menu'
import { useContext, useEffect } from 'react'
import { useAppContext } from "../Context/context";
import authContext from '../Context/auth/authContext';

const Layout = () => {

  const AuthContext = useContext( authContext );
  const { usuarioAutenticado, usuario, isNotAdmin, token } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
  },[])
 
  console.log(isNotAdmin);
  
  return (
    <>
      {usuario && token ? (
        <>

          { isNotAdmin ? <IsNotAdmin/> : <Menu/> }
        </>
      ) : <p>INICIE SESIÓN PARA CONTINUAR</p>}
    </>

  )
}

export default Layout