import React, { useEffect, useState } from "react";
import Error from "../Error/error";
import { Button } from "@material-ui/core";
import "./equipos.css";
import { useAppContext } from "../Context/context";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const FormularioEquipos = ({ add, setOpen, setAdd }) => {
  const {
    users,
    setUsers,
    createNotification,
    assignments,
    setAssignments,
    editing,
    setEditing,
    equipos,
    setEquipos
  } = useAppContext();
  const [noAssignmentDevice, setNoAssignmentDevice] = useState([]);
  const [textUser, setTextUser] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsDev, setSuggestionsDev] = useState([]);
  const [textDevice, setTextDevice] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const [assignment, setAssignment] = useState({
    idUser: "",
    idDevice: "",
    manager: "",
  });

  const [device, setDevice] = useState({
    description_device: "",
    serie_number: "",
    device_type: "",
    trademark: "",
    model: "",
    monitor: "",
    perifericos: "",
    storage_device: "",
    ram: "",
    processor: "",
    graphic_card: "",
    color: "",
  });

  let history = useHistory();

  function handleClose() {
    setOpen(false);
    setAdd(false);
    history.push("/asignaciones");
  }

  async function loadAssignments() {
    const response = await fetch("http://localhost:4000/assignments");
    const data = await response.json();
    setAssignments(data);
  }

  async function getAllDevices() {
    try {
      const res = await fetch(`http://localhost:4000/devices`);
      const data = await res.json();
      setEquipos(data);
    } catch (e) {
      console.log(e);
    }
  };

  const loadDevice = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/devices/${params.id}`);
      const data = await res.json();
      setDevice({
        description_device: data.description_device,
        serie_number: data.serie_number,
        device_type: data.device_type,
        trademark: data.trademark,
        model: data.model,
        monitor: data.monitor,
        perifericos: data.perifericos,
        storage_device: data.storage_device,
        ram: data.ram,
        processor: data.processor,
        graphic_card: data.graphic_card,
        color: data.color,
      });
      setEditing(true);
    } catch (e) {
      console.log(e);
    }
  };

  const getAssignmentsWithoutDevices = async () => {
    try {
      const res = await fetch("http://localhost:4000/assignments-no-devices");
      const data = await res.json();
      // console.log(data);
      setNoAssignmentDevice(data);
      // console.log("equipooooss", equipos);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/users");
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
    getAllUsers();
  }, []);

  useEffect(() => {
    if (params.id) {
      loadDevice(params.id);
    }
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
      matches = noAssignmentDevice.filter((device) => {
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
    setLoading(true);

    if (editing) {
      const response = await fetch(
        `http://localhost:4000/devices/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(device),
        }
      );
      createNotification(
        "success",
        "Datos validados",
        "Equipo modificado con éxito"
      );
    } else {
      if (!device.serie_number && !device.device_type) {
        const res = await fetch("http://localhost:4000/assignments", {
          method: "POST",
          body: JSON.stringify(assignment),
          headers: { "Content-Type": "application/json" },
        });

        // const data = await res.json();
        // console.log(data);

        createNotification(
          "success",
          "Datos registrados",
          "Asignación registrada con éxito"
        );
      } else {
        const res = await fetch("http://localhost:4000/devices", {
          method: "POST",
          body: JSON.stringify(device),
          headers: { "Content-Type": "application/json" },
        });

        createNotification(
          "success",
          "Datos validados",
          "Equipo registrado con éxito"
        );

        const data = await res.json();
        console.log(data);
      }
    }

    setEditing(false);
    loadAssignments();
    handleClose();
    getAllDevices();
  };

  const handleChange = (e) => {
    setDevice({ ...device, [e.target.name]: e.target.value });
  };
  return (
    <>
      {add ? (
        <>
          <form>
            <div className="devicesForm">
              <div className="numS">
                <label>Número de serie</label>
                <input
                  type="Number"
                  placeholder="12345"
                  value={device.serie_number}
                  name="serie_number"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="deviceT">
                <label>Tipo de dispositivo</label>
                <select
                  name="device_type"
                  value={device.device_type}
                  onChange={handleChange}
                >
                  <option value="" selected disabled hidden>
                    --Seleccionar--
                  </option>
                  <option value="Ordenador">Ordenador</option>
                </select>
              </div>

              <div className="tradeMark">
                <label>Marca</label>
                <input
                  placeholder="Ej: DELL"
                  name="trademark"
                  value={device.trademark}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="model">
                <label>Modelo</label>
                <input
                  name="model"
                  value={device.model}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="monitor">
                <label>Monitor</label>
                <input
                  placeholder="Ej: 24' DELL"
                  name="monitor"
                  value={device.monitor}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="perifericos">
                <label>Periféricos</label>
                <input
                  placeholder="Ej: mouse, teclado y webcam"
                  name="perifericos"
                  value={device.perifericos}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="storage">
                <label>Almacenamiento</label>
                <input
                  placeholder="Ej: HDD 500GB"
                  name="storage_device"
                  value={device.storage_device}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="ram">
                <label>RAM</label>
                <input
                  placeholder="Ej: 8gb"
                  name="ram"
                  value={device.ram}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="processador">
                <label>Procesador</label>
                <input
                  placeholder="Ej: Intel Core i5-10505"
                  name="processor"
                  value={device.processor}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="graphicCard">
                <label>Tarjeta Gráfica</label>
                <input
                  placeholder="Ej: NVIDIA GeForce RTX 4090"
                  name="graphic_card"
                  value={device.graphic_card}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="color">
                <label>Color</label>
                <input
                  name="color"
                  value={device.color}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="botones">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!device.serie_number || !device.device_type}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : editing ? (
                  "Editar"
                ) : (
                  "Crear"
                )}
              </Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <form>
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
                  placeholder="Nombre"
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
                        // value={assignment.idUser = idU}
                        // name="idUser"
                        // onChange={handleChangeManager}
                        onClick={() => {
                          onSuggestHandler(
                            `${suggestion.paternal_surname} ${suggestion.maternal_surname} ${suggestion.first_name}`,
                            setAssignment({
                              ...assignment,
                              idUser: suggestion.idUser,
                            })
                            // console.log(assignment)
                            // setIdU(suggestion.idUser)
                          );
                        }}
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
                        // value={assignment.idDevice = idD}
                        // name="idDevice"
                        // onChange={handleChangeManager}
                        onClick={() =>
                          onSuggestDev(
                            `${suggestion.serie_number} ${suggestion.trademark} ${suggestion.model}`,
                            // setIdD(suggestion.idDevice)

                            setAssignment({
                              ...assignment,
                              idDevice: suggestion.idDevice,
                            })
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
                disabled={!textDevice || !textUser || !assignment.manager}
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
