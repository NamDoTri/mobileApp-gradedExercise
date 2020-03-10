import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import RadioForm from 'react-native-simple-radio-button';

const AddItemView = (props) => {
    return (
        <React.Fragment>
            <CustomHeader title='Sell' backgroundColor="#d9d9d9"/>
            <View style={style.container}>
                <View style={style.inputA}>
                    <Text style={style.textA}>Name</Text>
                <TextInput placeholder="name of the item" ></TextInput>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Description</Text>
                <TextInput placeholder="description" ></TextInput>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Category</Text>
                <TextInput placeholder="category for the item" ></TextInput>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Type</Text>
                    <RadioForm radio_props={[{label: 'Delivery'}, {label: 'Pickup'}]} formHorizontal={true} labelHorizontal={true} initial={0} buttonColor={'#3b3c3c'}/>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Location</Text>
                <TextInput placeholder="location of the item" ></TextInput>
                </View>
                <Button title="Submit" style={style.submitButton}/>

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
    textA:{
        marginBottom: '2%',
        color: '#3b3c3c',
        fontWeight: 'bold'
        
    },
    inputA :{
        width: '90%',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 18,
        padding: '2%',
        marginTop: '2%',
        fontSize: 22
    },
    submitButton: {

    }
});

export default AddItemView;