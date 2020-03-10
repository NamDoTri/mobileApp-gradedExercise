import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Image, ScrollView} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import RadioForm from 'react-native-simple-radio-button';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const AddItemView = (props) => {

    const [item, setItem] = useState({});
    const [photo, setPhoto] = useState();

    const inputChangeHandler = (text, id) => {
        const nItem = {...item};
        nItem[id] = text;
        setItem(nItem);
        console.log(nItem);
    }
    const createNewItem = () => {
        console.log("creating new item")
    }
    const handleChoosePhoto = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
          }
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            setPhoto(result);
          }
         
        }
      };



    return (
        <React.Fragment>
            <CustomHeader title='Sell' backgroundColor="#d9d9d9"/>
            <ScrollView style={style.container}>
                <View style={style.inputA}>
                    <Text style={style.textA}>Name</Text>
                <TextInput placeholder="name of the item" onChangeText={(text) => {inputChangeHandler(text, "name")}}></TextInput>
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
                    <Text style={style.textA}>Type</Text>
                    <RadioForm radio_props={[{label: 'Delivery', value: 'Delivery'}, {label: 'Pickup', value: 'Pickup'}]} formHorizontal={true} labelHorizontal={true} initial={0} buttonColor={'#3b3c3c'} onPress={(value) => {console.log(value)}}/>
                </View>
                <View style={style.inputA}>
                    <Text style={style.textA}>Location</Text>
                <TextInput placeholder="location of the item" onChangeText={(text) => {inputChangeHandler(text, "location")}}></TextInput>
                </View>
                <View style={style.inputA}>
                {photo? <Image
            source={{ uri: photo ?photo.uri : ''}}
            style={{ width: 300, height: 300 , visibility: photo? 'visibile' : 'gone'}}
          /> :  <Button title="Choose Photo" onPress={handleChoosePhoto} />}
                   
                </View>
                <Button title="Submit" style={style.submitButton} onPress={createNewItem}/>

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