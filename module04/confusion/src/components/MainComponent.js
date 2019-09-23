import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUS from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {addComment, fetchDishes} from '../redux/ActionCreators';


const mapStateToProps = state => {
 return {
   dishes: state.dishes,
   comments: state.comments,
   promotions: state.promotions,
   leaders: state.leaders
 }   
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())}
  })

class Main extends Component {

    
  constructor(props) {
    super(props);  
  }

  componentDidMout() {
    this.props.fetchDishes();
  }

  

  onDishSelect(dishId)
  {
      this.setState({selectedDish:dishId});
  }



  render() {

    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}

                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}/>
      );
    }

    const DishWithId = ({match}) => {
        return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} 
          addComment={this.props.addComment}/>
        );
    }

    return (
      <div>
           
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path='/aboutus' component={() => <AboutUS leaders={this.props.leaders}/>} />
        <Route exact path='/contactus' component={() => <Contact/>} />

        <Redirect to="/home" />
      </Switch>
       <Footer />   
      </div>
    );
   }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
