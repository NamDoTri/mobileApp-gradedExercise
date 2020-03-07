import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from './SearchResults';

const Tab = createMaterialTopTabNavigator()

const SearchTypeTab = props => {
    useEffect(() => {
        //console.log("SearchTab" + props.itemsByCategory)
    })
    // the items are passed to here successfully
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator >
                <Tab.Screen name="Category">
                    {() => (
                        <SearchResults
                            {...props}
                            items={props.itemsByCategory}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name="Location">
                    {() => (
                        <SearchResults
                            {...props}
                            items={props.itemsByLocation}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name="Date">
                    {() => (
                        <SearchResults
                            {...props}
                            items={props.itemsByDate}
                        />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    )
}

export default SearchTypeTab
