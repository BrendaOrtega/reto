import React, { Component } from 'react';
import './Home.css';
import icono from '../../assets/icono.png';

class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <div className="fl">
                        <div className="about_card">

                            <img className="icono bot" src={icono} alt=""/>
                            <h2 className="bot">Que es <span className="bleu">RETO MÉXICO?</span></h2><br/>
                            <p className="bot">RETOMX es una iniciativa que a través de una convocatoria abierta
                            del sisitema de innovación, vincula las necesidades de empresas o instituciones con soluciones
                                innovadoras de estudiantes...
                            </p>
                            <h4 className="bot">Leer más...</h4>
                        </div>
                        <div className="about_card">
                            <img className="icono bot" src={icono} alt=""/>
                            <h2 className="bot"> <span className="bleu">Retadores (Empresa)</span><br/> Busco soluciones</h2>
                            <p className="bot">RETOMX es una iniciativa que a través de una convocatoria abierta
                                del sisitema de innovación, vincula las necesidades de empresas o instituciones con soluciones
                                innovadoras de estudiantes...
                            </p>
                            <h4 className="bot">Leer más...</h4>
                        </div>
                        <div className="about_card">
                            <img className="icono bot" src={icono} alt=""/>
                            <h2 className="bot"> <span className="bleu">Innovadores</span><br/>Tengo Talento</h2>
                            <p className="bot">RETOMX es una iniciativa que a través de una convocatoria abierta
                                del sisitema de innovación, vincula las necesidades de empresas o instituciones con soluciones
                                innovadoras de estudiantes...
                            </p>
                            <h4 className="bot">Leer más...</h4>
                        </div>
                    </div>

                </div>
                <div className="video">
                    <h2 className="bot">CONOCE MÁS</h2>
                    <iframe className="vid bot" height="315" src="https://www.youtube.com/embed/5lrfakl22s0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

export default About;