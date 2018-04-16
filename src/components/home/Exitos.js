import React, { Component } from 'react';
import './Home.css';

class Exitos extends Component {

    render() {
        return (
            <div className="exitos">
                <h2>CASOS DE ÉXITO</h2>
                <p>¡Tú como ellos también puedes ser un ganador!</p>
                <div className="fl">
                    <div style={{margin:"0 20px"}}>
                        <iframe className="ex_video"  height="300" src="https://www.youtube.com/embed/6z6nXkNfB68" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <div style={{margin:"0 20px"}}>
                        <iframe className="ex_video" height="300" src="https://www.youtube.com/embed/nZjiF0KTR-E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exitos;