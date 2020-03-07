import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";

const ProfileView = () => {
    return (
        <React.Fragment>
            <CustomHeader title='Profile'/>
            <View style={styles.container}>
            <Text>Profile view</Text>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '2%',
        backgroundColor: "#d9d9d9",
    }
});
export default ProfileView
