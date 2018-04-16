import React, { Component } from 'react';
import Slide from './Slide';
import About from './About';
import Retos from './Retos';
import Retadores from './Retadores';
import Why from './Why';
import Exitos from './Exitos';
import Blog from './Blog';
import Contacto from './Contacto';

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <Slide />
                <About />
                <Retos />
                <Retadores />
                <Why />
                <Exitos />
                <Blog />
                <Contacto />
            </div>
        );
    }
}

export default HomeContainer;