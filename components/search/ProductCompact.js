import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ProductCompact = props => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require("../../assets/default_product_icon.png")}
            />
            <Text 
                style={styles.itemTitle}>
                {props.item.title}
            </Text>
        </View>
    )
}

export default ProductCompact

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: "center",
        marginRight: 20
    },
    itemTitle:{
        fontSize: 20
    }
})
