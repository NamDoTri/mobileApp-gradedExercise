import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import { createStackNavigator } from '@react-navigation/stack'

import LoginView from '../components/user/LoginView'
import RegisterView from '../components/user/RegisterView'
import UserProfile from '../components/user/UserProfile'

const Stack = createStackNavigator();

const ProfileView = props => {
    const baseUri = props.baseUri;
    const [loginStatus, setLoginStatus] = useState(false);
    
    return (
        <React.Fragment>
            <CustomHeader title='Profile' backgroundColor="#d9d9d9"/>
            <View style={styles.container}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="login">
                        {props => (
                            <LoginView
                                {...props}
                                baseUri={baseUri}
                            />
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="register">
                        {props => (
                            <RegisterView
                                {...props}
                                baseUri={baseUri}
                            />
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="userprofile">
                        {props => (
                            <UserProfile/>
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
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
