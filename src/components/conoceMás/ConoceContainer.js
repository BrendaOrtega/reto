import React, { Component } from "react";
import "./styles.css";
import reto from '../../assets/img.png'
import RMX from '../../assets/logo_white.png'
import sr from '../home/scrollReveal';

class ConoceContainer extends Component {
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
        <section className="banner-sabermas">
        <div className="box_slide">
          <div className="bot">
            <img src={RMX} className="logo" alt="RMXLogo" />
              <p className="bot text_saber">
                <span style={{fontWeight:"1000"}}>Traspasa los límites de tu organización</span><br/>
                con la innovación abierta basada en retos
            </p>
            </div>
        </div>
        </section>
        <section className="container-frase bot">
          <span>
            <h2><strong>La innovación abierta te permite acceder al flujo de conocimiento del exterior para acelerar los procesos internos de innovación y la aplicación de la misma</strong></h2>
          </span>
        </section>
        <section className="container-main">
          <span className="title bot">
            <strong>Identificar un problema para convertirlo en reto</strong>
            <br/>
            permite atraer soluciones innovadoras
            <br />
            del talento creativo del país.
          </span>
          <div className="big-box">
          <div className="row bot">
            <div className="column-txt">
              <span>
                <h2>¿Que es Reto México?</h2>
                <p>Es una iniciativa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sequi quae optio officia ab? Quas repudiandae magni nesciunt pariatur repellendus, natus excepturi, voluptas praesentium vel ratione nemo dolor autem molestias!</p>
              </span>
            </div>
            <div className="column-img">
              <img src={reto} alt="RMX"/>
            </div>
          </div>

          <div className="row bot">
            <div className="column-img">
              <img src={reto} alt="RMX" />
            </div>
            <div className="column-txt">
              <span>
                <h2>¿Que es Reto México y por que es importante?</h2>
                <p>Es una iniciativa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sequi quae optio officia ab? Quas repudiandae magni nesciunt pariatur repellendus, natus excepturi, voluptas praesentium vel ratione nemo dolor autem molestias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed corporis dolore neque ipsum laboriosam aperiam eius amet maiores aliquam? Quaerat, quos asperiores earum unde nemo ab reprehenderit autem architecto saepe!</p>
              </span>
            </div>
          </div>

            <div className="row bot">
              <div className="column-txt">
                <span>
                  <h2>¿Por qué resolver retos en lugar de atacar directamente el problema?</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium vel id voluptatibus porro alias. Iste id distinctio deleniti facere atque recusandae voluptate aut nesciunt perspiciatis accusantium vero, sint facilis autem. Es una iniciativa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sequi quae optio officia ab? Quas repudiandae magni nesciunt pariatur repellendus, natus excepturi, voluptas praesentium vel ratione nemo dolor autem molestias!</p>
                </span>
              </div>
              <div className="column-img">
                <img src={reto} alt="RMX" />
              </div>
            </div>
          </div>
        </section>
        <section className="container-creencias">
          <div className="overlay">
            <h2 className="bot">Nuestras creencias/ Creemos en.</h2>
            <div className="big-box">
              <div className="box bot">
                <h2>Cantidad trae calidad.</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error inventore in similique quam perferendis consequuntur rem
                  ducimus nesciunt velit? Delectus, consequuntur? Eligendi,
                  architecto similique harum incidunt accusamus assumenda itaque
                  hic.
                </p>
              </div>
              <div className="box bot">
                <h2>Velocidad y eficiencia.</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus nesciunt, dolore magnam, tenetur vel fuga eum neque
                  exercitationem sit quasi veniam suscipit eaque ducimus
                  praesentium quia voluptate ab dolorum cupiditate!
                </p>
              </div>
              <div className="box bot">
                <h2>Confianza en México.</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorem, facere magni. Adipisci ex illo vero id, dolor
                  excepturi nemo deserunt consequatur dicta veritatis, numquam
                  nihil officiis? Explicabo harum dolorum maxime?
                </p>
              </div>
              <div className="box bot">
                <h2>Colaboración y diversidad.</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio id quam libero, quis magnam, ducimus atque
                  perferendis eligendi magni recusandae nam praesentium voluptas
                  enim unde. Suscipit magni necessitatibus illum in?
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ConoceContainer;
