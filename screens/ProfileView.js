import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

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
        <View style={{flex: 1}}>{output}</View>
    )
}

export default ProfileView
