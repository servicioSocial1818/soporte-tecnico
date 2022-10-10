import { Button } from "@material-ui/core";
import { handleDelete } from "./listadoUsuarios";
import { handleEdit } from "./listadoUsuarios";

// export const getColumns = (callback, callback2) => {
//   const columns = [
//     { field: "first_name", headerName: "Nombre", width: 130 },
//     { field: "paternal_surname", headerName: "Paterno", width: 130 },
//     { field: "maternal_surname", headerName: "Materno", width: 130 },
//     { field: "username", headerName: "Usuario", width: 130 },
//     { field: "role_name", headerName: "Rol", width: 100 },
//     { field: "location", headerName: "Ubicación", width: 160 },
//     { field: "gender", headerName: "Género", width: 100 },
//     {
//       field: "eliminar",
//       renderCell: (cellValues) => {
//         return (
//           <>
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={(e) => {
//                 if (!window.confirm("¿Deseas eliminar este registro?")) {
//                   return;
//                 }
//                 handleDelete(cellValues, callback);
//               }}
//             >
//               eliminar
//             </Button>
//           </>
//         );
//       },
//     },
//     {
//       field: "editar",
//       renderCell: (cellValues) => {
//         return (
//           <>
//             <Button 
//               variant="contained" 
//               color="primary" 
//               onClick={(e) => {
//                 handleEdit(cellValues, callback, callback2)
//               }}
//             >
//               editar
//             </Button>
//           </>
//         );
//       },
//     },
//   ];
//   return columns;
// };

export const inputsArray = [
  {
    id: 1,
    nombre: "nombre number1",
    apellidoP: "apellidoP1",
    apellidoM: "apellidoM1",
    edad: 32,
    telefono: "1234568523",
    correo: "correo@correo.com",
    usuario: "sadasd",
    genero: "M",
  },
  {
    id: 2,
    nombre: "nombre2",
    apellidoP: "apellidoP2",
    apellidoM: "apellidoM2",
    edad: 22,
    telefono: "3456778483",
    correo: "correo2@correo.com",
    usuario: "sad25d",
    genero: "M",
  },
  {
    id: 3,
    nombre: "nombre3",
    apellidoP: "apellidoP3",
    apellidoM: "apellidoM3",
    edad: 36,
    telefono: "8154554113",
    correo: "correo3@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
  {
    id: 4,
    nombre: "nombre4",
    apellidoP: "apellidoP4",
    apellidoM: "apellidoM4",
    edad: 42,
    telefono: "8154554113",
    correo: "correo4@correo.com",
    usuario: "sa51sd",
    genero: "M",
  },
  {
    id: 5,
    nombre: "nombre5",
    apellidoP: "apellidoP5",
    apellidoM: "apellidoM5",
    edad: 52,
    telefono: "8154554113",
    correo: "correo5@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
  {
    id: 6,
    nombre: "nombre6",
    apellidoP: "apellidoP6",
    apellidoM: "apellidoM6",
    edad: 52,
    telefono: "8154554113",
    correo: "correo6@correo.com",
    usuario: "sa51sd",
    genero: "M",
  },
  {
    id: 7,
    nombre: "nombre7",
    apellidoP: "apellidoP7",
    apellidoM: "apellidoM7",
    edad: 12,
    telefono: "8154554113",
    correo: "correo7@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
  {
    id: 8,
    nombre: "nombre8",
    apellidoP: "apellidoP8",
    apellidoM: "apellidoM8",
    edad: 52,
    telefono: "8154554113",
    correo: "correo8@correo.com",
    usuario: "sa51sd",
    genero: "F",
  },
];
