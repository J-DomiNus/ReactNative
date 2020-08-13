import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Card, Tile } from 'react-native-elements';

import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}


class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };
    
    render () {
        const { navigate } = this.props.navigation;

        const renderMenuItem = ({item, index}) => {
            return (
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('Dishdetails', { dishId: item.id})}
                    imageSrc={{ uri: baseUrl + item.image }}
                />
            )
        }

        
        return (
            <View>
                <FlatList
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
                
        )
    }
    
}

export default connect(mapStateToProps)(Menu);