import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText ,CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments)
    {
        if(comments)
        {
            return (
                <ul className="list-unstyled">
                {comments.map(comment => (
                    
                        <li>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                        </li>
                    
                ))}
                </ul>
                );
        }
        else{
            return(
                <div></div>
            );
        }    
         
    }

    renderDish(dish)
    {
        if(dish)
        {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
            </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row"> 
             <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
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