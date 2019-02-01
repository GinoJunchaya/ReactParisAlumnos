import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './header.css';

class Header extends Component{
    render(){
        var logo = require("./logo.png");
        return(
            <header className="container-header">
                <section className="container-img" onClick={this.goHome.bind(this)}>
                    <img className="img-logo" src={logo} alt=""/>
                </section>
                <section className="container-menu">
                    <Button className="button-menu" onClick={this.goProductos.bind(this)}>Productos</Button>
                    <Button className="button-menu" onClick={this.goSabores.bind(this)}>Sabores</Button>
                    <Button className="button-menu" onClick={this.goLocales.bind(this)}>Locales</Button>
                </section>
            </header>
        );
    }

    goProductos(e){
        e.preventDefault();
        this.props.history.push("/productos");
    }

    goSabores(e){
        e.preventDefault();
        this.props.history.push("/sabores");
    }

    goLocales(e){
        e.preventDefault();
        this.props.history.push("/locales");
    }

    goHome(e){
        e.preventDefault();
        this.props.history.push("/home");        
    }

}

export default Header;