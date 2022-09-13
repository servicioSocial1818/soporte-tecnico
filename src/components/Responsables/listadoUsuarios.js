import React from 'react'
import Usuario from './usuario'
import { DataGrid } from '@mui/x-data-grid';
import { Table } from '@material-ui/core';
import { columns, inputsArray } from './checkJson';

export const handleEliminar = ({eliminarUsuario, usuario}) => {
  

  const respuesta = window.confirm(`Deseas eliminar este usuario`);
  console.log(usuario);

  // if (respuesta) {
  //   eliminarUsuario(id);
  // }

}
const ListadoUsuarios = ({ usuario, usuarios, setUsuario, eliminarUsuario }) => {

  // const userArray = usuarios.map(usuario => {

  //   return (
  //     <Usuario
  //       key={usuario.id}
  //       usuario={usuario}
  //       setUsuario={setUsuario}
  //     />
  //   )
  // })
  
  
  return (
    <div className='tabla'>

      {usuarios && usuarios.length ? (
        // <Table
        //   className='table'
        // >
        //   <thead>
        //     <tr>
        //       <th>Nombre</th>
        //       <th>usuario</th>
        //       <th>rol</th>
        //       <th>ubicacion</th>
        //       <th>Teléfono</th>
        //       <th>Correo</th>
        //       <th>Género</th>
        //       <th>Acciones</th>
        //     </tr>
        //   </thead>
        //   {userArray}
        // </Table>
        <DataGrid
          columns={columns}
          rows={usuarios}
          pageSize={5}
          rowsPerPageOptions={[5]}
          
        />
        ) : (
        <>
          <p>No hay usuarios</p>
        </>
      )}
    </div>
  )

}

export default ListadoUsuarios