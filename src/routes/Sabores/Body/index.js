import React, {Component} from 'react';
import Sabor from './Sabor';
import {CardGroup} from 'react-bootstrap';

class Body extends Component{

    render(){

        var sabores = this.getSabores();
        var saboresMostrar = sabores.map( (sabor) => (
            <Sabor titulo={sabor.titulo} imagen={sabor.imagen} />
        ));
        
        return(
            <CardGroup style={{marginTop: "100px"}}>
                {saboresMostrar}
            </CardGroup>
        );
    }

    getSabores(){
        var sabores = [{
            titulo: "Dulce de leche",
            imagen: require("./dulce-de-leche.jpg")
        },
        {
            titulo: "Chocolate Paris",
            imagen: require("./chocolate-paris.jpg")
        },
        {
            titulo: "Paris",
            imagen: require("./paris.jpg")
        },
        {
            titulo: "Kiwi",
            imagen: require("./kiwi.jpg")
        },
        {
            titulo: "Tramontana",
            imagen: require("./tramontana.jpg")
        }];
        return sabores;
    }
}

export default Body;