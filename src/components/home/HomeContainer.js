import React, { Component } from 'react';
import Slide from './Slide';
import About from './About';
import Retos from './Retos';

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <Slide />
                <About />
                <Retos />
            </div>
        );
    }
}

export default HomeContainer;