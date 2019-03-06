import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: "",
            password: "",
            users: [
            { email: "bot001@example.com",
              password: "12345678"
            }],
        }
    }

    async onLoginPress() {
        var email= this.state.email;
        var password = this.state.password;
        console.log(email);
        console.log(password);
        this.state.users.forEach(user =>{
            if (email == user.email && password == user.password){
               ToastAndroid.showWithGravity('Everything is OK bro!', ToastAndroid.SHORT, ToastAndroid.CENTER);
               console.log('success');
              } else {
                ToastAndroid.showWithGravity('Incorrect user or password MDFK!',  ToastAndroid.SHORT, ToastAndroid.CENTER);
                console.log('fail');
              }
        })
    }

    render() {
    
        const { containerStyle, buttonContainerStyle, buttonStyle, inputStyle } = styles
    return(
        <View style = {containerStyle}>
            
            <View style = {inputStyle}>
                <Input placeholder = 'Email' style = {inputStyle} textContentType='emailAddress'  onChangeText={email => this.setState({ email })} />
                <Input placeholder = 'Password' style = {inputStyle} textContentType='password' secureTextEntry  onChangeText={password => this.setState({ password })}/>
            </View>
           
            <View style = {buttonContainerStyle}>
                <Button title='Login' type= 'outline' raised style={buttonStyle} onPress = {this.onLoginPress.bind(this)}/>
            </View>
            
            <View style = {buttonContainerStyle}>
                <Button title='Register' type= 'outline' raised style={buttonStyle} />
            </View>
        </View>
    );
    }
    
};

const styles = {
    containerStyle: {
        flex: 1,
       justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        borderColor: '#000',
        borderWidth: 5
    },

    buttonContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        borderColor: '#000',
        borderWidth: 5
    },

    buttonStyle: {
        marginTop: 5,
        marginBottom: 5
    },

    inputStyle: {
        marginTop: 50,
        marginBottom: 10,
        borderColor: '#000',
        borderWidth: 5
    },
}
//export default Login;