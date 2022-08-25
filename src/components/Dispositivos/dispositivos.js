import React from "react";
import "./dispositivos.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Dispositivos = () => {
  let history = useHistory();

  return (
    <>
      <div className="container">
        <div className="titulo">
          <h1>Dispositivos</h1>
        </div>
        <div className="cards">
          <div className="dispositivos">
            <h2>PC</h2>
            <ul>
              <li>Num. DAP-SIS:0987654321</li>
              <li>Marca:HP</li>
              <li>Modelo:Z22</li>
              <li>Color:Negro</li>
              <li>Monitor:1080p</li>
              <li>Perifericos:raton y teclado logitech</li>
              <li>Almacienamiento:500 gb HDD</li>
              <li>Memoria RAM:16 GB 3200Hz</li>
              <li>Procesador:Ryzen 3 3200G</li>
              <li>Tarjeta Grafica:Integrada</li>
            </ul>
          </div>
          <div className="dispositivos">
            <h2>Impresora</h2>
            <ul>
              <li>Num. DAP-SIS:0987654321</li>
              <li>Marca:HP</li>
              <li>Modelo:Z22</li>
              <li>Color:Negro</li>
              <li>Monitor:1080p</li>
              <li>Perifericos:raton y teclado logitech</li>
              <li>Almacienamiento:500 gb HDD</li>
              <li>Memoria RAM:16 GB 3200Hz</li>
              <li>Procesador:Ryzen 3 3200G</li>
              <li>Tarjeta Grafica:Integrada</li>
            </ul>
          </div>
        </div>
          <div className="botonDisp">
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

export default Dispositivos;
