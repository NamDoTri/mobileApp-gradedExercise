import React from 'react'
import { View, TextInput } from 'react-native'

const SearchBox = props => {
    return (
        <View >
            <TextInput
                onSubmitEditing={(e) => props.handleSubmit(e.nativeEvent.text)}
                onChange={e => props.handleSubmit(e.nativeEvent.text)}
                placeholder="Search..."
            />
        </View>
    )
}

export default SearchBox
