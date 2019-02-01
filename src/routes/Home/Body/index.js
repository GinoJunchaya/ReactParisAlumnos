import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Body extends Component {
    render() {
        var carouselOne = require("./carousel-01.jpg");
        var carouselTwo = require("./carousel-02.jpg");
        var carouselThree = require("./carousel-03.jpg");
        return (
            <section style={{marginTop: "100px"}}>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselOne}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselTwo}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselThree}/>
                    </Carousel.Item>                                        
                </Carousel>
            </section>
        );
    }
}

export default Body;