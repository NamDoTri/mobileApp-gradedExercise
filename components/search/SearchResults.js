import React from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import ProductCompact from './ProductCompact'

const SearchResults = props => {
    const showDetails = item => {
        const data = {
            item: item, 
            username: props.username,
            userId: props.userId
        }
        props.navigation.navigate("ProductDetail", data)
    }

    return (props.items && props.items.length == 0) ?
    (<Text
        style={{
            fontSize: 20,
            paddingLeft: 10,
            paddingTop: 10
        }}
    >
        No items found
    </Text>) :
    (
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
