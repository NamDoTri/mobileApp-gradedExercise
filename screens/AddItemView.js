import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomHeader from "../components/CustomHeader";

const AddItemView = (props) => {
    return (
        <React.Fragment>
            <CustomHeader title='Sell' backgroundColor="#d9d9d9"/>
            <View style={style.container}>
                <Text>Add item</Text>
            </View>
        </React.Fragment>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '2%',
        backgroundColor: "#d9d9d9",
        fontSize: 30
    },
});

export default AddItemView;