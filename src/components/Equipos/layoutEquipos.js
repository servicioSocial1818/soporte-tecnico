import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Modal, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import "./equipos.css";
import ComputerIcon from "@mui/icons-material/Computer";
import AddIcon from "@mui/icons-material/Add";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import FormularioEquipos from "./formularioEquipos";
import ListadoEquipos from "./listadoequipos";
import PersonalVideoSharpIcon from "@mui/icons-material/PersonalVideoSharp";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

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

const EquiposLayout = () => {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [eq, SetEq] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleOpenAdd = () => {
    setAdd(true);
    console.log("añadir");
  };

  const handleClose = () => {
    setOpen(false);
    setAdd(false);
  };

  const btnChange = () => {
    SetEq(!eq);
  };

  return (
    <div className="container">
      <div className="title">
        {eq ? (
          <>
            <ComputerIcon fontSize="large" />
            <h1>Equipos</h1>
          </>
        ) : (
          <>
            <AssignmentIndOutlinedIcon fontSize="large" />
            <h1>Asignación de Equipos</h1>
          </>
        )}
      </div>
      <div className="button">
        <BootstrapButton onClick={handleOpen}>
          <AddIcon />
          Asignar Equipo
        </BootstrapButton>
        {eq ? (
          <BootstrapButton onClick={btnChange}>
            <AssignmentIndOutlinedIcon />
            Mostrar Asignaciones
          </BootstrapButton>
        ) : (
          <BootstrapButton onClick={btnChange}>
            <PersonalVideoSharpIcon />
            Mostrar Equipos
          </BootstrapButton>
        )}
      </div>

      <div className="btnAdd">
        <BootstrapButton onClick={handleOpenAdd}>
          <QueuePlayNextIcon />
          Añadir Equipo
        </BootstrapButton>
      </div>
      <ListadoEquipos eq={eq} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalStyles"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Asignar Equipo
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

      <Modal
        open={add}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalStyles"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Añadir Equipo
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
  );
};

const BootstrapButton = styled(Button)({
  color: "white",
});

export default EquiposLayout;
