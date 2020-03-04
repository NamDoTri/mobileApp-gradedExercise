import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import Explore from "../screens/Explore";

const bottomTabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={25} color={tintColor} />
          )
        }
      },
      Explore: {
        screen: Explore,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="comments" size={25} color={tintColor} />
          )
        }
      },
      Notifications: {
        screen: Notifications,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="search" size={25} color={tintColor} />
          )
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" size={25} color={tintColor} />
          )
        }
      },
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: '#eb6e3d'
      }
    }
  );
  
  const container = createAppContainer(bottomTabNavigator);

  export default container;
