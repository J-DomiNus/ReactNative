import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {  Card } from 'react-native-elements';

import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        promotions: state.promotions,
        dishes: state.dishes,
        leaders: state.leaders
    }
}

const RenderItem = (props) => {
    const item = props.item;

    if (item != null) {
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={{ uri: baseUrl + item.image }}
                >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        )
    }
    else {
        return (<View></View>);
    }
}

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem
                    item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} />
                    <RenderItem
                    item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(Home);