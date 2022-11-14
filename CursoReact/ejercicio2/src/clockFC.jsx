import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ClockFC = (props) => {
    
    const [fecha, setFecha] = useState(newDate());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState('Martín');
    const [apellidos, setApellidos] = useState('San José');

    const componentDidMount = () => {
        setInterval (
            () => tick(), 1000
        );
    }

    const componentWillUnmount = () => {
        clearInterval (timerID);
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {fecha.toLocaleTimeString()}
            </h2>
            <h3>{nombre} {apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    )

    tick = () => {
        setEdad(edad + 1);
        return {
            ...
            fecha: newDate,
            edad
        }
    }
}

ClockFC.propTypes = {
    fecha: PropTypes.date,
    edad: PropTypes.number,
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
}

export default ClockFC;