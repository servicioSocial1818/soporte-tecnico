import { Table } from '@material-ui/core';
import { inputsArray } from './checkJson'
import Button from "@material-ui/core/Button";



const Usuario = ({ usuario, setUsuario, eliminarUsuario }) => {

  // const { apellidoP, apellidoM, nombre, fechaNacimiento, genero, telefono, correo, username, password, rol, ubicacion } = usuario




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
            <tr key={inputsArray.id}>
              <td>{`${inputsArray.nombre} ${inputsArray.apellidoP} ${inputsArray.apellidoM}`}</td>
              <td>{inputsArray.fechaNacimiento}</td>
              <td>{inputsArray.genero}</td>
              <td>{inputsArray.telefono}</td>
              <td>{inputsArray.correo}</td>
              <td>{inputsArray.username}</td>
              <td>{inputsArray.password}</td>
              <td>{inputsArray.rol}</td>
              <td>{inputsArray.ubicacion}</td>
              <td>
                <Button variant="outline-primary" onClick={() => {
                  
                 
                }}>
                  Actualizar Documentos
                </Button>
                <Button variant="outline-danger" className="m-2" onClick={() => {
            
                }}>
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