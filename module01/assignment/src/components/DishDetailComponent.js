import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardTitle>{this.props.dish.description}</CardTitle>
            </CardBody>
         </Card>   
        );
    }
}

export default DishDetail;