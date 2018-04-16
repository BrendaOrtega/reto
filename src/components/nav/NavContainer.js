import React, { Component } from 'react';
import './Nav.css';

class NavContainer extends Component {

    render() {
        return (
            <div className="nav_container">
                <div >
                    <ul className="flex">
                        <li className="pestanas">Home</li>
                        <li className="pestanas">Conoce más</li>
                        <li className="pestanas">Retos</li>
                        <li className="pestanas">Retadores</li>
                        <li className="pestanas">Participantes</li>
                        <li className="pestanas">Casos de éxito</li>
                        <li className="pestanas">Blog</li>
                        <li className="pestanas">Contacto</li>
                        <li className="pestanas">Preguntas Frecuentes</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavContainer;