import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishDetailComponent';

class Main extends Component {

    
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  
  }

  onDishSelect(dishId)
  {
      this.setState({selectedDish:dishId});
  }

  render() {
  return (
    <div>
    <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
    </Navbar>

    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
    
     
     <DishDetail dish= {this.state.dishes.map((value) => value.id == this.state.selectedDish ? value : null )} /> 
        
    </div>
  );
 }
}

export default Main;

