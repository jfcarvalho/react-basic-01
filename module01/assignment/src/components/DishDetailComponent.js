import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments)
    {
            return (
                comments.map((item, key) =>
                    React.createElement('div', null, React.createElement('p', null, item.comment), React.createElement('p', null, "-- " + item.author + " ," + item.date))
            )); 
    }

    render() {
        return (
          
            <Card>
             <div className="row">   
                <div className="col">   
                    <CardImg width="50%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardTitle>{this.props.dish.description}</CardTitle>
                        </CardBody>
                </div>
               
                <div className="col">
                    <h3>Comments</h3>
                   {this.renderComments(this.props.dish.comments)}
                </div>
               
            </div>
         </Card>  
        
        );
    }
}

export default DishDetail;