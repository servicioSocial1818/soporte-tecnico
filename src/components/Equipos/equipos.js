import Button from "@material-ui/core/Button"
import { Select, FormControl, Box, MenuItem, Input } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles"
import "./equipos.css"

const Equipos = () => {
    let history = useHistory();
  return (
    <div className='container'>
        <div className='title'>
            <h1>Asignación de Equipos</h1>
        </div>
        <div className='button'>
            <BootstrapButton>
                Asignar Equipo
            </BootstrapButton>
        </div>
        <div className="filtrar">
            <div className="seleccionar">
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
            </div>

            <div className="buscar">
                <p>Buscar: </p>
                <Input>
                </Input>
            </div>
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