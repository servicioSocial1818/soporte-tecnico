import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useAppContext } from "../Context/context";
import { CircularProgress } from "@mui/material";
import Formulario from "./Formulario";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

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

const ListadoUsuarios = () => {
  const columns = [
    { field: "first_name", headerName: "Nombre", width: 130 },
    { field: "paternal_surname", headerName: "Paterno", width: 130 },
    { field: "maternal_surname", headerName: "Materno", width: 130 },
    { field: "username", headerName: "Usuario", width: 130 },
    { field: "role_name", headerName: "Rol", width: 100 },
    { field: "location", headerName: "Ubicación", width: 160 },
    { field: "gender", headerName: "Género", width: 100 },
    {
      field: "eliminar",
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                if (!window.confirm("¿Deseas eliminar este registro?")) {
                  return;
                }
                handleDelete(cellValues);
              }}
            >
              eliminar
            </Button>
          </>
        );
      },
    },
    {
      field: "editar",
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                handleEdit(cellValues);
              }}
            >
              editar
            </Button>
          </>
        );
      },
    },
  ];
  const { users, setUsers } = useAppContext();
  const [open, setOpen] = useState(false);
  const [idExtract, setIdExtract] = useState('');
  let history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.push("/responsables");
  };

  const handleDelete = async (cellValues) => {
    const datos = cellValues.row;
    const id = datos.idUser;
    console.log(id)
    console.log(datos);
    try {
      console.log(id);
      await fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE",
      });
      // callback(id);
      setUsers(
        users.filter((user) => {
          return user.idUser !== id;
        })
      );
      //console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (cellValues) => {
    const datas = cellValues.row;
    console.log(datas);
    // console.log(setUsers);
    
    const id = datas.idUser;
    setIdExtract(id);
    console.log(id);

    history.push(`/responsables/${id}/edit`);
    setOpen(true);
  };

  const loadUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    //console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      {users && users.length ? (
        <DataGrid
          columns={columns}
          rows={users}
          getRowId={(users) => users.idUser}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{
            borderColor: "transparent",
            color: "white",
            fontSize: "1.2 rem",
            height: "370px",
            width: "100%",
          }}
        />
      ) : (
        <>
          <CircularProgress color="inherit" size={24} />
          <p>Cargando usuarios...</p>
        </>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalStyles"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Usuario
          </Typography>
          <div className="formulario">
            <Formulario idExtract={idExtract} setIdExtract={setIdExtract} />
          </div>
          <div className="botones">
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ListadoUsuarios;
