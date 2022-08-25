import * as React from "react";
import "./inventario.css";
import {
  Button,
  styled,
  Modal,
  Input,
  Box,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";

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
  { field: "id", headerName: "ID", width: 30 },
  { field: "marca", headerName: "Marca", width: 130 },
  { field: "modelo", headerName: "Modelo", width: 130 },
  { field: "serie", headerName: "Serie", width: 130 },
  { field: "inventario", headerName: "Inventario", width: 130 },
  { field: "monitor", headerName: "Monitor", width: 130 },
  { field: "teclado", headerName: "Teclado", width: 130 },
  { field: "mouse", headerName: "Mouse", width: 130 },
  { field: "lector", headerName: "Lector", width: 130 },
  { field: "inventario2", headerName: "Inventario 2", width: 130 },
];

const rows = [
  {
    id: 1,
    marca: "ACTECK",
    modelo: "GENERICO",
    serie: 28162761827,
    inventario: 87373202392,
    monitor: "GENERICO",
    teclado: "GENERICO",
    mouse: "GENERICO",
    lector: "GENERICO",
    inventario2: 1272712323,
  },
];

const Inventario = () => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="container">
        <div className="titulo">
          <h1>Inventario</h1>
        </div>
        <div className="filtro">
          <p>Buscar por: </p>
          <div className="busqueda">
            <select name="select">
              <option value="value1">Value 1</option>
              <option value="value2" selected>
                Value 2
              </option>
              <option value="value3">Value 3</option>
            </select>
            <Paper
              component="form"
              sx={{
                p: "1px 1px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>

            <div className="buttonVale">
              <BootstrapButton onClick={handleOpen}>
                Agregar Nuevo Vale de Salida
              </BootstrapButton>
            </div>
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
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Nuevo Vale de Salida
            </Typography>
            <div className="formulario">
              <form>
                <div className="row">
                  <div className="fecha">
                    <label>Fecha</label>
                    <input type="date"></input>
                  </div>
                  <div className="area">
                    <label>Área</label>
                    <select name="area">
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="solicitante">
                    <label>Solicitante</label>
                    <select name="area">
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="texto">
                    <p>Seleccione los artículos por agregar</p>
                  </div>

                  <div className="busquedaModal">
                    <p>Buscar por: </p>
                    <select name="select">
                      <option value="value1">Value 1</option>
                      <option value="value2" selected>
                        Value 2
                      </option>
                      <option value="value3">Value 3</option>
                    </select>
                  </div>
                  <div className="caja">
                    <input placeholder="ingrese datos"></input>
                    <div className="iconLupa">
                      <IconButton
                        type="button"
                        sx={{ p: "9px" }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </div>
                  </div>
                  <div className="medida">
                    <label>Medida</label>
                    <input placeholder="medida"></input>
                  </div>

                  <div className="cantidad">
                    <label>Cantidad</label>
                    <input placeholder="Cantidad"></input>
                  </div>

                  <div className="buttonValeModal">
                    <BootstrapButton>Agregar Artículo al Vale</BootstrapButton>
                  </div>
                </div>
              </form>
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
                Agregar
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
  marginLeft: "3rem",
  color: "white",
  background: "purple",
});
export default Inventario;
