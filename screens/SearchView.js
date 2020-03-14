import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import SearchBox from '../components/search/SearchBox'
import SearchTypeTab from '../components/search/SearchTypeTab'
import ProductView from '../screens/ProductView'
import EditItem from './EditItem'

const Stack = createStackNavigator();

const SearchView = props => {
    const [categoryItems, setCategoryItems] = useState([]);
    const [locationItems, setLocationItems] = useState([]);
    const [dateItems, setDateItems] = useState([]);
    const [keyword, setKeyword] = useState("");
    const searchTypes = ["Category", "Location", "dateOfPosting"]
    const username = props.username;
    const userId = props.userId;
    
    useEffect(() => {

        const dateFormat = /\d\d\/\d\d\/\d\d\d\d/ // mm/dd/yyyy

        for (let type of searchTypes){
            if(type == "dateOfPosting" && dateFormat.test(keyword)==true ){
                let searchDate = new Date(keyword);
                console.log("Search date: " + searchDate.toString().slice(0, 15))
                let searchUri = `${props.baseUri}/items/search?type=${type}&keyword=${searchDate.toString().slice(0, 15)}`.replace(/\s/g, '%20');
                console.log(searchUri)
                fetch(searchUri)
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    console.log(json)
                    eval(`setDateItems(json)`);
                })
                .catch(e => console.log("SearchView: " + e))
            }
            let searchUri = `${props.baseUri}/items/search?type=${type.toLowerCase()}&keyword=${keyword}`;
            console.log(searchUri)
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
                            username={username}
                            userId={userId}
                        />
                        </>
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductView}
                />
                <Stack.Screen 
                    name="EditItem"
                    component={EditItem}
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