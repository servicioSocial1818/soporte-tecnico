import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
import { useAppContext } from "../Context/context";

function ListadoEquipos() {
  const { assignments, setAssignments } = useAppContext();
  const [assignment, setAssignment] = useState({
    idUser: "",
    idDevice: "",
    idAssignment: "",
  });

  const columns = [
    { field: "first_name", headerName: "Nombre(s)", width: 100 },
    { field: "paternal_surname", headerName: "Paterno", width: 130 },
    { field: "maternal_surname", headerName: "Materno", width: 130 },
    { field: "trademark", headerName: "Marca", width: 130 },
    { field: "model", headerName: "Modelo", width: 100 },
    { field: "manager", headerName: "Encargado", width: 300 },
    { field: "serie_number", headerName: "Numero de Serie", width: 130 },
    {
      field: "Eliminar",
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                if (!window.confirm("¿Deseas eliminar este registro?")) {
                  return;
                }
                handleDelete(cellValues);
              }}
            >
              eliminar
            </Button>
          </>
        );
      },
    },
  ];

  const getAssignments = async () => {
    try {
      const res = await fetch("http://localhost:4000/assignments");
      const data = await res.json();
      console.log(data);
      setAssignments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (cellValues) => {
    const response = cellValues.row;
    const datas = response;
    const idU = datas.idUser;
    const idD = datas.idDevice;
    const idA = datas.idAssignment;
    // setAssignment(datas)
    // console.log("Usuario:", idU, "Equipo:", idD, "Asignacion:", idA);
    // console.log("datos: ", datos)
    // console.log(datas);

    try {
      await fetch(`http://localhost:4000/assignments`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: idU,
          idDevice: idD,
          idAssignment: idA,
        }),
      });
      setAssignments(
        assignments.filter((ass) => {
          return ass.idAssignment !== idA;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <>
      {assignments && assignments.length ? (
        <DataGrid
          rows={assignments}
          columns={columns}
          getRowId={(assignments) => assignments.idAssignment}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{
            borderColor: "transparent",
            color: "white",
            fontSize: "1.2 rem",
            height: "386px",
            width: "100%",
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default ListadoEquipos;
