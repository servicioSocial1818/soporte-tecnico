import React from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { useReducer } from "react";
import {
  LOGIN_EXITOSO,
  LOGIN_ERROR
} from '../../../types'
import clienteAxios from "../../../config/axios";

const AuthState = ({ children }) => {
  // state inicial
  const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  //Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Usuario autenticado
  const usuarioAutenticado = (nombre) => {
    dispatch({
      type: 'USUARIO_AUTENTICADO',
      payload: nombre,
    });
  };

  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data.token // modifica el state
      })
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      })
    }
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        usuarioAutenticado,
        iniciarSesion
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
