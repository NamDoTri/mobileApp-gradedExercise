import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, FontAwesome } from 'react-native-vector-icons';

import HomeView from './src/components/home/HomeView'
import SearchView from './src/components/search/SearchView'
import ProfileView from './src/components/user/ProfileView'

const Tab = createBottomTabNavigator();

//alksjh flkawh ioawhu9 some test comments

export default function App() {
  return (
    <NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen 
					name="Home"
					options={{
						tabBarIcon: ({color, size}) => (
							<Entypo name="news" color={color} size={size}/>
						)
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
						{props => <SearchView/>}
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

