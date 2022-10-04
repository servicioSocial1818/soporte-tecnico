import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./checkJson";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";


export const handleEliminar = async (id) => {
  const res = await fetch(`http://localhost:4000/users/${id}`, {
    method: 'DELETE'
  })
  console.log(res)
};

const ListadoUsuarios = ({}) => {
  
  const [users, setUsers] = useState([]);
  
  const loadUsers = async () => {
    const response = await fetch('http://localhost:4000/users')
    const data = await response.json()
    setUsers(data)
  }
  
  useEffect(() => {
    loadUsers()
  },[])


  return (
    <div className="tabla">
      {users && users.length ? (
        
        <DataGrid
          columns={columns}
          rows={users}
          getRowId={(users) => users.idUser}
          loading={!users.length}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellClick={handleEliminar}
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar Artista',
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar Artista',
              onclick: () => handleEliminar(users.idUser)
              
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />
      ) : (
        <>
          <p>No hay usuarios</p>
        </>
      )}
    </div>
  );
};

export default ListadoUsuarios;
