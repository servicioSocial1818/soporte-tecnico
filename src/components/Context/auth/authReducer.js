import { LOGIN_EXITOSO, LOGIN_ERROR } from "../../../types";

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
      default:
        return state;
  }
};
