import React, { Component } from 'react';
import { View } from 'react-native';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetails from './DishDetailsComponent';

class Main extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId})
    }

    render () {
        return (
            <View>
                <Menu dishes={this.state.dishes}
                    onPress={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </View>
        )
    }

}


export default Main;