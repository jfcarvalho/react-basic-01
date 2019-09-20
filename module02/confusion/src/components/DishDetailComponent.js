import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle,  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import RenderComments from './RenderCommentsComponent';
import RenderDish from './RenderDishComponent';   
    const DishDetail = (props) => {
        return (
          
            <Card>
                 <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem>Menu</BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>

                    </div>
                </div>

             <div className="row">   
              
             <RenderDish dish={props ? props.dish : ''} />
 
             <RenderComments comments={props ? props.comments : ''} />
               
            </div>
         </Card>  
        
        );
    }


export default DishDetail;