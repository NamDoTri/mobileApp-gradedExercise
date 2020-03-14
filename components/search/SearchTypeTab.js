import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from './SearchResults';

const Tab = createMaterialTopTabNavigator()

const SearchTypeTab = props => {
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator >
                <Tab.Screen name="Category">
                    {() => (
                        <SearchResults
                            {...props}
                            items={props.itemsByCategory}
                            username={props.username}
                            userId={props.userId}
                            baseUri={props.baseUri}
                            activeJWT={props.activeJWT}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name="Location">
                    {() => (
                        <SearchResults
                            {...props}
                            items={props.itemsByLocation}
                            username={props.username}
                            userId={props.userId}
                            baseUri={props.baseUri}
                            activeJWT={props.activeJWT}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name="Date">
                    {() => (
                        <SearchResults
                            {...props}
                            items={props.itemsByDate}
                            username={props.username}
                            userId={props.userId}
                            baseUri={props.baseUri}
                            activeJWT={props.activeJWT}
                        />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    )
}

export default SearchTypeTab
