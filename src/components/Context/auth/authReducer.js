import {
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  USUARIO_AUTENTICADO_CLIENTE,
  USUARIO_AUTENTICADO_ADMIN,
} from "../../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        autenticado: true,
      };
    case USUARIO_AUTENTICADO_CLIENTE:
      return {
        ...state,
        usuario: action.payload,
        isNotAdmin: true
    };
    case USUARIO_AUTENTICADO_ADMIN:
      return {
        ...state,
        usuario: action.payload,
        isNotAdmin: false
        
      }
    case CERRAR_SESION:
      localStorage.removeItem("token");
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null,
        isNotAdmin: null
      };
    default:
      return state;
  }
};
