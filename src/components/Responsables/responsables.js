import "./responsables.css";
import * as React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import PersonSharp from "@material-ui/icons/PersonSharp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import {
  Input,
  Box,
  MenuItem,
  FormControl,
  Select,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

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
          <div className="seleccionar">
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
          </div>

          <div className="buscar">
            <p>Buscar: </p>
            <Input></Input>
          </div>
        </div>
        <div className="tabla">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Persona</TableCell>
                <TableCell align="center">Edad</TableCell>
                <TableCell align="center">Telefono</TableCell>
                <TableCell align="center">Correo</TableCell>
                <TableCell align="center">Usuario</TableCell>
                <TableCell align="center">Género</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  persona1
                </TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="contenedor">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Agregar Nuevo Usuario
              </Typography>
              <div className="formulario">
                <form>
                    <div className="row">
                    <div className="AP">
                        <label>Apellido Paterno</label>
                        <input placeholder="Apellido Paterno"></input>
                    </div>
                    <div className="APM">
                        <label>Apellido Materno</label>
                        <input placeholder="Apellido Materno"></input>
                    </div>
                    <div className="nombre">
                        <label>Nombre</label>
                        <input placeholder="Nombre"></input>
                    </div>
                    </div>
                    <div className="row">
                    <div className="Fecha de Nacimiento">
                        <label>Nombre</label>
                        <input type="date"></input>
                    </div>
                    <div className="Genero">
                        <label>Género</label>
                        <select name="genero">
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                        </select>
                    </div>
                    <div className="Telefono">
                        <label>Télefono</label>
                        <input placeholder="Telefono"></input>
                    </div>
                    </div>
                    <div className="row">
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
                    <div className="ubica">
                        <label>Ubicación</label>
                        <textarea></textarea>
                    </div>
                    </div>
                </form>
              </div>
              <div className="botones">
                <Button onClick={handleClose}>Cerrar</Button>
                <Button>Agregar</Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="boton">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/menu")}
        >
          Atras
        </Button>
      </div>
    </>
  );
};

const BootstrapButton = styled(Button)({
  color: "white",
});

export default Responsables;
