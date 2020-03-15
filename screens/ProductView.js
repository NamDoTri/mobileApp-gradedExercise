import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native'

// TODO: get seller name somehow

const ProductView = props => {
    const [item, setItem] = useState(props.route.params.item)
    const baseUri = props.route.params.baseUri;
    const activeJWT = props.route.params.activeJWT;
    const user = {
        name: props.route.params.username,
        id: props.route.params.userId
    }
    const onEditPressed = () => {
        const data = {
            item: item,
            baseUri: baseUri,
            activeJWT: activeJWT
        }
        props.navigation.navigate("EditItem", data)
    }

    const onDeletePressed = () => {
        fetch(`${baseUri}/items/${item._id}`, {
            method: "delete",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": activeJWT
            }
        })
        .then(res => {
            if(res.status == 202){
                alert("Delete item successfully")
                props.navigation.goBack()
            }else{
                alert("Delete item unsuccessfully")
                console.log(res.text())
            }
            return res.json()
        })
        .then(json => {
            console.log(json)
        })
        .catch(e => console.log(e))
    }

    return (
        <View>
            <Image
                style={styles.images}
                loadingIndicatorSource={require("../assets/default_item_placeholder.png")}
                source={{uri: item.images}}
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
                <Text><Text style={styles.bulletPoint}>Posted at: </Text> {item.datePosted}</Text>
            </View>
            {user.id==item.seller ?
                <View style={styles.modifyingButtons}>
                    <Button 
                        title="Edit"
                        style={{flex: 1}}
                        onPress={onEditPressed}
                    />
                    <Button 
                        title="Delete"
                        style={{flex: 1}}
                        onPress={onDeletePressed}
                    />
                </View>
                :
                <></>
            }
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
    },
    modifyingButtons: {
        flexDirection: "row",
    }
})
