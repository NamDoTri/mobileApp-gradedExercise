import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, Button, Image, ScrollView} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import RadioForm from 'react-native-simple-radio-button';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const AddItemView = (props) => {
    const [item, setItem] = useState({
        title: "",
        askingPrice: "",
        description: "",
        category: "",
        location: "",
        deliveryType: 'Shipping',
    });
    const [photo, setPhoto] = useState();
    const [submitting, setSubmitting] = useState(false);
    const [created, setCreated] = useState(false);

    const inputChangeHandler = (text, id) => {
        const nItem = {...item};
        nItem[id] = text;
        setItem(nItem);
    }
    const createNewItem = () => {
        // metadata
        let currentDate = new Date();
        let toSendObject = {
            dateOfPosting: currentDate.toString(),
            seller: props.userId,
            ...item
        }

        

        setSubmitting(true);
        // send post request
        fetch(`${props.baseUri}/items`, {
            method: "post",
            headers: {"Authorization": props.activeJWT},
            body: toSend,
        })
        .then(res => {
            if(res.status == 202){
                console.log("New item uploaded successfully")
                return res.json()
            }
            else{
                return res.text()
            }
        })
        .then(json => {
            console.log("JSON: " , json)
            setCreated(true);

        })
        .catch(e => {
            setCreated(false);
            setSubmitting(false);
            console.log("Error: " , e);
        })
    }
    
    const handleChoosePhoto = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // if (status !== 'granted') {
        //     alert('Sorry, we need camera roll permissions to make this work!');
        //     return;
        // }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
    
        if (!result.cancelled) {
            setPhoto(result);
            return;
        }

        const fileName = result.uri.split('/').slice(-1)
        setPhoto({
            uri: result.uri,
            name: fileName,
            type: "image/jpeg"
        })
        setItem({
            images: [photo],
            ...item,
        })
    };

    const submitComponent = submitting ? created ? <Text>Item created</Text>: <Text>Creating ...</Text>: <Button title="Submit" style={style.submitButton} onPress={createNewItem}/>
    return (
        <React.Fragment>
            <CustomHeader title='Sell' backgroundColor="#d9d9d9"/>
            <ScrollView style={style.container}>
                <View style={style.inputA}>
                    <Text style={style.textA}>Name</Text>
                <TextInput placeholder="name of the item" onChangeText={(text) => {inputChangeHandler(text, "title")}}></TextInput>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Description</Text>
                <TextInput placeholder="description" onChangeText={(text) => {inputChangeHandler(text, "description")}}></TextInput>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Category</Text>
                <TextInput placeholder="category for the item" onChangeText={(text) => {inputChangeHandler(text, "category")}}></TextInput>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Price</Text>
                <TextInput placeholder="price for the item" onChangeText={(text) => {inputChangeHandler(text, "askingPrice")}}></TextInput>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Type</Text>
                    <RadioForm radio_props={[{label: 'Delivery', value: 'Delivery'}, {label: 'Pickup', value: 'Pickup'}]} formHorizontal={true} labelHorizontal={true} initial={0} buttonColor={'#3b3c3c'} onPress={(value) => inputChangeHandler(value, 'deliveryType')}/>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Location</Text>
                <TextInput placeholder="location of the item" onChangeText={(text) => {inputChangeHandler(text, "location")}}></TextInput>
                </View>
                <View style={style.inputA}>
                {photo? <Image
            source={{ uri: photo ?photo.uri : ''}}
            style={{width: 300, height: 300}}
          /> :  <Button title="Choose Photo" onPress={handleChoosePhoto} />}
                   
                </View>
                {submitComponent}

            </ScrollView>
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
    imageA: {

    },
    submitButton: {
        

    }
});

export default AddItemView;