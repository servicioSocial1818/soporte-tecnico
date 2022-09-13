import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Input, Modal, Typography } from "@material-ui/core";
import { columns, rows } from "./equiposJson";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import "./equipos.css";
import { DataGrid } from "@mui/x-data-grid";
import ComputerIcon from "@mui/icons-material/Computer";
import AddIcon from "@mui/icons-material/Add";
import FormularioEquipos from "./formularioEquipos";
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <div className="title">
        <ComputerIcon fontSize="large" />
        <h1>Asignación de Equipos</h1>
      </div>
      <div className="button">
        <BootstrapButton onClick={handleOpen}>
          <AddIcon />
          Asignar Equipo
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Asignar Equipo
          </Typography>
          <div className="formulario">
            <FormularioEquipos />
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
