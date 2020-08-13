import React, { Component } from 'react';

import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Dishdetails from './DishDetailsComponent';
import Home from './HomeComponent';
import ContactUs from './ContactUsComponent';
import AboutUs from './AboutUsComponent';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchLeaders, fetchPromos } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name='home' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
            />
        })
    },
        
    Dishdetails: { screen: Dishdetails },
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
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name='home' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
});

const AboutNavigator = createStackNavigator({
    About: { screen: AboutUs }
},
{
    initialRouteName: 'About',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name='home' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: ContactUs }
},
{
    initialRouteName: 'Contact',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name='home' size={22}
            color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    })
});

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} 
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

const MainNavigator = createDrawerNavigator({// creates the sideDraw Menu bar
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) => (
                <Icon name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    }, 
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About',
            drawerIcon: ({ tintColor }) => (
                <Icon name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact',
            drawerIcon: ({ tintColor }) => (
                <Icon name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                    />
            )
        }
    },
},
    {
        drawerBackgroundColor: '#D1C4E9',
        contentComponent: CustomDrawerContentComponent
    }
)
class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render () {
        return (
            <View style={{flex:1, paddingTop:0 }}>
                <MainNavigator />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
