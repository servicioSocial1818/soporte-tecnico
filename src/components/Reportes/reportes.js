import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Input, Modal, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import "./reportes.css";
import { DataGrid } from "@mui/x-data-grid";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

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

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "persona", headerName: "Persona", width: 150 },
  { field: "dispositivo", headerName: "Dispositivo", width: 150 },
  { field: "nserie", headerName: "Numero de Serie", width: 150 },
  { field: "fecha", headerName: "Fecha", width: 150 },
  { field: "estado", headerName: "Estado", width: 100 },
  { field: "descripcion", headerName: "Descripcion", width: 170 },
  { field: "botones", headerName: "Acción", width: 150 },
];
const rows = [
  {
    id: 1,
    persona: "nombre1",
    dispositivo: "HP",
    nserie: "123456",
    fecha: "12/02/2022",
    estado: "roto",
    descripcion: "le entro agua",
  },
  {
    id: 2,
    persona: "nombre2",
    dispositivo: "Dell",
    nserie: "123421",
    fecha: "12/03/2022",
    estado: "en uso",
    descripcion: "se quemo",
  },
  {
    id: 3,
    persona: "nombre1",
    dispositivo: "HP",
    nserie: "524421",
    fecha: "12/05/2022",
    estado: "en uso",
    descripcion: "sin teclado",
  },
];

const Reportes = () => {
  let history = useHistory();
  return (
    <>
      <div className="container">
        <div className="title">
          <DescriptionIcon fontSize="large" />
          <h1>Gestión de Reportes</h1>
        </div>
        <div className="reportes">
          <Button variant="contained" color="secondary">
            <PictureAsPdfIcon />
          </Button>
          <BootstrapButton>
            <img src="images/excel.png" className="excelIcon"></img>
          </BootstrapButton>
        </div>
        <div className="filtrar">
          <div className="buscar">
            <p>Buscar: </p>
            <Input></Input>
          </div>
        </div>
        <div className="tabla">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{
                
                borderColor: 'transparent',
                color: 'white',
                fontSize: '1.2rem'
              }}
          />
        </div>
        <div className="contenedor">
          <div className="boton">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push("/menu")}
            >
              Atras
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const BootstrapButton = styled(Button)({
  background: "green",
});

export default Reportes;
