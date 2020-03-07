import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import SearchBox from '../components/search/SearchBox'
import SearchResults from '../components/search/SearchResults'
import ProductView from '../screens/ProductView'

const Stack = createStackNavigator();

const SearchView = props => {
    const [items, setItems] = useState([])
    
    const handleSubmit = (type, keyword) => {
        let searchUri = `${props.baseUri}/items/search?type=${type}&keyword=${keyword}`;

        fetch(searchUri)
            .then(res => {
                return res.json();
            })
            .then(json => {
                setItems(json)
            })
            .catch(e => console.log(e))
    }

    return (
        <View style={styles.container}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }} 
            >
                <Stack.Screen 
                    name="SearchResult"
                >
                    {props => (
                        <>
                        <Text style={styles.header}>Search</Text>
                        <SearchBox
                            {...props}
                            styling={styles.searchBox}
                            handleSubmit={handleSubmit}
                        />
                        <SearchResults 
                            {...props}
                            style={styles.searchResults} 
                            items={items}
                        />
                        </>
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductView}
                />
            </Stack.Navigator>
        </View>
    )
}


export default SearchView

const styles = StyleSheet.create({
    container:{
        paddingTop: 25,
        paddingLeft: 10,
        flex:1 
    },
    header: {
        justifyContent: "center",
        fontSize: 35,
        fontWeight: "bold"
    },
    searchBox: {
        flex: 2,
        backgroundColor: "#D1EDEE",
        height: 120,
        paddingTop: 20,
        fontSize: 20,
        //placeholderColor: "#E5943B"
        // underlineColorAndroid: "#085B91"
    },
    searchResults: {
        flex: 8
    }
})