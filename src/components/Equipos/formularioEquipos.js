import React, { useEffect, useState } from 'react'
import Error from '../Error/error'
import { Button } from '@material-ui/core'

const FormularioEquipos = ({ equipos, setEquipos, equipo, setEquipo }) => {
    const [numeroSerie, setNumeroSerie] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(equipo).length > 0) {
            setNumeroSerie(equipo.numeroSerie);
            setMarca(equipo.marca);
            setModelo(equipo.modelo);
            setColor(equipo.color)
        }
    }, [equipo]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)
        return random + fecha;
    }

    const handleSubmit = () => {
        
    }

    return (
        <>
            <form>
                {error && (
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                )}
                <div className="row">
                    <div className="usuario">
                        <label>Encargado</label>
                        <select name="Responsable">
                            <option value="seleccionar" disabled>--Seleccionar--</option>
                        </select>
                    </div>
                    <div className="user">
                        <label>Usuario</label>
                        <input placeholder="usuario"></input>
                    </div>
                    <div className="APM">
                        <label>Num Serie</label>
                        <input
                            placeholder="Número de Serie"
                            type="Number"
                        >
                        </input>
                    </div>
                    <div className="equipo">
                        <label>Tipo de Equipo</label>
                        <select>
                            <option value="seleccionar" disabled>--Seleccionar--</option>
                        </select>
                    </div>
                    <div className="Marca">
                        <label>Marca</label>
                        <input></input>
                    </div>
                    <div className="Modelo">
                        <label>Modelo</label>
                        <input></input>
                    </div>
                    <div className="color">
                        <label>Color</label>
                        <input></input>
                    </div>
                    <div className="Descripcion">
                        <label>Descripción</label>
                        <textarea></textarea>
                    </div>
                    <div className="Monitor">
                        <label>Monitor</label>
                        <input></input>
                    </div>
                    <div className="Perifericos">
                        <label>Perifericos</label>
                        <input></input>
                    </div>
                    <div className="Almacenamiento">
                        <label>Almacenamiento</label>
                        <input></input>
                    </div>
                    <div className="Memoria">
                        <label>Memoria RAM</label>
                        <input></input>
                    </div>
                    <div className="Procesador">
                        <label>Procesador</label>
                        <input></input>
                    </div>
                    <div className="tarjeta">
                        <label>Tarjeta Gráfica</label>
                        <input></input>
                    </div>
                </div>
                <div className="botones">
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Agregar
                    </Button>
                </div>
            </form>
        </>
    )
}

export default FormularioEquipos