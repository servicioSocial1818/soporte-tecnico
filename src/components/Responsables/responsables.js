import "./responsables.css";
import * as React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import PersonSharp from "@material-ui/icons/PersonSharp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import { Input, Box, MenuItem, FormControl, Select } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
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
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 100 },
  { field: "apellidoP", headerName: "ApellidoP", width: 130 },
  { field: "apellidoM", headerName: "ApellidoM", width: 130 },
  { field: "edad", headerName: "Edad", width: 70 },
  { field: "telefono", headerName: "Teléfono", width: 160 },
  { field: "correo", headerName: "Correo", width: 180 },
  { field: "usuario", headerName: "Usuario", width: 150 },
  { field: "genero", headerName: "Género", width: 70 },
];

const rows = [
  {
    id: 1,
    nombre: "nombre1",
    apellidoP: "apellidoP1",
    apellidoM: "apellidoM1",
    edad: 32,
    telefono: "1234568523",
    correo: "correo@correo.com",
    usuario: "sadasd",
    genero: "M",
  },
  {
    id: 2,
    nombre: "nombre2",
    apellidoP: "apellidoP2",
    apellidoM: "apellidoM2",
    edad: 22,
    telefono: "3456778483",
    correo: "correo2@correo.com",
    usuario: "sad25d",
    genero: "M",
  },
  {
    id: 3,
    nombre: "nombre3",
    apellidoP: "apellidoP3",
    apellidoM: "apellidoM3",
    edad: 36,
    telefono: "8154554113",
    correo: "correo3@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
  {
    id: 4,
    nombre: "nombre4",
    apellidoP: "apellidoP4",
    apellidoM: "apellidoM4",
    edad: 42,
    telefono: "8154554113",
    correo: "correo4@correo.com",
    usuario: "sa51sd",
    genero: "M",
  },
  {
    id: 5,
    nombre: "nombre5",
    apellidoP: "apellidoP5",
    apellidoM: "apellidoM5",
    edad: 52,
    telefono: "8154554113",
    correo: "correo5@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
  {
    id: 6,
    nombre: "nombre6",
    apellidoP: "apellidoP6",
    apellidoM: "apellidoM6",
    edad: 52,
    telefono: "8154554113",
    correo: "correo6@correo.com",
    usuario: "sa51sd",
    genero: "M",
  },
  {
    id: 7,
    nombre: "nombre7",
    apellidoP: "apellidoP7",
    apellidoM: "apellidoM7",
    edad: 12,
    telefono: "8154554113",
    correo: "correo7@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
  {
    id: 8,
    nombre: "nombre8",
    apellidoP: "apellidoP8",
    apellidoM: "apellidoM8",
    edad: 52,
    telefono: "8154554113",
    correo: "correo8@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
];
const Responsables = () => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="containerResponsables">
        <div className="title">
          <PersonSharp fontSize="large" />
          <h2>Administrar Responsables</h2>
        </div>
        <div className="button">
          <PersonAddIcon />
          <BootstrapButton onClick={handleOpen}>
            Agregar Usuario
          </BootstrapButton>
        </div>
        <div className="filtrar">
          {/* <div className="seleccionar">
            <p>Mostrar</p>
            <Box sx={{ minWidth: 100 }}>
              <FormControl>
                <Select label="10">
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <p>registros</p>
          </div> */}

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
              Agregar Nuevo Usuario
            </Typography>
            <div className="formulario">
              <form>
                <div className="row">
                  <div className="ap">
                    <label>Apellido Paterno</label>
                    <input placeholder="Apellido Paterno"></input>
                  </div>
                  <div className="apm">
                    <label>Apellido Materno</label>
                    <input placeholder="Apellido Materno"></input>
                  </div>
                  <div className="nombre">
                    <label>Nombre</label>
                    <input placeholder="Nombre"></input>
                  </div>
                <div className="fechaNacimiento">
                  <label>Fecha de Nacimiento</label>
                  <input type="date"></input>
                </div>
                <div className="genero">
                  <label>Género</label>
                  <select name="genero">
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                  </select>
                </div>
                <div className="telefono">
                  <label>Télefono</label>
                  <input placeholder="Telefono"></input>
                </div>
                <div className="correo">
                  <label>Correo</label>
                  <input placeholder="Correo"></input>
                </div>
                <div className="usuario">
                  <label>Usuario</label>
                  <input placeholder="Usuario"></input>
                </div>
                <div className="contra">
                  <label>Contraseña</label>
                  <input placeholder="Contraseña"></input>
                </div>
                </div>
                <div className="colum">
                  <div className="usuario">
                    <label>Rol de Usuario</label>
                    <select name="usuario">
                      <option value="C">Cliente</option>
                      <option value="A">Administrador</option>
                    </select>
                  </div>
                  </div>
                  <div className="ubica">
                    <label>Ubicación</label>
                    <textarea></textarea>
                  </div>
               
              </form>
            </div>
            <div className="botones">
              <Button variant="contained" color="secondary" onClick={handleClose}>Cerrar</Button>
              <Button variant="contained" color="primary">Agregar</Button>
            </div>
          </Box>
        </Modal>
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
    </>
  );
};

const BootstrapButton = styled(Button)({
  color: "white",
});

export default Responsables;
