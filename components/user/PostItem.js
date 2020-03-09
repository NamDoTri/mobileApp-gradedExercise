import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Picker, Button } from 'react-native'

const PostItem = props => {
    const [item, setItem] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        location: "",
        deliveryType: '',
        datePosted: ''
    })

    useEffect(() => {
        console.log(item)
    })

    return (
        <View>
            <Text>Title</Text>
            <TextInput
                onChange={e => setItem({
                    title: e.nativeEvent.text,
                    ...item
                })}
            />
            <Text>Price</Text>
            <TextInput
                onChange={e => setItem({
                    price: e.nativeEvent.text,
                    ...item
                })}
            />
            <Text>Location</Text>
            <TextInput
                onChange={e => setItem({
                    location: e.nativeEvent.text,
                    ...item
                })}
            />
            <Text>Delivery Type</Text>
            <Picker
                onValueChange={e => setItem({
                    deliveryType: e.nativeEvent.text,
                    ...item
                })}
            >
                <Picker.Item label="Shipping" value="Shipping" />
                <Picker.Item label="Pickup" value="Pickup" />
            </Picker>
            <Text>Category</Text>
            <TextInput
                onChange={e => setItem({
                    category: e.nativeEvent.text,
                    ...item
                })}
            />
            <Text>Description</Text>
            <TextInput
                onChange={e => setItem({
                    description: e.nativeEvent.text,
                    ...item
                })}
            />
            <Button
                title="Post"
            />
        </View>
    )
}

export default PostItem
