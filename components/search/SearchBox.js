import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

const SearchBox = props => {
    const [type, setType] = useState("category")
    return (
        <View >
            <TextInput
                onSubmitEditing={(e) => props.handleSubmit(type, e.nativeEvent.text)}
                onChange={e => props.handleSubmit(type, e.nativeEvent.text)}
                placeholder="Search..."
            />
        </View>
    )
}

export default SearchBox
