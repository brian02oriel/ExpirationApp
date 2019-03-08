import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProductList extends Component {
    static navigationOptions = {
        title: 'ProductList'
       };
    state = {
        products: [
            {
                name: "product_1",
                exp_date: "2019-10-10"
            },

            {
                name: "product_1",
                exp_date: "2019-10-10"
            },

            {
                name: "product_1",
                exp_date: "2019-10-10"
            },
        ]
    }

    render(){
        return(
            <View>
                <Text> Hello products </Text>
            </View>
        )
    }
}