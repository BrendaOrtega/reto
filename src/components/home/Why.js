import React, { Component } from 'react';
import './Home.css';
import iconos from '../../assets/iconos.png';

class Why extends Component {

    render() {
        return (
            <div className="why">
                <h2>¿PORQUE RETO MÉXICO?</h2>
                <p>Nuestro proceso de innovación abierta basado en retos le permite
                    al talento innovador mexicano de cualquier parte del país generar
                    nuevas perspectivas de solución a los retos tecnológicos que le
                    interesan a empresas e instituciones públicas, dando como resultado
                    un proceso eficiente en tiempo y costo en el desarrollo de soluciones
                    innovadoras que se pueden traducir en oportunidades de negocio para
                    quien las propone.
                </p>
                <button className="btn_mas">Conoce más</button>
                <br/>
                <img  src={iconos} alt=""/>
            </div>
        );
    }
}

export default Why;