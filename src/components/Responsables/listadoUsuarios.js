import React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { columns } from "./checkJson";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const ListadoUsuarios = ({}) => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (cellValues) => {
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

  useEffect(() => {
    loadUsers();
  }, [users]);

  const columns = [
    { field: "first_name", headerName: "Nombre", width: 100 },
    { field: "paternal_surname", headerName: "Paterno", width: 130 },
    { field: "maternal_surname", headerName: "Materno", width: 130 },
    { field: "username", headerName: "Usuario", width: 110 },
    { field: "rol", headerName: "Rol", width: 70 },
    { field: "location", headerName: "Ubicación", width: 100 },
    { field: "phoneNumber", headerName: "Teléfono", width: 100 },
    { field: "email", headerName: "Correo", width: 100 },
    { field: "gender", headerName: "Género", width: 70 },
    {
      field: "eliminar",
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              key={users.idUser}
              onClick={() => {
                handleDelete(cellValues);
              }}
            >
              eliminar
            </Button>
          </>
        );
      },
    },
    {
      field: "editar",
      renderCell: (cellValues) => {
        return (
          <>
            <Button variant="contained" color="primary" onClick={(e) => {}}>
              editar
            </Button>
          </>
        );
      },
    },
  ];

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
