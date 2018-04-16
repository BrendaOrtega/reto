import React, { Component } from 'react';
import './Home.css';
import concamin from '../../assets/index.png';
import ca from '../../assets/cerv.png';
import profeco from '../../assets/profeco.png';

class Retos extends Component {

    render() {
        return (
            <div className="retadores">
                <h2>RETADORES QUE HAN PARTICIPADO</h2>
                <div className="fl">
                    <img src={concamin} alt=""/>
                    <img src={ca} alt=""/>
                    <img src={profeco} alt=""/>
                    <img src={concamin} alt=""/>
                    <img src={ca} alt=""/>
                    <img src={profeco} alt=""/>
                </div>
            </div>
        );
    }
}

export default Retos;