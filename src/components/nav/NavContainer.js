import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class NavContainer extends Component {

    render() {
        return (
            <div className="nav">
                <div className="nav_container">
                    <div >
                        <ul className="flex">
                            <Link to="/">
                                <li className="pestanas">Home</li>
                            </Link>
                            <Link to="sabermas" >
                                <li className="pestanas">Conoce más</li>
                            </Link>
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
            </div>
        );
    }
}

export default NavContainer;