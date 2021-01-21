import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class BannerSlider extends Component {
    render() {
        return (
            <div>
                <Carousel className="carsoul-slider" align="center">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-70"
                            src="mision1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-70"
                            src="B.K._Arogyam_Intro.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-70"
                            src="Health_Revolution.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default BannerSlider;