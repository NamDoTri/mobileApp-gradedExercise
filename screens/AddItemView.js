import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import CustomHeader from "../components/CustomHeader";

const AddItemView = (props) => {
    return (
        <React.Fragment>
            <CustomHeader title='Sell' backgroundColor="#d9d9d9"/>
            <View style={style.container}>
                <TextInput placeholder="name of the item"></TextInput>
                <TextInput placeholder="description of the item"></TextInput>
                <TextInput placeholder="price of the item"></TextInput>
                <TextInput placeholder="pickup or delivery"></TextInput>
                <TextInput placeholder="location of the item"></TextInput>
            </View>
        </React.Fragment>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '2%',
        paddingLeft: '2%',
        backgroundColor: "#d9d9d9",
        fontSize: 30
    },
});

export default AddItemView;