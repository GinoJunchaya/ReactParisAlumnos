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
                        <img src={carouselOne}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carouselTwo}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carouselThree}/>
                    </Carousel.Item>                                        
                </Carousel>
            </section>
        );
    }
}

export default Body;