import { useHistory } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Input, Modal, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import "./generarReportes.css";
import { DataGrid } from "@mui/x-data-grid";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
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
  { field: "dispositivo", headerName: "Dispositivo", width: 150 },
  { field: "nserie", headerName: "Numero de Serie", width: 200 },
  { field: "fecha", headerName: "Fecha", width: 150 },
  { field: "descripcion", headerName: "Descripcion", width: 170 },
];
const rows = [
  {
    id: 1,
    dispositivo: "HP",
    nserie: "123456",
    fecha: "12/02/2022",
    descripcion: "le entro agua",
  },
  {
    id: 2,
    dispositivo: "Dell",
    nserie: "123421",
    fecha: "12/03/2022",
    descripcion: "se quemo",
  },
  {
    id: 3,
    dispositivo: "HP",
    nserie: "524421",
    fecha: "12/05/2022",
    descripcion: "sin teclado",
  },
];

const GenerarReportes = () => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="container">
        <div className="title">
          <DescriptionIcon fontSize="large" />
          <h1>Generarador de Reportes</h1>
        </div>
        <div className="button">
          <PersonAddIcon />
          <BootstrapButton onClick={handleOpen}>
            Generar Reporte
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
              borderColor: "transparent",
              color: "white",
              fontSize: "1.2rem",
            }}
          />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modalStyles"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Nuevo Usuario
            </Typography>
            <div className="datos">
              <div className="misdispositivos">
                <label>Selecciona un dispositivo</label>
                <select name="dispositivos">
                  <option value="hp">hp</option>
                  <option value="dell">Dell</option>
                </select>
              </div>
              <div className="descrip">
                <label>Descripción</label>
                <textarea></textarea>
              </div>
            </div>
            <div className="botones">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Cerrar
              </Button>
              <Button variant="contained" color="primary">
                Enviar Reporte
              </Button>
            </div>
          </Box>
        </Modal>
        <div className="contenedor">
          <div className="boton">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push("/layout")}
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

export default GenerarReportes;
