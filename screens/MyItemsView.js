import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';



const MyItemEntry = (props) => {
    return <View><Text>{props.data.name}</Text></View>
    }

const MyItemsView = (props) => {
    const [myItems, setMyItems] = [];
    return <View><Text>My items views</Text></View>
}

export default MyItemsView;
