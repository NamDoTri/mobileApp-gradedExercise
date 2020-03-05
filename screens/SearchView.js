import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBox from '../components/search/SearchBox'
import SearchResults from '../components/search/SearchResults'

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
                console.log(json)
            })
            .catch(e => console.log(e))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Search</Text>
            <SearchBox 
                styling={styles.searchBox}
                handleSubmit={handleSubmit}
            />
            <SearchResults 
                style={styles.searchResults} 
                items={items}
            />
        </View>
    )
}


export default SearchView

const styles = StyleSheet.create({
    container:{
        paddingTop: 25,
        paddingLeft: 10
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
        placeholderColor: "#E5943B"
        // underlineColorAndroid: "#085B91"
    },
    searchResult: {
        flex: 8,
        color: "black",
        fontSize: 100
    }
})