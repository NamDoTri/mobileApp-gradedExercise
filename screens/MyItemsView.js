import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import axios from 'axios';


const MyItemEntry = (props) => {
    return <View><Text>{props.item.name}</Text></View>
    }


const MyItemsView = (props) => {
    const [myItems, setMyItems] = useState([]);

    const fetchMyItems = async () => {
        try{
            let searchUri = `${props.baseUri}/items/search?type=seller&keyword=${props.userId}`;
            let items = await axios.get(searchUri);
            items = items.data;
            setMyItems(items);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
       fetchMyItems();
    },[])

    return (<React.Fragment>
            <CustomHeader title='My items' backgroundColor="#d9d9d9"/>
            <ScrollView style={style.container}>
                {myItems.length > 0 ? myItems.map(item => <MyItemEntry key={item._id} item={item}/>): <Text>You are not selling any items for now</Text>}
            </ScrollView>
        </React.Fragment>)
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

export default MyItemsView;
