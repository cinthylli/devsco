import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imagen1 from '../img/img1.png'
import imagen2 from '../img/img2.png'
import imagen3 from '../img/img3.png'
 
class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={imagen1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imagen2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={imagen3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};


export default Slider


