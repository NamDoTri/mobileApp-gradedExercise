import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";

import LoginView from '../components/user/LoginView'
import RegisterView from '../components/user/RegisterView'
import UserProfile from '../components/user/UserProfile'

const ProfileView = props => {
    const [authStatus, setAuthStatus] = useState("login");
    let output;

    
    const handleLogIn = (email, password) => {
        console.log(props.baseUri)
        fetch(`${props.baseUri}/users/login`, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:  JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
        .then(res => {
            if(res.status == 200){
                return res.json();
            }
            else{
                throw new Error(JSON.stringify(res))
            }
        })
        .then(json => {
            console.log(json)
        })
        .catch(e => {
            console.log("HandleLogIn: " + e)
        })
    }

    switch(authStatus){
        case "register":
            output = <RegisterView/>
            break;
        case "login": 
            output = <LoginView
                        handleLogIn={handleLogIn}
                    />
            break;
        case "profileView": 
            output = <UserProfile/>
            break;
    }

    return (
        <React.Fragment>
            <CustomHeader title='Profile' backgroundColor="#d9d9d9"/>
            <View style={styles.container}>
                {output}
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '2%',
        backgroundColor: "#d9d9d9",
    }
});
export default ProfileView
