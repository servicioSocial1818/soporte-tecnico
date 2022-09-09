import React from 'react'
import Usuario from './usuario'

const ListadoUsuarios = ({ usuarios, setUsuario, eliminarUsuarios }) => {
  return (
    <div>
      {usuarios && usuarios.length ? (
        <>
          {usuarios.map(usuario => (
            <Usuario
              key={usuario.id}
              usuario={usuario}
              setUsuario={setUsuario}
            />
          ))}
        </>

      ) : (
        <>
          <p>No hay usuarios</p>
        </>
      )}
    </div>
  )

}

export default ListadoUsuarios