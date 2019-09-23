import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUS from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {

    
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      selectedDish:null
    };
  
  }

  onDishSelect(dishId)
  {
      this.setState({selectedDish:dishId});
  }



  render() {

    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}/>
      );
    }

    const DishWithId = ({match}) => {
        return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        );
    }

    return (
      <div>
           
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path='/aboutus' component={() => <AboutUS leaders={this.state.leaders}/>} />
        <Route exact path='/contactus' component={() => <Contact/>} />

        <Redirect to="/home" />
      </Switch>
       <Footer />   
      </div>
    );
   }
  }

export default Main;

