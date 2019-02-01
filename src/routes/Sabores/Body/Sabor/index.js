import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class Sabor extends Component {
    render() {
        return (
            <Card className="col-md-2">
                <Card.Img variant="top" src={this.props.imagen} />
                <Card.Body>
                    <Card.Title>{this.props.titulo}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default Sabor;