import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
import { useAppContext } from "../Context/context";
import FormularioEquipos from "./formularioEquipos";
import { useHistory } from "react-router-dom";
import { Box, Modal, Typography } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function ListadoEquipos({ eq }) {
  const { assignments, setAssignments, equipos, setEquipos } = useAppContext();
  const [open, setOpen] = useState(false);
  let history = useHistory();
  const [add, setAdd] = useState(false);


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
                handleEdit(cellValues);
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
      const res = await fetch("http://localhost:4000/api/assignments");
      const data = await res.json();
      console.log(data);
      setAssignments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDevices = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/devices");
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
    const idD = datas.idDevice;
    const idA = datas.idAssignment

    try {
      await fetch(`http://localhost:4000/api/assignments/${idD}`, {
        method: "DELETE"
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

  const handleClose = () => {
    setAdd(false);
    history.push("/asignaciones");
  }

  const handleEdit = (cellValues) => {
    const devices = cellValues.row;
    console.log(devices);
    
    const id = devices.idDevice;
    history.push(`/equipos/${id}/edit`)
    handleOpenAdd();
  }
  
  function handleOpenAdd() {
    setAdd(true);
    console.log("añadir");
  };

  const handleDeleteDev = async (cellValues) => {
    const datos = cellValues.row;
    const id = datos.idDevice;
    try {
      await fetch(`http://localhost:4000/api/devices/${id}`, {
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
      <Modal
        open={add}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalStyles"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Equipo
          </Typography>
          <div className="formulario">
            <FormularioEquipos
              add={add}
              setAdd={setAdd}
              open={open}
              setOpen={setOpen}
            />
          </div>
          <div className="botones">
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ListadoEquipos;
