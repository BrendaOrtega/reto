import React, { Component } from 'react';
import './Home.css';
import logo from '../../assets/RMX.svg';
import gob from '../../assets/Sin título-1.png';
class Slide extends Component {

    render() {
        return (
            <div className="slide">
                <div className="box_slide">
                    <img className="logo" src={logo} alt=""/>
                  <div className="card_negra">
                        <p><strong>ACCEDE A UNA GRAN DIVERSIDAD DE PROPUESTAS DE SOLUCION</strong><br/>PARA LOS RETOS TECNOLÓGICOS Y DE NEGOCIO QUE TIENE TU ORGANIZACIÓN</p>
                  </div>
                    <div className="promotores">
                        <img src={gob} alt=""/>
                        <img src={gob} alt=""/>
                        <img src={gob} alt=""/>
                        <img src={gob} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;