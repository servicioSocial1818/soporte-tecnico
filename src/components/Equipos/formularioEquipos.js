import React, { useEffect, useState } from "react";
import Error from "../Error/error";
import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import "./equipos.css";
import { useAppContext } from "../Context/context";
import { CircularProgress } from "@mui/material";
const FormularioEquipos = ({ add }) => {
  
  const {equipo, setEquipo} = useAppContext();

  const [error, setError] = useState(false);

  const columns = [
    
      { field: "serie_number", headerName: "Numero de serie", width: 100 },
      { field: "trademark", headerName: "Marca", width: 100 },
      { field: "model", headerName: "Modelo", width: 100 },
      { field: "storage_device", headerName: "Almacenamiento", width: 100 },
      { field: "ram", headerName: "Ram", width: 100 },
    
  ];

  const getAssignmentsWithoutDevices = async () => {
    try {
      const res = await fetch("http://localhost:4000/assignments-no-devices")
      const data = await res.json();
      console.log(data);
      setEquipo(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAssignmentsWithoutDevices();
  },[])

  const users = [
    {
      label: "first_name",
    },
  ];
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = () => {};

  return (
    <>
      {add ? (
        <>
          <form>
            <div className="devicesForm">
              <div className="numS">
                <label>Número de serie</label>
                <input type="Number"></input>
              </div>

              <div className="deviceT">
                <label>Tipo de dispositivo</label>
                <select name="deviceType">
                  <option value="" selected disabled hidden>
                    --Seleccionar--
                  </option>
                  <option value="Ordenador">Ordenador</option>
                </select>
              </div>

              <div className="tradeMark">
                <label>Marca</label>
                <input></input>
              </div>

              <div className="model">
                <label>Modelo</label>
                <input></input>
              </div>

              <div className="monitor">
                <label>Monitor</label>
                <input placeholder="Ej: 24' DELL"></input>
              </div>

              <div>
                <label className="perifericos">Periféricos</label>
                <input placeholder="Ej: mouse, teclado y webcam"></input>
              </div>

              <div>
                <label className="storage">Almacenamiento</label>
                <input placeholder="Ej: HDD 500GB"></input>
              </div>

              <div>
                <label className="ram">RAM</label>
                <input placeholder="Ej: 8gb"></input>
              </div>

              <div>
                <label className="processador">Procesador</label>
                <input placeholder="Ej: Intel Core i5-10505"></input>
              </div>

              <div className="graphicCard">
                <label>Tarjeta Gráfica</label>
                <input placeholder="Ej: NVIDIA GeForce RTX 4090"></input>
              </div>

              <div className="color">
                <label>Color</label>
                <input></input>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <form>
            {error && (
              <Error>
                <p>Todos los campos son obligatorios</p>
              </Error>
            )}
            <div className="row">
              <div className="encargado">
                <label>Encargado</label>
                <select name="Responsable">
                  <option value="seleccionar" disabled>
                    --Seleccionar--
                  </option>
                  <option value="JOSE ALEJANDRO CANSECO FLORES">
                    D.I. JOSÉ ALEJANDRO CANSECO FLORES
                  </option>
                  <option value="ROBERTO LIRA MENDOZA">
                    ROBERTO LIRA MENDOZA
                  </option>
                  <option value="LUIS ALFREDO SANCHEZ SANDIN">
                    LUIS ALFREDO SÁNCHEZ SANDÍN
                  </option>
                </select>
              </div>

              <div className="user">
                <label>Usuario</label>
                <input placeholder="usuario"></input>
              </div>
              <div className="deviceTable"></div>
            </div>
            {equipo && equipo.length ? (
              <DataGrid
                rows={equipo}
                columns={columns}
                getRowId={(equipos) => equipos.idDevice}
                pageSize={5}
                rowsPerPageOptions={[5]}
                sx={{
                  borderColor: "transparent",
                  color: "white",
                  fontSize: "1.2 rem",
                  height: "386px",
                  width: "100%",
                }}
              />

            ) : (
              <>
              <CircularProgress color="inherit" size={24} />
              <p>Cargando Equipos Disponibles...</p>
              </>
            )}
            <div className="botones">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Asignar
              </Button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default FormularioEquipos;
