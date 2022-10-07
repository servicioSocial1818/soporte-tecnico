import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getColumns } from "./checkJson";
import { useAppContext } from "../Context/context";
// import { useEffect, useState } from "react";

export const handleDelete = async (cellValues, callback) => {
  const datos = cellValues.row;
  const id = datos.idUser;
  //console.log(datos);
  try {
    console.log(id);
    await fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    });
    callback(id);
    //console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const ListadoUsuarios = () => {
  const { users, setUsers } = useAppContext();

  const loadUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    //console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="tabla">
      {users && users.length ? (
        <>
          <DataGrid
            columns={getColumns((userId) => {
              setUsers(
                users.filter((user) => {
                  //console.log(user.idUser, userId);
                  return user.idUser !== userId;
                })
              );
            })}
            rows={users}
            getRowId={(users) => users.idUser}
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
