import React, { Component } from 'react';
import './Home.css';
import concamin from '../../assets/index.png';
import ca from '../../assets/cerv.png';
import profeco from '../../assets/profeco.png';

class Retos extends Component {

    render() {
        return (
            <div className="retadores bot">
                <h2 className="bot">RETADORES QUE HAN PARTICIPADO</h2>
                <div className="fl">
                    <img className="bot" src={concamin} alt=""/>
                    <img className="bot" src={ca} alt=""/>
                    <img className="bot" src={profeco} alt=""/>
                    <img className="bot" src={concamin} alt=""/>
                    <img className="bot" src={ca} alt=""/>
                    <img className="bot" src={profeco} alt=""/>
                </div>
            </div>
        );
    }
}

export default Retos;