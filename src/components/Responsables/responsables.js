import "./responsables.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import PersonSharp from "@material-ui/icons/PersonSharp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
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
  TableBody
} from "@material-ui/core";
import Modal from "@material-ui/core";
// import tableCellClasses from "@material-ui/core/Table"

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

const Responsables = () => {
  let history = useHistory();
  return (
    <>
    
        <div className="containerResponsables">
        <div className="title">
            <PersonSharp fontSize="large" />
            <h2>Administrar Responsables</h2>
        </div>
        <div className="button">
            <PersonAddIcon />
            <BootstrapButton>Agregar Usuario</BootstrapButton>
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell  align="center" component="th" scope="row">persona1</TableCell>
                    <TableCell align="center">1</TableCell>
                    <TableCell align="center">2</TableCell>
                    <TableCell align="center">3</TableCell>
                    <TableCell align="center">4</TableCell>
                    <TableCell align="center">5</TableCell>
                </TableRow>
            </TableBody>
            </Table>
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
