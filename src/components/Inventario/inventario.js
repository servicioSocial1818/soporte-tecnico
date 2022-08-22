import * as React from "react";
import "./inventario.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";
import { Input, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";



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
  { field: "componente", headerName: "Componente", width: 100 },
  { field: "cantidad", headerName: "Cantidad", width: 130 },
  { field: "solicitante", headerName: "Solicitante", width: 130 },
  { field: "area", headerName: "Área", width: 130 },
  { field: "fecha", headerName: "Fecha", width: 130 },
  { field: "reporte", headerName: "Reporte", width: 130 },
  { field: "numSerie", headerName: "Num-Serie", width: 130 },


];

const rows = [
  {
    id: 1,
    componente: "Teclado",
    cantidad: "2",
    solicitante: "Luis M",
    area: 'sistemas',
    fecha: "12/12/2022",
    reporte: 3,
    numSerie: 1332312,
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
              borderColor: 'transparent',
              color: 'white',
              fontSize: '1.2rem'
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
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
                  <div className="filtroModal">
                    <div className="busquedaModal">
                      <p>Buscar por: </p>
                      <select name="select">
                        <option value="value1">Value 1</option>
                        <option value="value2" selected>Value 2</option>
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
                      </Paper>
                    </div>
                      <div className="medida">
                        <label>Medida</label>
                        <input placeholder="medida"></input>
                      </div>
                  </div>
                  <div className="bot">
                    <div className="cantidad">
                      <label>Cantidad</label>
                      <input placeholder="Cantidad"></input>
                    </div>
                      <div className="buttonValeModal">
                        <BootstrapButton>
                          Agregar Artículo al Vale
                        </BootstrapButton>
                      </div>
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
  marginLeft: "3rem",
  color: "white",
  background: "purple",
});
export default Inventario;
