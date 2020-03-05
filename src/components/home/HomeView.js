import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
const url = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com/items";
import axios from 'axios';
const HomeView = () => {

    const [items, setItems] = useState([]);

    const loadItems = async () => {

        console.log("Loading items...");
        try{
            const its = await axios.get(url);
            console.log(its);
        }
        catch(err){
            console.log("Error in loading items", err);
        }
    }
    useEffect(() => {
        loadItems();
    }, [])
    return (
        <View style={style.container}>
            {items.map(item => <Text>ENtry</Text>)}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: '2vh',
        backgroundColor: "#98DEE5",
        fontSize: 100
    }
});

export default HomeView
