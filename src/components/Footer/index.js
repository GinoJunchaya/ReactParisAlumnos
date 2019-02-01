import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { MdLocationOn } from "react-icons/md";
import {IoMdCall, IoIosMegaphone} from 'react-icons/io';
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="container-footer">
                <section className="col-md-6">
                    <p><h5>Casa Central</h5></p>
                    <p>
                        <h6>
                            <MdLocationOn />&nbsp;&nbsp;
                            <span>Ntra. Sra. de la Asunción 1669 Asunción - Paraguay</span>
                        </h6>
                    </p>
                    <p>
                        <h6>
                            <IoMdCall />&nbsp;&nbsp;
                            <span>+595 21 2382222</span>
                        </h6>
                    </p>
                    <Button className="button-footer">
                        <IoIosMegaphone />&nbsp;&nbsp;
                        <span>Trabaja con nosotros</span>
                    </Button>
                </section>

                <section className="col-md-3 container-links">
                    <p><h5>Nosotros</h5></p>
                    <p><h6>La empresa</h6></p>
                    <p><h6>Locales</h6></p>
                    <p><h6>Trabajá con nosotros</h6></p>                                      
                    <p><h6>Políticas de privacidad</h6></p>
                </section>

                <section className="col-md-3 container-links">
                    <p><h5>Servicios</h5></p>
                    <p><h6>Productos</h6></p>
                    <p><h6>Sabores</h6></p>
                    <p><h6>Delivery</h6></p>                                      
                    <p><h6>Eventos</h6></p>                
                </section>           
            </footer>
        );
    }
}

export default Footer;