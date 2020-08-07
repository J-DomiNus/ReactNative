import React, { Component } from 'react';

import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Menu from './MenuComponent';
import Dishdetails from './DishDetailsComponent';
import Home from './HomeComponent';

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

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},
{
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});

const MainNavigator = createDrawerNavigator({// creates the sideDraw Menu bar
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }, 
},
    {
        drawerBackgroundColor: '#D1C4E9'
    }
)
class Main extends Component {

    render () {
        return (
            <View style={{flex:1, paddingTop:0 }}>
                <MainNavigator />
            </View>
        )
    }

}


export default Main;