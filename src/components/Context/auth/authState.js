import React from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { useReducer } from "react";
import {
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  USUARIO_AUTENTICADO_ADMIN,
  USUARIO_AUTENTICADO_CLIENTE,
  CERRAR_SESION
} from '../../../types'
import clienteAxios from "../../../config/axios";
import tokenAuth from "../../../api/tokenAuth";

const AuthState = ({ children }) => {
  // state inicial
  const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
    autenticado: null,
    usuario: null,
    mensaje: null,
    isNotAdmin: null,
  };

  //Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

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

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get('api/auth');
      console.log(respuesta.data.usuario);
      console.log(respuesta);
      if (respuesta.data.usuario.rol === 1) {
        dispatch({
          type: USUARIO_AUTENTICADO_CLIENTE,
          payload: respuesta.data.usuario
        })
      } else if (respuesta.data.usuario.rol === 2) {
        dispatch({
          type: USUARIO_AUTENTICADO_ADMIN,
          payload: respuesta.data.usuario
        })
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      })
    }

  }

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION
    })
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        isNotAdmin: state.isNotAdmin,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
