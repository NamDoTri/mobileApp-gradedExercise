import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import ProductCompact from './ProductCompact'

const SearchResults = props => {
    const showDetails = item => {
        props.navigation.navigate("ProductDetail", {item: item})
    }
    return (
        <FlatList 
            style={props.style}
            data={props.items}
            renderItem={
                ({item}) => (
                    <TouchableOpacity
                        onPress={() => showDetails(item)}
                    >
                        <ProductCompact
                            item={item}
                        />
                    </TouchableOpacity>
                )
            }
            keyExtractor={item => item._id}
        />
    )
}

export default SearchResults
