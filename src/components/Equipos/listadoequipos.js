import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
import { useAppContext } from "../Context/context";

function ListadoEquipos({ eq }) {
  const { assignments, setAssignments, equipos, setEquipos } = useAppContext();

  const columns = [
    { field: "first_name", headerName: "Nombre(s)", width: 100 },
    { field: "paternal_surname", headerName: "Paterno", width: 130 },
    { field: "maternal_surname", headerName: "Materno", width: 130 },
    { field: "trademark", headerName: "Marca", width: 100 },
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

  const columnsEq = [
    { field: "serie_number", headerName: "Número de serie", width: 160 },
    { field: "device_type", headerName: "Tipo de Equipo", width: 150 },
    { field: "trademark", headerName: "Marca", width: 150 },
    { field: "model", headerName: "Modelo", width: 130 },
    { field: "storage_device", headerName: "Almacenamiento", width: 160 },
    { field: "ram", headerName: "Ram", width: 130 },
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
                handleDeleteDev(cellValues);
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
              onClick={(e) => {
                if (!window.confirm("¿Deseas eliminar este registro?")) {
                  return;
                }
                handleDelete(cellValues);
              }}
            >
              Editar
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

  const getDevices = async () => {
    try {
      const res = await fetch("http://localhost:4000/devices");
      const data = await res.json();
      // console.log(data);
      setEquipos(data);
      console.log(equipos);
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

  const handleDeleteDev = async (cellValues) => {
    const datos = cellValues.row;
    const id = datos.idDevice;
    try {
      await fetch(`http://localhost:4000/devices/${id}`, {
        method: "DELETE",
      });
      setEquipos(
        equipos.filter((device) => {
          return device.idDevice !== id;
        })
      );
      setAssignments(
        assignments.filter((ass) => {
          return ass.idDevice !== id;
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAssignments();
    getDevices();
  }, []);

  return (
    <>
      {eq ? (
        <>
          {equipos && equipos.length ? (
            <DataGrid
              rows={equipos}
              columns={columnsEq}
              getRowId={(equipos) => equipos.idDevice}
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
            <>Cargando ...</>
          )}
        </>
      ) : (
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
            <>Cargando ...</>
          )}
        </>
      )}
    </>
  );
}

export default ListadoEquipos;
