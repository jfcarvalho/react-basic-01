import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

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
          
            <Card>
             <div className="row">   
                <div className="col-12 col-md-5 m-1">   
                    <CardImg width="50%" src={this.props.dish  ? this.props.dish.image : ''} alt={this.props.dish ? this.props.dish.name : ''} />
                        <CardBody>
                            <CardTitle>{this.props.dish ? this.props.dish.name : ''}</CardTitle>
                            <CardTitle>{this.props.dish ? this.props.dish.description: ''}</CardTitle>
                        </CardBody>
                </div>
               
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                   { this.props.dish && this.props.dish.comments ? this.renderComments(this.props.dish.comments) : ''}
                </div>
               
            </div>
         </Card>  
        
        );
    }
}

export default DishDetail;