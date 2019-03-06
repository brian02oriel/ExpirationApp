import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
    } 
};

   render() {
    const { inputStyle } = styles
    return(
            <View style = {inputStyle}>
                <Input placeholder = 'Email' style = {inputStyle} textContentType='emailAddress'  onChangeText={email => this.setState({ email })} />
                <Input placeholder = 'Password' style = {inputStyle} textContentType='password' secureTextEntry  onChangeText={password => this.setState({ password })}/>
            </View>
    );
   }
 
};

const styles = {
    inputStyle: {
        marginTop: 50,
        marginBottom: 10,
        borderColor: '#000',
        borderWidth: 5
    },

  
};
//export default Form;