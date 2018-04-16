import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class Blog extends Component {

    render() {
        return (
            <div className="blog">
                <h2 className="bot">BLOG</h2>
                <div className="fl">
                    <div className="box_blog bot">
                        <div className="img_blog">
                            <img src="https://images.pexels.com/photos/128362/pexels-photo-128362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        </div>
                        <h3>Países innovadores</h3>
                        <p>21 Abril 2018 / <FontAwesome name="comment"/>33</p>

                        <p className="justi">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor...</p>
                    </div>
                    <div className="box_blog bot">
                        <div className="img_blog">
                            <img src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        </div>
                        <h3>Países innovadores</h3>
                        <p>21 Abril 2018 / <FontAwesome name="comment"/>33</p>

                        <p className="justi">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor...</p>
                    </div>
                    <div className="box_blog bot">
                        <div className="img_blog">
                            <img src="https://images.pexels.com/photos/285283/pexels-photo-285283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        </div>
                        <h3>Países innovadores</h3>
                        <p>21 Abril 2018 / <FontAwesome name="comment"/>33</p>

                        <p className="justi">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;