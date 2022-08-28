import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {


    constructor(props){
        super(props);
        this.state = {
            name: 'Carlos',
            lastname: 'Santaniello',
            email: 'csantaniello@mail.com',
            status: true,
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola, { this.state.name } !
                </h1>
                <h2>
                    ¡Tu apellido es { this.state.lastname }!
                </h2>
                <h2>
                    ¡Tu email es { this.state.email }!
                </h2>
                <h2>
                    Tu estado es: { this.state.status ? 'Contacto En Línea':'Contacto No Disponible' }
                </h2>
                <div>
                    <button onClick={this.isOnline}>
                        { this.state.status ? 'Conectado':'Desconectado' }
                    </button>
                </div>                                                                  
            </div>
        );
    }

    isOnline = () => {
        this.setState((prevState) => (
            {
                status: !prevState.status
            }
        ))
    }
    
}


Greeting.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    status: PropTypes.bool,
};


export default Greeting;
