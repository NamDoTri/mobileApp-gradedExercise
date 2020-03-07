import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, FontAwesome } from 'react-native-vector-icons';

import HomeView from './screens/HomeView'
import SearchView from './screens/SearchView'
import ProfileView from './screens/ProfileView'

const Tab = createBottomTabNavigator();
const baseUri = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com:3008/";


export default function App() {
  return (
    <NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen 
					name="Home"
					options={{
						tabBarIcon: ({color, size}) => (
							<Entypo name="news" color={color} size={size}/>
						),
						title: 'Home'
					}}>
						{props => <HomeView/>}
				</Tab.Screen>
				<Tab.Screen 
					name="Search"
					options={{
						tabBarIcon: ({color, size}) => (
							<FontAwesome name="search" color={color} size={size}/>
						)
					}}>
						{props => <SearchView
							baseUri={baseUri}
						/>}
				</Tab.Screen>
				<Tab.Screen 
					name="Profile"
					options={{
						tabBarIcon: ({color, size}) => (
							<FontAwesome name="user-o" color={color} size={size}/>
						)
					}}>
						{props => <ProfileView/>}
				</Tab.Screen>
			</Tab.Navigator>
    </NavigationContainer>
  );
}

