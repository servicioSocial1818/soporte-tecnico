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
import Formulario from "./Formulario";
import ListadoUsuarios from "./listadoUsuarios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Responsables = () => {
  let history = useHistory();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    history.push("/responsables/new");
  };
  const handleClose = () => {
    setOpen(false);
    history.push("/responsables");
  };

  return (
    <>
      <div className="containerResponsables">
        <div className="title">
          <PersonSharp fontSize="large" />
          <h2>Administrar Usuarios</h2>
        </div>
        <div className="button">
          <BootstrapButton onClick={handleOpen}>
            <PersonAddIcon />
            Agregar Usuario
          </BootstrapButton>
        </div>
        <div className="filtrar">
          <div className="buscar">
            <p>Buscar: </p>
            <Input></Input>
          </div>
        </div>
        {/* TABLA */}
        <ListadoUsuarios />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modalStyles"
        >
          <Box sx={style}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Agregar Nuevo Usuario
            </Typography>
            <div className="formulario">
              <Formulario open={open} setOpen={setOpen} />
            </div>
            <div className="botones">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Cerrar
              </Button>
            </div>
          </Box>
        </Modal>
        {/* Modal editar */}
        
      
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
