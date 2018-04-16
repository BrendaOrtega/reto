import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import logo_white from '../../assets/logo_white.png';

class Contacto extends Component {

    render() {
        return (
            <div className="contacto">
                <h2 className="bot">CONTACTÁNOS</h2>
                <div className="flexi">
                    <div className="data bot">
                        <img src={logo_white} alt=""/>
                        <p> <FontAwesome name="map-marker"/> Manuel Maria Contreras 33 <br/>Piso 4, Cuauhtémoc, CDMX</p>
                        <p><FontAwesome name="phone"/> 55 55910091 ext 149</p>
                        <p><FontAwesome name="envelope"/> contacto@retomexico.org</p>
                        <p><FontAwesome name="globe"/> www.retomexico.org</p>
                        <p><FontAwesome name="clock"/> Horario: Lun-Vie (9 am - 7pm)</p>
                    </div>
                    <div className="abut bot">
                        <h3>ACERCA DE</h3>
                        <p>RETOMX es una iniciativa, que a través de una convocatoria
                            abierta del ecosistema de innovación, vincula las necesidades
                            de empresas o instituciones con las soluciones innovadoras de
                            estudiantes, investigadores, emprendedores o empresarios que
                            sean viables, rentables y desarrolladas con el uso de la
                            tecnología; y que dichas soluciones se traduzcan en una
                            oportunidad de negocio para los participantes.</p>
                        <p><FontAwesome name="facebook-f" size="2x"/><FontAwesome name="twitter"/> </p>
                    </div>
                    <div className="descript bot">
                        <p>Conoce más</p>
                        <p>Retos</p>
                        <p>Retadores</p>
                        <p>Participantes</p>
                        <p>Casos de éxito</p>
                        <p>Blog</p>
                        <p>Contacto</p>
                        <p>Preguntas Frecuentes</p>
                        <p>Aviso de Privacidad</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacto;