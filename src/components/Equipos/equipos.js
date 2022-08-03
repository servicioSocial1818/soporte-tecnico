import React from "react";
import Button from "@material-ui/core/Button"
import { Select, FormControl, Box, MenuItem, Input, Modal, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles"
import "./equipos.css"
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
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'persona', headerName: 'Persona', width: 130},
    {field: 'apellidoP', headerName: 'ApellidoP', width: 150},
    {field: 'apellidoM', headerName: 'ApellidoM', width: 150},
    {field: 'nserie', headerName: 'Numero de Serie', width: 150},
    {field: 'marca', headerName: 'Marca', width: 70},
    {field: 'modelo', headerName: 'Modelo', width: 100},
    {field: 'color', headerName: 'Color', width: 100},
    {field: 'botones', headerName: 'botón', width: 150}
];

const rows = [
    {id: 1, persona: 'nombre1', apellidoP: 'apellidoP1', apellidoM: 'apellidoM1', nserie: '322423', marca: 'HP', modelo: 'HSDUF7', color: 'Negro'},
    {id: 2, persona: 'nombre2', apellidoP: 'apellidoP2', apellidoM: 'apellidoM2', nserie: '322423', marca: 'HP', modelo: 'HSDUF7', color: 'Blanco'},
    {id: 3, persona: 'nombre3', apellidoP: 'apellidoP3', apellidoM: 'apellidoM3', nserie: '322423', marca: 'HP', modelo: 'HSDUF7', color: 'Negro'},
    {id: 4, persona: 'nombre4', apellidoP: 'apellidoP4', apellidoM: 'apellidoM4', nserie: '322423', marca: 'HP', modelo: 'HSDUF7', color: 'Azul'},
    {id: 5, persona: 'nombre5', apellidoP: 'apellidoP5', apellidoM: 'apellidoM5', nserie: '322423', marca: 'HP', modelo: 'HSDUF7', color: 'Rojo'},
    {id: 6, persona: 'nombre6', apellidoP: 'apellidoP6', apellidoM: 'apellidoM6', nserie: '322423', marca: 'HP', modelo: 'HSDUF7', color: 'Rojo'},
    {id: 7, persona: 'nombre7', apellidoP: 'apellidoP7', apellidoM: 'apellidoM7', nserie: '322423', marca: 'HP', modelo: 'HSDUF7', color: 'Morado'}
];

const Equipos = () => {
    let history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className='container'>
        <div className='title'>
            <h1>Asignación de Equipos</h1>
        </div>
        <div className='button'>
            <BootstrapButton onClick={handleOpen}>
                Asignar Equipo
            </BootstrapButton>
        </div>
        <div className="filtrar">
            {/* <div className="seleccionar">
                <p>Mostrar</p>
                <Box sx={{ minWidth: 100 }}>
                    <FormControl>
                        <Select
                            label="10"
                        >
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
                <Input>
                </Input>
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
        <div className="contenedor">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>
                        
                    </Typography>
                </Box>
            </Modal>
        </div>
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => history.push("/menu")}
            >
                Atras
            </Button>
      </div>
    </div>
  )
}

const BootstrapButton = styled(Button)({
    color: 'white',

})
export default Equipos