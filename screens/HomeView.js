import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native'
const url = "http://ec2-18-195-169-254.eu-central-1.compute.amazonaws.com:3008/items";
import axios from 'axios';




const FeedEntry = (props) => {
    const {category, datePosted, deliveryType, description, images, location, price, sellerName, title, _id} = props.data;
    const getReadableDate = (dateString) => {
        const d = new Date(dateString);
        return `${d.toDateString()}`;
    }
    return (<View style={style.itemEntryContainer}>
        <View style={style.itemEntryTopView}>
            <View style={style.titleTextsView}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{`${title}`}</Text>
                <Text style={{fontSize: 20}}>{` FOR `}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{`${deliveryType}`}</Text>
                <Text style={{fontSize: 20}}>{` BY `}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{`${sellerName}`}</Text>
            </View>
        </View>
        <View  style={style.itemEntryTopView}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{category}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{location}</Text>    
        </View>
        <View style={style.itemEntryMiddleView}><Image source={{uri: images[0]}} style={style.itemEntryImage}></Image></View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
        
        <View  style={style.itemEntryTopView}><Text style={{fontSize: 16}}>{description}</Text></View>
        <View style={style.itemEntryMiddleView2}><Text style={{fontSize: 16}}>{getReadableDate(datePosted)}</Text></View>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
        <View><Text style={style.priceText}>{`${price ? price + ' euros': ''}`}</Text></View>
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
        paddingTop: '2%',
        backgroundColor: "#d9d9d9",
        fontSize: 30
    },
    itemEntryContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        elevation: 2,
        padding: '2%'
    },
    itemEntryTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '2%'
    },
    titleTextsView: {
        flexDirection: 'row',
        width: '70%'
    },
    itemEntryBottomView: {
        padding: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    itemEntryMiddleView: {
        width: '100%',
        marginBottom: '2%'
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
        fontSize: 30
    }
});

export default HomeView
