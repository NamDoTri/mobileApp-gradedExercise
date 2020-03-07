import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';


const ProductView = props => {
    const [item, setItem] = useState(props.item)

    return (
        <View>
            <Text>This is product detail view</Text>
        </View>
    )
}

export default ProductView
