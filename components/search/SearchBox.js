import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

const SearchBox = props => {
    const [type, setType] = useState("category")
    console.log(props.styling)
    return (
        <View >
            <TextInput
                onSubmitEditing={(e) => props.handleSubmit(type, e.nativeEvent.text)}
                placeholder="Search..."
                style={props.styling}
            />
        </View>
    )
}

export default SearchBox
