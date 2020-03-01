import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons'

import HomeView from './components/HomeView'
import SearchView from './components/SearchView'
import ProfileView from './components/ProfileView'

const Tab = createBottomTabNavigator();

const MarketplaceApp = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Home"
                    options={{
                        tabBarIcon: ({color, size}) => {
                            <Ionicons name="ios-home" color={color} size={size}/>
                        }
                    }}
                >
                    {props => <HomeView/>}
                </Tab.Screen>
                <Tab.Screen 
                    name="Search"
                    options={{
                        tabBarIcon: ({color, size}) => {
                            <Ionicons name="ios-home" color={color} size={size}/>
                        }
                    }}
                >
                    {props => <SearchView/>}
                </Tab.Screen>
                <Tab.Screen 
                    name="Profile"
                    options={{
                        tabBarIcon: ({color, size}) => {
                            <Ionicons name="ios-home" color={color} size={size}/>
                        }
                    }}
                >
                    {props => <ProfileView/>}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MarketplaceApp

 
