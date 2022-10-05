import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./checkJson";
import { useEffect, useState } from "react";

export const handleDelete = async (cellValues) => {
  const datos = cellValues.row;
  const id = datos.idUser;
  try {
    console.log(id);
    const res = await fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
const ListadoUsuarios = ({users, setUsers}) => {

  // const loadUsers = async () => {
  //   const response = await fetch("http://localhost:4000/users");
  //   const data = await response.json();
  //   console.log(data);
  //   setUsers(data);
  // };


  // useEffect(() => {
  //   loadUsers();
  // }, [users]);


  return (
    <div className="tabla">
      {users && users.length ? (
        <>
          <DataGrid
            columns={columns}
            rows={users}
            getRowId={(users) => users.idUser}
            loading={!users.length}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </>
      ) : (
        <>
          <p>No hay usuarios</p>
        </>
      )}
    </div>
  );
};

export default ListadoUsuarios;
