import * as React from "react";
import "./inventario.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const Inventario = () => {
  let history = useHistory();
  return (
    <>
      <div className="container">
        <div className="titulo">
          <h1>Inventario</h1>
        </div>
        <div className="filtro">
          <p>Buscar por: </p>
          <div className="busqueda">
            <select name="select">
              <option value="value1">Value 1</option>
              <option value="value2" selected>
                Value 2
              </option>
              <option value="value3">Value 3</option>
            </select>
            <Paper
              component="form"
              sx={{
                p: "1px 1px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div className="contenedor">
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
      </div>
    </>
  );
};

export default Inventario;
