import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomHeader =  (props) => {

    return (<View style={style.container}><Text style={style.title}>{props.title}</Text></View>)
}


const style = StyleSheet.create({
    container: {
        height: '10%',
        marginTop: '0%',
        paddingTop: '4%',
        paddingLeft: '2%',
        
    },
   title: {
    justifyContent: "center",
    fontSize: 35,
    fontWeight: "bold"
   }
});

export default CustomHeader;