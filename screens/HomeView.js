import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native'
const url = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com:3008/items";
import axios from 'axios';
import Product from "../components/search/Product";

const HomeView = () => {

    const [items, setItems] = useState([]);

    const loadItems = async () => {

        console.log("Loading items...");
        try{
            const its = await axios.get(url,{headers: {
                'Content-Type': 'application/json'
            }});
            console.log(its.data.items[0]);
            setItems(its.data.items);
        }
        catch(err){
            console.log("Error in loading items", err);
        }
    }
    useEffect(() => {
        loadItems();
    }, [])
    return (
        <ScrollView style={style.container}>
            {items.map(item => <Product key={item._id} data={item}></Product>)}
        </ScrollView>
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

export default HomeView
