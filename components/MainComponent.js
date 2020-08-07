import React, { Component } from 'react';

import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Menu from './MenuComponent';
import Dishdetails from './DishDetailsComponent';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetails: { screen: Dishdetails }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);
class Main extends Component {

    render () {
        return (
            <View style={{flex:1, paddingTop:0 }}>
                <MenuNavigator />
            </View>
        )
    }

}


export default Main;