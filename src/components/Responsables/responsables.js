import "./responsables.css"
import Button from "@material-ui/core/Button"
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles"
import PersonSharp from "@material-ui/icons/PersonSharp"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import { Input, Box, MenuItem, FormControl, Select } from "@material-ui/core"
const Responsables = () => {
    let history = useHistory();
  return (
    <div className='containerResponsables'>
        <div className="title">
                <PersonSharp fontSize="large"/>
            <h2>
                Administrar Responsables
            </h2>
        </div>
        <div className="button">
            <PersonAddIcon/>
            <BootstrapButton>
                Agregar Usuario
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

export default Responsables