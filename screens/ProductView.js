import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const ProductView = props => {
    const [item, setItem] = useState(props.item)

    return (
        <View>
            <Image
                style={styles.images}
                loadingIndicatorSource={require("../assets/default_item_placeholder.png")}
                source={require("../assets/default_item_placeholder.png")}
            />
        </View>
    )
}

export default ProductView

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    images: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        resizeMode: 'center',
    },
    brief:{

    },
    description: {

    },
    date: {
        
    }
})
