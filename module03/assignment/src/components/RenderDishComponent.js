import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class RenderDish extends Component {
    constructor(props) {
        super(props);
    }

    render ()
    {
        return (
            <div className="col-12 col-md-5 m-1">   
            <CardImg width="50%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle> {this.props.dish.name}</CardTitle>
                    <CardTitle>{this.props.dish.description}</CardTitle>
                </CardBody>
        </div>
        );
    }
}

export default RenderDish;