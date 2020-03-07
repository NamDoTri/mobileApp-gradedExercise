import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from './SearchResults';

const Tab = createMaterialTopTabNavigator()

const SearchTypeTab = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Category">
                {props => (
                    <SearchResults
                        {...props}
                        items={props.itemsByCategory}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen name="Location">
                {props => (
                    <SearchResults
                        {...props}
                        items={props.itemsByLocation}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen name="Date">
                {props => (
                    <SearchResults
                        {...props}
                        items={props.itemsByDate}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchTypeTab
