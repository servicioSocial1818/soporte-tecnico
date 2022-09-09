import Button from "@material-ui/core/Button";
import { Table } from "@material-ui/core";

const Usuario = ({ usuario, setUsuario, eliminarUsuario }) => {

  const { apellidoP, apellidoM, nombre, fechaNacimiento, genero, telefono, correo, username, password, rol, ubicacion, id } = usuario

  const handleEliminar = () => {
    const respuesta = window.confirm('Deseas eliminar este usuario');

    if (respuesta) {
      eliminarUsuario(id);
    }

  }

  return (
    <>
      <tbody>
        <tr key={id}>
          <td>{`${nombre} ${apellidoP} ${apellidoM}`}</td>
          <td>{username}</td>
          <td>{rol}</td>
          <td>{ubicacion}</td>
          <td>{telefono}</td>
          <td>{correo}</td>
          <td>{genero}</td>
          <td>
            <Button
              variant="outline-primary"
              onClick={() => setUsuario(usuario)}
            >
              Editar
            </Button>
            <Button
              variant="outline-danger"
              className="m-2" onClick={handleEliminar}
            >
              Eliminar
            </Button>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default Usuario