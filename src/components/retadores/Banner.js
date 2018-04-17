import React from 'react'
import './Retadores.css';
import Logo from './../../assets/RMX.svg'
export const Banner = () => (
    <div className="banner-retadores">
        <div className="box_slide">
            <img src={Logo} className="logo bot" alt=""/>
            <div className="card_negra title-retadores">
                <p className="bot">
                <strong>LANZAR UN RETO: </strong>
                <br/>
                Una manera rápida y y rentable para resolver problemas, impulsar tu competividad y disminuir el riesgo en los procesos de innovación.
                </p>
            </div>
        </div>
    </div>
);