import React from 'react';
import {View, Text, Stylesheet} from 'react-native';


export default (props) => {
    return (
        <View style={ styles.container }>
          <IconButton active={false} name="Home" iconName="home"></IconButton>
          <IconButton active={true} name="Search" iconName="search"></IconButton>
          <IconButton active={false} name="Your Library" iconName="layers"></IconButton>
    
        </View>
      ) 
}


const styles = StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      borderTopWidth: 1,
      borderTopColor: '#525252',
      backgroundColor: '#282828',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  })