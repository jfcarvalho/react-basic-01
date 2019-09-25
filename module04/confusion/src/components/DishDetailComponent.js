import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle,  Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import RenderDish from './RenderDishComponent';   
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form'
import {Loading} from './LoadingComponent'
import {baseUrl } from '../shared/baseUrl'

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
      handleSubmit(values)
      {
          this.toggleModal();
          this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
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
                           
                        </Control.select>
                        </Col>
                        </Row>
                         <Row className="form-group">
                            <Label htmlFor="name" md={10}>Comment</Label>
                            <Col md={12}>
                            <Control.text model =".author"
                               id="author" 
                               className="form-control"
                               name="author" 
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
                    <Control.textarea model =".comment"
                               className="form-control"
                               id="comment" 
                               name="comment" 
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

function RenderComments({comments, addComment, dishId}) {
    if(comments)
            {
                return (
                    <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{
                    comments.map(comment => (
                        
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                            </li>
                        
                    ))} </ul>
                    <CommentForm addComment={addComment} dishId={dishId}/>
                    </div>
                    );
            }
            else{
                return(
                    <div></div>
                );
            }              
}

    const DishDetail = (props) => {  
        if(props.isLoading)
        {
            return(
                <div className="container"> 
                    <div className="row">
                        <Loading />
                    </div>
                </div>

                );
        }
        else if (props.errMess) {
            return(
                <div className="container"> 
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>

                );
        }
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

         <RenderComments comments={props ? props.comments : ''} addComment={props.addComment} dishId={props.dish.id}/>
         
    
        </div>
     </Card>  
    );
        }  
   

    


export default DishDetail;