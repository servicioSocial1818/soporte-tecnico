import React from "react";
import { useEffect } from "react";
import { rows } from "./equiposJson";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
import { useAppContext } from "../Context/context";

function ListadoEquipos() {
  const { assignments, setAssignments } = useAppContext();

  const columns = [
    { field: "first_name", headerName: "Nombre", width: 100 },
    { field: "paternal_surname", headerName: "Paterno", width: 130 },
    { field: "maternal_surname", headerName: "Materno", width: 130 },
    { field: "trademark", headerName: "Modelo", width: 130 },
    { field: "manager", headerName: "Encargado", width: 270 },
    {field: "serie_number", headerName: "Numero de Serie", width: 124},
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
              }}
            >
              eliminar
            </Button>
          </>
        );
      },
    },
    {
        field: "Editar",
        renderCell: (cellValues) => {
            return (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log("editar");
                  }}
                >
                  Editar
                </Button>
              </>
            );
          },
    }
  ];

  const getDevices = async () => {
    try {
      const res = await fetch("http://localhost:4000/assignments");
      const data = await res.json();
      console.log(data);
      setAssignments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDevices();
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
