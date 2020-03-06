import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ProductCompact from './ProductCompact'

const SearchResults = props => {
    return (
        <FlatList 
            style={props.style}
            data={props.items}
            renderItem={
                ({item}) => (
                    <ProductCompact
                        item={item}
                    />
                )
            }
            keyExtractor={item => item._id}
        />
    )
}

export default SearchResults


// {(props.items && props.items.length == 0) ? 
//     <Text>No items found</Text> :
//     props.items.map( item => (
//         <ProductCompact
//             item={item}
//         />) 
//     )
// }