import "./responsables.css";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import PersonSharp from "@material-ui/icons/PersonSharp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import { Input, Box } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from './checkJson';
// import { useAppContext } from "../Context/context";


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

const Responsables = ({ usuarios, setUsuarios, usuario, setUsuario }) => {
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [apellidoP, setApellidoP] = useState('');
  const [apellidoM, setApellidoM] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  useEffect(() => {
    if (Object.keys(usuario).length > 0) {
      setApellidoP(usuario.apellidoP);
      setApellidoM(usuario.apellidoM);
      setNombre(usuario.nombre);
      setFechaNacimiento(usuario.fechaNacimiento);
      setGenero(usuario.genero);
      setTelefono(usuario.telefono);
      setCorreo(usuario.correo);
      setUsername(usuario.username);
      setPassword(usuario.password);
      setRol(usuario.rol);
      setUbicacion(usuario.ubicacion);
    }
  }, [usuario]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = e => {
    e.preventDefault();

    //validacion para el formulario
    if ([apellidoP, apellidoM, nombre, fechaNacimiento, genero, telefono, correo, username, password, rol, ubicacion].includes('')) {
      console.log('Todos los campos son obligatorios');
      return;
    }

    //Objeto de Usuario
    const objetoUsuario = {
      apellidoM,
      apellidoP,
      nombre,
      fechaNacimiento,
      genero,
      telefono,
      correo,
      username,
      password,
      rol,
      ubicacion
    }

    if (usuario.id) {
      //Editar un registro
      objetoUsuario.id = usuario.id;

      const usuariosActualizados = usuarios.map(usuarioState => usuarioState.id ===
        usuario.id ? objetoUsuario : usuarioState)
      //.map retorna un arreglo nuevo y se puede setear a usuarios

      setUsuarios(usuariosActualizados);
      setUsuario({})
    } else {
      //Nuevo Registro
      objetoUsuario.id = generarId();
      setUsuarios([...usuarios, objetoUsuario]);

    }

    console.log(objetoUsuario);

    //Reiniciar el nombre
    setApellidoP('')
    setApellidoM('')
    setNombre('')
    setFechaNacimiento('')
    setGenero('')
    setTelefono('')
    setCorreo('')
    setUsername('')
    setPassword('')
    setRol('')
    setUbicacion('')
  }

  return (
    <>
      <div className="containerResponsables">
        <div className="title">
          <PersonSharp fontSize="large" />
          <h2>Administrar Usuarios</h2>
        </div>
        <div className="button">
          <PersonAddIcon />
          <BootstrapButton onClick={handleOpen}>
            Agregar Usuario
          </BootstrapButton>
        </div>
        <div className="filtrar">
          {/* <div className="seleccionar">
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
          </div> */}

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
              borderColor: 'transparent',
              color: 'white',
              fontSize: '1.2rem'
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
              Agregar Nuevo Usuario
            </Typography>
            <div className="formulario">
              <form
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="ap">
                    <label>Apellido Paterno</label>
                    <input
                      id="apellidoP"
                      placeholder="Apellido Paterno"
                      type="text"
                      value={apellidoP}
                      onChange={e => setApellidoP(e.target.value)}
                    />
                  </div>
                  <div className="apm">
                    <label>Apellido Materno</label>
                    <input
                      id="apellidoM"
                      placeholder="Apellido Materno"
                      type="text"
                      value={apellidoM}
                      onChange={e => setApellidoM(e.target.value)}
                    />
                  </div>
                  <div className="nombre">
                    <label>Nombre</label>
                    <input
                      id="nombre"
                      placeholder="Nombre"
                      type="text"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="fechaNacimiento">
                    <label>Fecha de Nacimiento</label>
                    <input
                      id="fechaNacimiento"
                      type="date"
                      value={fechaNacimiento}
                      onChange={e => setFechaNacimiento(e.target.value)}
                    />
                  </div>
                  <div className="genero">
                    <label htmlFor="genero">Género</label>
                    <select
                      id="genero"
                      value={genero}
                      onChange={e => setGenero(e.target.value)}
                    >
                      <option value="F">Femenino</option>
                      <option value="M">Masculino</option>
                    </select>
                  </div>
                  <div className="telefono">
                    <label>Télefono</label>
                    <input
                      id="telefono"
                      type="text"
                      placeholder="Telefono"
                      value={telefono}
                      onChange={e => setTelefono(e.target.value)}
                    />
                  </div>
                  <div className="correo">
                    <label>Correo</label>
                    <input
                      id="correo"
                      type="email"
                      placeholder="Correo"
                      value={correo}
                      onChange={e => setCorreo(e.target.value)}
                    ></input>
                  </div>
                  <div className="usuario">
                    <label>Usuario</label>
                    <input
                      id="usuario"
                      type="text"
                      placeholder="Usuario"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="contra">
                    <label>Contraseña</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={e => setPassword(e.target.value)}

                    />
                  </div>
                </div>
                <div className="colum">
                  <div className="usuario">
                    <label htmlFor="rol">Rol de Usuario</label>
                    <select
                      id="rol"
                      value={rol}
                      onChange={e => setRol(e.target.value)}
                    >
                      <option value="C">Cliente</option>
                      <option value="A">Administrador</option>
                    </select>
                  </div>
                </div>
                <div className="ubica">
                  <label>Ubicación</label>
                  <textarea
                    id="ubicacion"
                    value={ubicacion}
                    onChange={e => setUbicacion(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="botones">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Cerrar
              </Button>
              <Button variant="contained" color="primary">
                Agregar
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
    </>
  );
};

const BootstrapButton = styled(Button)({
  color: "white",
});

export default Responsables;
