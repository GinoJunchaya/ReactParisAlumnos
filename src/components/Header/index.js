import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './header.css';

class Header extends Component{
    render(){
        var logo = require("./logo.png");
        return(
            <header className="container-header">
                <section className="container-img">
                    <img className="img-logo" src={logo} alt=""/>
                </section>
                <section className="container-menu">
                    <Button className="button-menu">Productos</Button>
                    <Button className="button-menu">Sabores</Button>
                    <Button className="button-menu">Locales</Button>
                </section>
            </header>
        );
    }
}

export default Header;