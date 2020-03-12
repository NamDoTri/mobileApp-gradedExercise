import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import SearchBox from '../components/search/SearchBox'
import SearchTypeTab from '../components/search/SearchTypeTab'
import ProductView from '../screens/ProductView'

const Stack = createStackNavigator();

const SearchView = props => {
    const [categoryItems, setCategoryItems] = useState([]);
    const [locationItems, setLocationItems] = useState([]);
    const [dateItems, setDateItems] = useState([]);
    const [keyword, setKeyword] = useState("");
    const searchTypes = ["Category", "Location", "Date"]
    
    useEffect(() => {
        for (let type of searchTypes){
            let searchUri = `${props.baseUri}/items/search?type=${type}&keyword=${keyword.toString()}`;
            fetch(searchUri)
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    console.log(json)
                    eval(`set${type}Items(json)`);
                })
                .catch(e => console.log("SearchView: " + e))
        }
    }, [keyword])

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
                            handleSubmit={setKeyword}
                        />
                        <SearchTypeTab
                            {...props}
                            itemsByCategory={categoryItems}
                            itemsByLocation={locationItems}
                            itemsByDate={dateItems}
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
    },
    searchResults: {
        flex: 8
    }
})