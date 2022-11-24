import React from 'react'
import IsNotAdmin from './isNotAdmin'
import Menu from './menu'
import { useContext, useEffect } from 'react'
import { useAppContext } from "../Context/context";
import authContext from '../Context/auth/authContext';

const Layout = () => {

  const AuthContext = useContext( authContext );
  const { usuarioAutenticado, usuario, isNotAdmin } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
  },[])
 
  console.log(isNotAdmin);
  
  return (
    <>
      {usuario ? (
        <>

          { isNotAdmin ? <IsNotAdmin/> : <Menu/> }
        </>
      ) : null}
    </>

  )
}

export default Layout