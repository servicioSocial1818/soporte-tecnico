import React from 'react'
import Usuario from './usuario'
import { Table } from "@material-ui/core";

const ListadoUsuarios = ({ usuarios, setUsuario, eliminarUsuarios }) => {

  const userArray = usuarios.map(usuario => {

    return (
      <Usuario
        key={usuario.id}
        usuario={usuario}
        setUsuario={setUsuario}
      />
    )
  })

  return (
    <div className='tabla'>
      {usuarios && usuarios.length ? (
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>usuario</th>
              <th>rol</th>
              <th>ubicacion</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Género</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {userArray}
        </Table>
      ) : (
        <>
          <p>No hay usuarios</p>
        </>
      )}
    </div>
  )

}

export default ListadoUsuarios