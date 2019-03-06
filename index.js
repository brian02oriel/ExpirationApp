import React from 'react';
import { Text, View, AppRegistry} from 'react-native';
import Login from './src/components/Login';

const App = () => {
    return(
        <View style = { {flex: 1 }}>
            <Login />
        </View>
    );
};

AppRegistry.registerComponent('ExpirationApp', () => App);
