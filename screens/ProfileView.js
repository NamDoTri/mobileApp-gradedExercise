import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import { createStackNavigator } from '@react-navigation/stack'
import * as SecureStore from 'expo-secure-store'

import LoginView from '../components/user/LoginView'
import RegisterView from '../components/user/RegisterView'
import UserProfile from '../components/user/UserProfile'
import PostItem from '../components/user/PostItem'

const Stack = createStackNavigator();
const tokenName = "marketplaceAppAuth"

const ProfileView = props => {
    const baseUri = props.baseUri;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeJWT, setActiveJWT] = useState(null)

    useEffect(() => {
        SecureStore.getItemAsync(tokenName)
        .then(res => {
            if(res != null){
                setActiveJWT(res)
                setIsLoggedIn(true)
                console.log("Stored JWT found." + res)
            }
        })
        .catch(e => {
            console.log(e)
        })
        SecureStore.setItemAsync(tokenName, activeJWT)
    }, [activeJWT])

    const onLogout = () => {
        SecureStore.deleteItemAsync(tokenName)
        .then(res => {
            setActiveJWT(null)
            setIsLoggedIn(false)
        })
        .catch(e => console.log(e))
    }
    
    return isLoggedIn==false ? 
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
                            setIsLoggedIn={setIsLoggedIn}
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
                <Stack.Screen name="postItem">
                    {props => (
                        <PostItem
                            {...props}
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
