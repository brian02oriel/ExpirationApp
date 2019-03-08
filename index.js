import React, { Component } from 'react';
import { Text, View, AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
//import App from './App';
import Routes from './Routes';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
const App = () =>{
    return(
        <Routes />
    ) 
} 

AppRegistry.registerComponent('ExpirationApp', () => App);
