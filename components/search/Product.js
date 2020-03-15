import React from 'react'
import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native'

const Product = (props) => {
    const {category, dateOfPosting, deliveryType, description, images, location, price, sellerName, title, _id} = props.data;

    return (<View style={style.itemEntryContainer}>
        <View style={style.itemEntryTopView}>
            <View style={style.titleTextsView}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{`${title}`}</Text>
                <Text style={{fontSize: 20}}>{deliveryType ? ` FOR `: ''}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{`${deliveryType? deliveryType: ''}`}</Text>
                <Text style={{fontSize: 20}}>{sellerName? ` BY `: ''}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{`${sellerName?sellerName: ''}`}</Text>
            </View>
        </View>
        <View  style={style.itemEntryTopView}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{category}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{location}</Text>    
        </View>
        <View style={style.itemEntryMiddleView}><Image source={{uri: images}} style={style.itemEntryImage}></Image></View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <View  style={style.itemEntryTopView}><Text style={{fontSize: 16}}>{description}</Text></View>
                <View style={style.itemEntryMiddleView2}><Text style={{fontSize: 16}}>{dateOfPosting}</Text></View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <View><Text style={style.priceText}>{`${price ? price + ' euros': ''}`}</Text></View>
                <View style={style.itemEntryBottomView}><Button title={'Buy'} style={style.buyButton}></Button></View>
            </View>
        </View>       
    </View>)
}

const style = StyleSheet.create({
    
    itemEntryContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: '1%',
        padding: '1%',
        borderRadius: 8
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


export default Product;