import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import { createStackNavigator } from '@react-navigation/stack'

import LoginView from '../components/user/LoginView'
import RegisterView from '../components/user/RegisterView'
import UserProfile from '../components/user/UserProfile'
import PostItem from '../components/user/PostItem'

const Stack = createStackNavigator();

const ProfileView = props => {
    const baseUri = props.baseUri;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
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
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="register">
                    {props => (
                        <RegisterView
                            {...props}
                            baseUri={baseUri}
                            setIsLoggedIn={setIsLoggedIn}
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
