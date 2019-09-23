import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle,  Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import RenderComments from './RenderCommentsComponent';
import RenderDish from './RenderDishComponent';   
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-0._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends Component 
{
    constructor(props)
    {
        super(props);
        
        
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
       
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal()
      {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
      }

      render()
      {
          return(
            <div>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <Button outline onClick={this.toggleModal} >
                <span className="fa fa-pencil fa-lg">Submit Comment</span>
            </Button>
        </NavItem>   
        </Nav>
    
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                <div className="col-12 col-md-9">  
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">  
                        <Label htmlFor="rating" md={10}>Rating</Label>      
                        <Col md={12}>
                        <Control.select model =".rating" name="rating" 
                            className="form-control" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>  
                        </Control.select>
                        </Col>
                        </Row>
                         <Row className="form-group">
                            <Label htmlFor="name" md={10}>Comment</Label>
                            <Col md={12}>
                            <Control.text model =".name"
                               id="name" 
                               className="form-control"
                               name="name" 
                               placeholder="Your Name"
                               validators={{
                                   required, minLength: minLength(3), maxLength: maxLength(15)
                               }}
                               />
                    <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            required: 'Required ',
                            minLength: 'Must be greater than 2 characters ',
                            maxLength: 'Must be 15 characters or less '
                        }} />   
                        </Col>       
                         </Row>

                         <Row className="form-group">
                    <Label htmlFor="message" md={10}>Your Feedback</Label>
                    <Col md={12}>
                    <Control.textarea model =".message"
                               className="form-control"
                               id="message" 
                               name="message" 
                               rows="6" 
                                />
                    </Col>
                    </Row>
                    <Row className="form-group"> 
                    <Col md={{size:10, offset:2}}>    
                         <Button type="submit" value="submit" className="bg-primary">Login</Button>      
                    </Col>
                    </Row>
                    
                    </LocalForm>
                  </div>  
                </ModalBody>
            </Modal>  
            </div>        
          );
      }

}

    const DishDetail = (props) => {  
        return(
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
         <CommentForm />
    
        </div>
     </Card>  
    );
        }  
   

    


export default DishDetail;