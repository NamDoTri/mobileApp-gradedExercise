import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native'
const url = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com:3008/items";
import axios from 'axios';




const FeedEntry = (props) => {
    const {category, datePosted, deliveryType, description, images, location, price, sellerName, title, _id} = props.data;
    return (<View style={style.itemEntryContainer}>
        <View style={style.itemEntryTopView}><Text>{`${title} FOR ${deliveryType} BY ${sellerName}`}</Text><Text>{location}</Text></View>
        <View style={style.itemEntryMiddleView}><Image source={{uri: images[0]}} style={style.itemEntryImage}></Image></View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
        <View  style={style.itemEntryTopView}><Text>{category}</Text></View>
        <View  style={style.itemEntryTopView}><Text>{description}</Text></View>
        <View style={style.itemEntryMiddleView2}><Text>{datePosted}</Text></View>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
        <View><Text style={style.priceText}>{`${price} euros`}</Text></View>
        <View style={style.itemEntryBottomView}><Button title={'Buy'} style={style.buyButton}></Button></View>
        </View>
        </View>
       
    </View>)
}



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
            {items.map(item => <FeedEntry key={item._id} data={item}></FeedEntry>)}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        
        flex: 1,
        padding: '2%',
        backgroundColor: "#d9d9d9"
    },
    itemEntryContainer: {
        flexDirection: 'column'
    },
    itemEntryTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 20,
    },
    itemEntryBottomView: {
        padding: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    itemEntryMiddleView: {
        width: '100%'
    },
    itemEntryImage: {
        width: '100%',
        height: 300,
        backgroundColor: 'white'
    },
    itemEntryMiddleView2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    buyButton: {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 20
    }
});

export default HomeView
