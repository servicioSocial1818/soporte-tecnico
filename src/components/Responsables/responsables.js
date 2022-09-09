import "./responsables.css";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import PersonSharp from "@material-ui/icons/PersonSharp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import { Input, Box } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { DataGrid } from "@mui/x-data-grid";
import { columns, inputsArray } from './checkJson';
import { useAppContext } from "../Context/context";
import useValidationField from "./useValidationField";


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

const Responsables = ({ usuarios, setUsuarios, usuario, setUsuario }) => {
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="containerResponsables">
        <div className="title">
          <PersonSharp fontSize="large" />
          <h2>Administrar Usuarios</h2>
        </div>
        <div className="button">
          <PersonAddIcon />
          <BootstrapButton onClick={handleOpen}>
            Agregar Usuario
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
            rows={inputsArray}
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
              Agregar Nuevo Usuario
            </Typography>
            <div className="formulario">
              <form
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="ap">
                    <label>Apellido Paterno</label>
                    <input
                      id="apellidoP"
                      placeholder="Apellido Paterno"
                      type="text"
                    />
                  </div>
                  <div className="apm">
                    <label>Apellido Materno</label>
                    <input
                      id="apellidoM"
                      placeholder="Apellido Materno"
                      type="text"
                    />
                  </div>
                  <div className="nombre">
                    <label>Nombre</label>
                    <input
                      id="nombre"
                      placeholder="Nombre"
                      type="text"
                    />
                  </div>
                  <div className="fechaNacimiento">
                    <label>Fecha de Nacimiento</label>
                    <input
                      id="fechaNacimiento"
                      type="date"
                    />
                  </div>
                  <div className="genero">
                    <label htmlFor="genero">Género</label>
                    <select
                      id="genero"
                    >
                      <option value="F">Femenino</option>
                      <option value="M">Masculino</option>
                    </select>
                  </div>
                  <div className="telefono">
                    <label>Télefono</label>
                    <input
                      id="telefono"
                      type="text"
                      placeholder="Telefono"
                    />
                  </div>
                  <div className="correo">
                    <label>Correo</label>
                    <input
                      id="correo"
                      type="email"
                      placeholder="Correo"
                    ></input>
                  </div>
                  <div className="usuario">
                    <label>Usuario</label>
                    <input
                      id="usuario"
                      type="text"
                      placeholder="Usuario"
                    />
                  </div>
                  <div className="contra">
                    <label>Contraseña</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Contraseña"

                    />
                  </div>
                </div>
                <div className="colum">
                  <div className="usuario">
                    <label htmlFor="rol">Rol de Usuario</label>
                    <select
                      id="rol"
                    >
                      <option value="C">Cliente</option>
                      <option value="A">Administrador</option>
                    </select>
                  </div>
                </div>
                <div className="ubica">
                  <label>Ubicación</label>
                  <textarea
                    id="ubicacion"
                  />
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
              <Button variant="contained" color="primary" onClick={ saveData }>
                Agregar
              </Button>
            </div>
          </Box>
        </Modal>
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
    </>
  );
};

const BootstrapButton = styled(Button)({
  color: "white",
});

export default Responsables;
