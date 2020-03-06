import React from 'react'
import { View, Text } from 'react-native'
import ProductCompact from './ProductCompact'

const SearchResults = props => {
    return (
        <View style={props.style}>
            {(props.items && props.items.length == 0) ? 
                <Text>No items found</Text> :
                props.items.map( item => (
                    <ProductCompact
                        item={item}
                    />) 
                )
            }
        </View>
    )
}

export default SearchResults
