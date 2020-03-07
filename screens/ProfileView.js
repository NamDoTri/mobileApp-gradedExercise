import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";

import LoginView from '../components/user/LoginView'
import RegisterView from '../components/user/RegisterView'
import UserProfile from '../components/user/UserProfile'

const ProfileView = props => {
    const [authStatus, setAuthStatus] = useState("profileView");
    let output;

    switch(authStatus){
        case "register":
            output = <RegisterView/>
            break;
        case "login": 
            output = <LoginView/>
            break;
        case "profileView": 
            output = <UserProfile/>
            break;
    }

    return (
        <React.Fragment>
            <CustomHeader title='Profile' backgroundColor="#d9d9d9"/>
            <View style={styles.container}>
            <Text>Profile view</Text>
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
