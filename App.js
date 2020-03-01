import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons'

import HomeView from './src/components/HomeView'
import SearchView from './src/components/SearchView'
import ProfileView from './src/components/ProfileView'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
