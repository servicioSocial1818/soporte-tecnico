import React, { useContext } from 'react';
import authContext from '../Context/auth/authContext';
import "./alerta.css"
const Alerta = () => {
    const AuthContext = useContext(authContext);
    const { mensaje } = AuthContext;

  return (
    <div className='alerta'>
        {mensaje}
    </div>
  )
}

export default Alerta