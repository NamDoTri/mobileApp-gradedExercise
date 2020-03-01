import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const HomeView = () => {
    return (
        <View style={style.container}>
            <Text>This is Home view</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#98DEE5",

    }
});

export default HomeView
