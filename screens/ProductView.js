import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

// TODO: get seller name somehow

const ProductView = props => {
    const [item, setItem] = useState(props.route.params.item)
    useEffect(() => {
        console.log(item)
    })
    return (
        <View>
            <Image
                style={styles.images}
                loadingIndicatorSource={require("../assets/default_item_placeholder.png")}
                source={require("../assets/default_item_placeholder.png")}
            />
            <View style={styles.container}>
                <View style={styles.brief}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.askingPrice}>{item.askingPrice}</Text>
                </View>
                <Text style={styles.deliveryType}>Shipping</Text>
                <Text><Text style={styles.bulletPoint}>Posted by: </Text>{item.seller}</Text> 
                <Text><Text style={styles.bulletPoint}>Location: </Text>{item.location}</Text>
                <Text><Text style={styles.bulletPoint}>Description:</Text> {item.description}</Text>
                <Text><Text style={styles.bulletPoint}>Posted at: </Text> {item.dateOfPosting}</Text>
            </View>
        </View>
    )
}

export default ProductView

const styles = StyleSheet.create({
    container:{
        paddingLeft: 10,
    },
    images: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        resizeMode: 'center',
    },
    brief:{
        paddingBottom: 5,
        flexDirection: "row"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        flex: 3,
    },
    askingPrice: {
        fontSize: 30,
        fontWeight: "bold",
        flex: 1
    },
    description: {

    },
    date: {
        
    },
    bulletPoint: {
        fontWeight: "bold"
    },
    deliveryType: {
        color: "blue"
    }
})
