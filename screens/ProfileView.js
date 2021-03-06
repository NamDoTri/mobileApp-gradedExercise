import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import { createStackNavigator } from '@react-navigation/stack'
import * as SecureStore from 'expo-secure-store'

let jwtDecode = require('jwt-decode')

import LoginView from '../components/user/LoginView'
import RegisterView from '../components/user/RegisterView'
import UserProfile from '../components/user/UserProfile'


const Stack = createStackNavigator();
const tokenName = "marketplaceAppAuth";



const ProfileView = props => {
    const baseUri = props.baseUri;
    const [activeJWT, setActiveJWT] = useState(null);
    

    useEffect(() => {
        SecureStore.getItemAsync(tokenName)
        .then(res => {
            if(res != null){
                setActiveJWT(res)
                props.setActiveJWT(res)
                props.setIsLoggedIn(true)
                let decoded = jwtDecode(res)
                props.setUserId(decoded.id)
                props.setUsername(decoded.name)
                console.log(decoded)
            }
        })
        .catch(e => {
            console.log(e)
        })
        SecureStore.setItemAsync(tokenName, activeJWT)
    }, [])

    const setIsLoggedIn = value => props.setIsLoggedIn(value)

    const onLogout = () => {
        SecureStore.deleteItemAsync(tokenName)
        .then(res => {
            setActiveJWT(null)
            props.setActiveJWT(null)
            props.setIsLoggedIn(false)
        })
        .catch(e => console.log(e))
    }
    
    return activeJWT==null ? 
    (<React.Fragment>
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
                            setIsLoggedIn={setIsLoggedIn}
                            setActiveJWT={setActiveJWT}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="register">
                    {props => (
                        <RegisterView
                            {...props}
                            baseUri={baseUri}
                            setIsLoggedIn={props.setIsLoggedIn}
                            setActiveJWT={setActiveJWT}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </View>
    </React.Fragment>):
    (<React.Fragment>
        <CustomHeader title='Profile' backgroundColor="#d9d9d9"/>
        <View style={styles.container}>
            <Stack.Navigator
                screenOptions= {{
                    headerShown: false
                }}
            >
                <Stack.Screen name="userProfile">
                    {props => (
                        <UserProfile
                            {...props}
                            onLogout={onLogout}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </View>
    </React.Fragment>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '2%',
        backgroundColor: "#d9d9d9",
    }
});
export default ProfileView
