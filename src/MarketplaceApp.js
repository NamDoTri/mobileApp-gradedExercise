import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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
                >
                    {props => <HomeView/>}
                </Tab.Screen>
                <Tab.Screen name="Search">
                    {props => <SearchView/>}
                </Tab.Screen>
                <Tab.Screen name="Profile">
                    {props => <ProfileView/>}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MarketplaceApp

 
