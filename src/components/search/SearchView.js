import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBox from './SearchBox'
import SearchResults from './SearchResults'

const SearchView = props => {
    
    const handleSubmit = (type, keyword) => {
        let searchUri = `${props.baseUri}/items/search?type=${type}&keyword=${keyword}`;
        // console.log(searchUri);
        fetch(searchUri)
        .then(res => console.log( typeof res ))
        .catch(e => console.log(e))
    }
    return (
        <View style={styles.container}>
            <Text>Search view</Text>
            <SearchBox 
                style={styles.SearchBox}
                handleSubmit={handleSubmit}
            />
            <SearchResults style={styles.SearchResults} />
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
        flex: 8
    }
})