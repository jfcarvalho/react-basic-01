import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';



    function renderComments(comments)
    {
            return (
                comments.map((item, key) =>
                    React.createElement('div', null, React.createElement('p', null, item.comment), React.createElement('p', null, "-- " + item.author + " ," + new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))))
            )); 
    }

    const DishDetail = (props) => {
        return (
          
            <Card>
             <div className="row">   
                <div className="col-12 col-md-5 m-1">   
                    <CardImg width="50%" src={props.dish  ? props.dish.image : ''} alt={props.dish ? props.dish.name : ''} />
                        <CardBody>
                            <CardTitle> {props.dish ? props.dish.name : ''}</CardTitle>
                            <CardTitle>{props.dish ? props.dish.description: ''}</CardTitle>
                        </CardBody>
                </div>
               
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                   { props.dish && props.dish.comments ? renderComments(props.dish.comments) : ''}
                </div>
               
            </div>
         </Card>  
        
        );
    }


export default DishDetail;