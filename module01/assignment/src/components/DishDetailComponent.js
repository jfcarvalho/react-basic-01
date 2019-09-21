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
                    React.createElement('div', null, React.createElement('p', null, item.comment), React.createElement('p', null, "-- " + item.author + " ," + new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))))
            )); 
    }

    render() {
        return (
            <div className="row"> 
             <div className="col-12 col-md-5 m-1">
            <Card>
              
                  
                    <CardImg width="50%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardTitle>{this.props.dish.description}</CardTitle>
                        </CardBody>
               
                
            </Card>
            </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                   {this.renderComments(this.props.dish.comments)}
                </div>      
           
        </div>
        );
    }
}

export default DishDetail;