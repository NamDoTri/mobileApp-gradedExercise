import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, ScrollView} from 'react-native'
const url = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com:3008/items";
import axios from 'axios';
import Product from "../components/search/Product";
import CustomHeader from "../components/CustomHeader";

const HomeView = () => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

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
            setError(err);
            console.log("Error in loading items", err);
        }
    }

    useEffect(() => {
        loadItems();
    }, []);


    return (
        <React.Fragment>
            <CustomHeader title='Home' backgroundColor="#d9d9d9"/>
            <View style={style.container}>
        {error? <Text>Failed to connect to the server</Text>:  <ScrollView >
            {items.map(item => <Product key={item._id} data={item}></Product>)}
        </ScrollView>}
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

export default HomeView
