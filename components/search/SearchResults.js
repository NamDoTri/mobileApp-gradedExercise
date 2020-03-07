import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProductCompact from './ProductCompact'

const SearchResults = props => {
    const showDetails = item => {
        props.navigation.navigate("ProductDetail", {item})
    }
    return (
        <FlatList 
            style={props.style}
            data={props.items}
            renderItem={
                ({item}) => (
                    <ProductCompact
                        item={item}
                        onPress={() => showDetails(item)}
                    />
                )
            }
            keyExtractor={item => item._id}
        />
    )
}

export default SearchResults
