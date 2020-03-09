import React, { useState } from 'react'
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
                
            />
            <Text>Location</Text>
            <TextInput
                
            />
            <Text>Delivery Type</Text>
            <Picker>
                <Picker.Item label="Shipping" value="Shipping" />
                <Picker.Item label="Pickup" value="Pickup" />
            </Picker>
            <Text>Category</Text>
            <TextInput
                
            />
            <Text>Description</Text>
            <TextInput
                
            />
            <Button
                title="Post"
            />
        </View>
    )
}

export default PostItem
