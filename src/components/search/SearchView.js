import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBox from './SearchBox'
import SearchResults from './SearchResults'

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
            <Text>Search view</Text>
            <SearchBox 
                style={styles.SearchBox}
                handleSubmit={handleSubmit}
            />
            <SearchResults 
                style={styles.SearchResults} 
                items={items}
            />
        </View>
    )
}


export default SearchView

const styles = StyleSheet.create({
    container:{
        paddingTop: 25,
    },
    searchBox: {
        flex: 2,
        backgroundColor: "gray"
    },
    searchResult: {
        flex: 8,
        color: "black",
        fontSize: 100
    }
})