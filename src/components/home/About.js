import React, { Component } from 'react';
import './Home.css';
import icono from '../../assets/icono.png';

class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <div className="flex">
                        <div className="about_card">

                            <img className="icono" src={icono} alt=""/>
                            <h2>Que es <span className="bleu">RETO MÉXICO?</span></h2><br/>
                            <p>RETOMX es una iniciativa que a través de una convocatoria abierta
                            del sisitema de innovación, vincula las necesidades de empresas o instituciones con soluciones
                                innovadoras de estudiantes...
                            </p>
                            <h4>Leer más...</h4>
                        </div>
                        <div className="about_card">
                            <img className="icono" src={icono} alt=""/>
                            <h2> <span className="bleu">Retadores (Empresa)</span><br/> Busco soluciones</h2>
                            <p>RETOMX es una iniciativa que a través de una convocatoria abierta
                                del sisitema de innovación, vincula las necesidades de empresas o instituciones con soluciones
                                innovadoras de estudiantes...
                            </p>
                            <h4>Leer más...</h4>
                        </div>
                        <div className="about_card">
                            <img className="icono" src={icono} alt=""/>
                            <h2> <span className="bleu">Innovadores</span><br/>Tengo Talento</h2>
                            <p>RETOMX es una iniciativa que a través de una convocatoria abierta
                                del sisitema de innovación, vincula las necesidades de empresas o instituciones con soluciones
                                innovadoras de estudiantes...
                            </p>
                            <h4>Leer más...</h4>
                        </div>
                    </div>

                </div>
                <div className="video">
                    <h2>CONOCE MÁS</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Grq_h8S_UlE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

export default About;