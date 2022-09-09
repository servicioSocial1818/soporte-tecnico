import Button from "@material-ui/core/Button";

const Usuario = ({ usuario, setUsuario, eliminarUsuario }) => {

  const { apellidoP, apellidoM, nombre, fechaNacimiento, genero, telefono, correo, username, password, rol, ubicacion, id } = usuario

  const handleEliminar = () => {
    const respuesta = window.confirm('Deseas eliminar este usuario');

    if(respuesta) {
      eliminarUsuario(id);
    }

  }



  return (
    <>
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Usuario</th>
              <th>Género</th>
            </tr>
          </thead>
          <tbody>
            <tr key={id}>
              <td>{`${nombre} ${apellidoP} ${apellidoM}`}</td>
              <td>{fechaNacimiento}</td>
              <td>{genero}</td>
              <td>{telefono}</td>
              <td>{correo}</td>
              <td>{username}</td>
              <td>{password}</td>
              <td>{rol}</td>
              <td>{ubicacion}</td>
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

        </table>
      </div>
    </>
  )
}

export default Usuario