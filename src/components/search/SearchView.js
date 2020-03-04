import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBox from './SearchBox'
import SearchResults from './SearchResults'

const SearchView = () => {
    return (
        <View style={{fontSize:100}}>
            <Text>Search view</Text>
            <SearchBox 
                style={styles.SearchBox}
                handleSubmit={handleSubmit}
            />
            <SearchResults style={styles.SearchResults} />
        </View>
    )
}

const handleSubmit = (type, keyword) => {
    console.log(type, keyword)
}

export default SearchView

const styles = StyleSheet.create({
    container:{

    },
    searchBox: {
        flex: 2,
        backgroundColor: "gray"
    },
    searchResult: {
        flex: 8
    }
})