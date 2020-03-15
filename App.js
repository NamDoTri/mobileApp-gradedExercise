import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, FontAwesome } from 'react-native-vector-icons';
import jwtDecode from 'jwt-decode';

import HomeView from './screens/HomeView'
import SearchView from './screens/SearchView'
import ProfileView from './screens/ProfileView'
import AddItemView from "./screens/AddItemView";
import MyItemsView from './screens/MyItemsView';
import * as SecureStore from 'expo-secure-store'
const tokenName = "marketplaceAppAuth";

const Tab = createBottomTabNavigator();
const baseUri = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com:3008";
// const baseUri = "81.175.152.229:3008"


export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [activeJWT, setActiveJWT] = useState("");
	const [username, setUsername] = useState("");
	const [userId, setUserId] = useState("")

	const handleLogin = async value => {

		try{

			const jwt = await SecureStore.getItemAsync(tokenName);
			setActiveJWT(jwt);
			const jwtPayload = jwtDecode(jwt);
			setUserId(jwtPayload.id);
			setUsername(jwtPayload.name);
			setIsLoggedIn(true);

		}
		catch(err){
			console.log("Error in getting present jwt", err)
		}

	}

	useEffect(()=> {
		handleLogin();
	}, [])

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
							userId={userId}
							username={username}
                            activeJWT={activeJWT}
						/>}
				</Tab.Screen>
				{ isLoggedIn==true ? 
					(<Tab.Screen 
						name="Sell"
						options={{
							tabBarIcon: ({color, size}) => {
								return (<FontAwesome name="euro" color={color} size={size}/>)
							}
						}}>
							{props => <AddItemView
								baseUri={baseUri}
								userId={userId}
								activeJWT={activeJWT}
							/>}
					</Tab.Screen>) : <></>
				}
				{ isLoggedIn==true ? 
					(<Tab.Screen 
						name="My items"
						options={{
							tabBarIcon: ({color, size}) => {
								return (<FontAwesome name="euro" color={color} size={size}/>)
							}
						}}>
							{props => <MyItemsView
								baseUri={baseUri}
								userId={userId}
								activeJWT={activeJWT}
							/>}
					</Tab.Screen>) : <></>
				}
				<Tab.Screen 
					name="Profile"
					options={{
						tabBarIcon: ({color, size}) => (
							<FontAwesome name="user-o" color={color} size={size}/>
						)
					}}>
						{props => <ProfileView
							baseUri={baseUri}
							setIsLoggedIn={handleLogin}
							setActiveJWT={setActiveJWT}
							setUserId={setUserId}
							setUsername={setUsername}
						/>}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

