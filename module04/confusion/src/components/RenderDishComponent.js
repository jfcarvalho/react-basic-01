import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import {baseUrl } from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components'

class RenderDish extends Component {
    constructor(props) {
        super(props);
    }

    render ()
    {
        return (
            <div className="col-12 col-md-5 m-1">
            <FadeTransform in transformProps={{exitTransform: 'scale() translateY(-50%)' }}>       
            <CardImg width="50%" src={baseUrl + this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle> {this.props.dish.name}</CardTitle>
                    <CardTitle>{this.props.dish.description}</CardTitle>
                </CardBody>
            </FadeTransform>    
        </div>
        );
    }
}

export default RenderDish;