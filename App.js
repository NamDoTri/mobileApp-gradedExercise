import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, FontAwesome } from 'react-native-vector-icons';

import HomeView from './screens/HomeView'
import SearchView from './screens/SearchView'
import ProfileView from './screens/ProfileView'
import AddItemView from "./screens/AddItemView";

const Tab = createBottomTabNavigator();
const baseUri = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com:3008";


export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
					name="Sell"
					options={{
						tabBarIcon: ({color, size}) => (
							<FontAwesome name="euro" color={color} size={size}/>
						)
					}}>
						{props => <AddItemView
							baseUri={baseUri}
							setIsLoggedIn={setIsLoggedIn}
						/>}
				</Tab.Screen>
				<Tab.Screen 
					name="Profile"
					options={{
						tabBarIcon: ({color, size}) => (
							<FontAwesome name="user-o" color={color} size={size}/>
						)
					}}>
						{props => <ProfileView
							baseUri={baseUri}
						/>}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

