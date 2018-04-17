import React, { Component } from 'react';
import Slide from './Slide';
import About from './About';
import Retos from './Retos';
import Retadores from './Retadores';
import Why from './Why';
import Exitos from './Exitos';
import Blog from './Blog';
import Contacto from './Contacto';
import sr from './scrollReveal';

class HomeContainer extends Component {
  componentDidMount() {
    window.scroll(0, 0)
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '100%',
      scale: 1,
      easing: 'ease',
    }

    const config2 = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '100%',
      scale: 1,
      easing: 'ease',
    }
    const config3 = {
      origin: 'bottom',
      duration: 800,
      delay: 100,
      distance: '100%',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal('.right', config2);
    sr.reveal('.left', config);
    sr.reveal('.bot', config3);





  }

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