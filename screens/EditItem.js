import React, { useState, useEffect} from 'react'
import {View, StyleSheet, Text, TextInput, Button, Image, ScrollView, Alert} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import RadioForm from 'react-native-simple-radio-button';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';
const cloudinaryUrl = "https://api.cloudinary.com/v1_1/pbenipal61/upload"

const EditItem = props => {
    const [item, setItem] = useState(props.route.params.item);
    const [photo, setPhoto] = useState();
    const [photoUri, setPhotoUri] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [created, setCreated] = useState(false);
    const baseUri = props.route.params.baseUri;
    const activeJWT = props.route.params.activeJWT;
    const user = {
        name: props.route.params.username,
        id: props.route.params.userId
    }
    const inputChangeHandler = (text, id) => {
        const nItem = {...item};
        nItem[id] = text;
        if(id == "askingPrice"){
            nItem[id] = Number(text);
        }
        console.log(nItem);
        setItem(nItem);
    }
    const editItem = () => {

        console.log("JWT", activeJWT);
        console.log("base uri", baseUri);
        console.log("user id", user.id);
        
        console.log("uploading image ...");

        setSubmitting(true);
        fetch(cloudinaryUrl, {
            body: JSON.stringify(photo), 
            headers: {
            'content-type': 'application/json'
            },
          method: 'POST',
        })
        .then(async res => {
            // metadata
            const data = await res.json();
            console.log("url is", data.url);
            const toSendObject = {
                dateOfPosting: item.dateOfPosting,
                seller: props.userId,
                images: data.url,
                ...item
            }

            console.log("item", toSendObject);
            setSubmitting(true);
            // send post request
            axios.put(`${baseUri}/items/${item._id}`, toSendObject, {
                headers: {"Authorization": `${activeJWT}`, 'Content-Type': 'application/json'},
            })
                .then(res2 => {
                    console.log(res2.data);
                    setCreated(true);
                })
                .catch(e => {
                    setCreated(false);
                    console.log("Error: " , e);
                })

        })
        .catch(err => {
            console.log("Failed to upload image or item", err);
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
            quality: 1,
            base64: true
        });
    
        if (!result.cancelled) {

            setPhotoUri(result.uri);
            const convertedFile = `data:image/jpg;base64,${result.base64}`;
            setPhoto({file: convertedFile, "upload_preset": "tjgpygf3"});
            console.log("selected image", result.uri);
            return;
        }
    };

    useEffect(() => {
        if(created==true){
            Alert.alert("Marketplace", "Item editted successfully!")
        }
    }, [created])

    const submitComponent = submitting ? created ? <></>: <></>: <Button title="Submit" style={style.submitButton} onPress={editItem}/>
    return (
        <React.Fragment>
            <CustomHeader title='Sell' backgroundColor="#d9d9d9"/>
            <ScrollView style={style.container}>
                <View style={style.inputA}>
                    <Text style={style.textA}>Name</Text>
                    <TextInput 
                        placeholder="name of the item" 
                        onChangeText={(text) => {inputChangeHandler(text, "title")}}
                        value={item.title}
                    />
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Description</Text>
                    <TextInput 
                        placeholder="description" 
                        onChangeText={(text) => {inputChangeHandler(text, "description")}}
                        value={item.description}
                    />
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Category</Text>
                    <TextInput 
                        multiline={true} 
                        placeholder="category for the item" 
                        onChangeText={(text) => {inputChangeHandler(text, "category")}}
                        value={item.category}
                    />
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Price</Text>
                    <TextInput
                        keyboardType={'numeric'} 
                        placeholder="price for the item" 
                        onChangeText={(text) => {inputChangeHandler(text, "askingPrice")}}
                        value={item.askingPrice}
                    />
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Type</Text>
                    <RadioForm radio_props={[{label: 'Shipping', value: 'Shipping'}, {label: 'Pickup', value: 'Pickup'}]} formHorizontal={true} labelHorizontal={true} initial={0} buttonColor={'#3b3c3c'} onPress={(value) => inputChangeHandler(value, 'deliveryType')}/>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Location</Text>
                    <TextInput placeholder="location of the item" onChangeText={(text) => {inputChangeHandler(text, "location")}} value={item.location}></TextInput>
                </View>
                <View style={style.inputA}>
                {photo? 
                    <Image
                        source={{ uri: photoUri ?photoUri : ''}}
                        style={{width: 300, height: 300}}/>
                    :  
                    <Button title="Choose Photo" onPress={handleChoosePhoto} />}
                   
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

export default EditItem
