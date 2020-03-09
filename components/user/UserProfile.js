import React from 'react'
import { View, Text, Button } from 'react-native'

const UserProfile = props => {
    return (
        <View>
            <Text>Logged in, show profile here</Text>
            <Button
                title="Post an Item"
                onPress={() => {props.navigation.navigate("postItem")}}
            />
            <Button
                title="Log out"
                onPress={props.onLogout}
            />
        </View>
    )
}

export default UserProfile
