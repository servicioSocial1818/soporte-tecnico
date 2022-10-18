import React, { useEffect, useState } from "react";
import Error from "../Error/error";
import { Button } from "@material-ui/core";
import "./equipos.css";
import { useAppContext } from "../Context/context";
import { useHistory } from "react-router-dom";

const FormularioEquipos = ({ add }) => {
  const { equipos, setEquipos, users, setUsers } = useAppContext();
  const [textUser, setTextUser] = useState("");
  const [error, setError] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsDev, setSuggestionsDev] = useState([]);
  const [textDevice, setTextDevice] = useState("");
  const [idU, setIdU] = useState();
  const [idD, setIdD] = useState();

  const [assignment, setAssignment] = useState({
    idUser: "",
    idDevice: "",
    manager: "",
  });

  let history = useHistory();

  const getAssignmentsWithoutDevices = async () => {
    try {
      const res = await fetch("http://localhost:4000/assignments-no-devices");
      const data = await res.json();
      // console.log(data);
      setEquipos(data);
      // console.log("equipooooss", equipos);
    } catch (error) {
      console.log(error);
    }
  };

  const getAssignmentsWithoutUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/assignments-no-users");
      const data = await res.json();
      setUsers(data);
      // console.log("usuarioooss", users);
    } catch (error) {
      console.log(error);
    }
  };

  const onSuggestHandler = (text) => {
    setTextUser(text);
    setSuggestions([]);
  };

  const onSuggestDev = (text) => {
    setTextDevice(text);
    setSuggestionsDev([]);
  };

  useEffect(() => {
    getAssignmentsWithoutDevices();
    getAssignmentsWithoutUsers();
  
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return (
          user.paternal_surname.match(regex) ||
          user.maternal_surname.match(regex) ||
          user.first_name.match(regex)
        );
      });
    }
    setSuggestions(matches);
    // console.log("sugerencias", suggestions);
    setTextUser(text);
  };

  const onChangeDevice = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = equipos.filter((device) => {
        const regex = new RegExp(`${text}`, "gi");
        return (
          device.serie_number.match(regex) ||
          device.trademark.match(regex) ||
          device.model.match(regex)
          );
        });
      }
      setSuggestionsDev(matches);
      // console.log("sugerencias devices", suggestions);
      setTextDevice(text);
    
  };

  const handleChangeManager = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch("http://localhost:4000/assignments", {
    //   method: "POST",
    //   body: JSON.stringify(assignment),
    //   headers: { "Content-Type": "application/json" },
    // });

    console.log(assignment);
  };

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
                <select 
                  name="manager"
                  value={assignment.manager}
                  onChange={handleChangeManager}
                >
                  <option selected value="" disabled hidden>
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
                <input
                  placeholder="Apellido Paterno"
                  onChange={(e) => onChangeHandler(e.target.value)}
                  value={textUser}
                  onBlur={() => {
                    setTimeout(() => {
                      setSuggestions([]);
                    }, 5000);
                  }}
                />
                <div className="sugContainer">
                  {suggestions &&
                    suggestions.map((suggestion, i) => (
                      <div
                        key={i}
                        className="userSuggestion"
                        value={assignment.idUser = idU}
                        name="idUser"
                        onChange={handleChangeManager}
                        onClick={() =>
                          onSuggestHandler(
                            `${suggestion.paternal_surname} ${suggestion.maternal_surname} ${suggestion.first_name}`,
                            // setIdU(suggestion.idUser)
                            // setAssignment({
                            //   idUser: suggestion.idUser
                            // }),
                            // console.log(assignment)
                          )
                        }
                      >
                        {`${suggestion.paternal_surname} ${suggestion.maternal_surname} ${suggestion.first_name}`}
                      </div>
                    ))}
                </div>
              </div>

              <div className="device">
                <label>Equipo</label>
                <input
                  placeholder="n° serie"
                  onChange={(e) => onChangeDevice(e.target.value)}
                  value={textDevice}
                />
                <div className="sugContainer">
                  {suggestionsDev &&
                    suggestionsDev.map((suggestion, i) => (
                      <div
                        key={i}
                        className="userSuggestion"
                        value={assignment.idDevice = idD}
                        name="idDevice"
                        onChange={handleChangeManager}
                        onClick={() =>
                          onSuggestDev(
                            `${suggestion.serie_number} ${suggestion.trademark} ${suggestion.model}`,
                            // setIdD(suggestion.idDevice)

                            // setAssignment({
                            //   idDevice: suggestion.idDevice
                            // }), 
                            // console.log(assignment)
                          )
                        }
                      >
                        {`${suggestion.serie_number} ${suggestion.trademark} ${suggestion.model}`}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="botones">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                // disabled={!assignment.idDevice || !assignment.idUser || !assignment.manager}
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
