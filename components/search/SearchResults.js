import React from 'react'
import { View, Text } from 'react-native'

const SearchResults = props => {
    return (
        <View style={props.style}>
            {(props.items && props.items.length == 0) ? 
                <Text>No items found</Text> :
                props.items.map( item => (<Text>{item.title}</Text>) )
            }
        </View>
    )
}

export default SearchResults
