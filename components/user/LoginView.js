import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'

const LoginView = props => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogIn = () => {
        fetch(`${props.baseUri}/users/login`, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:  JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
        .then(res => {
            if(res.status == 200){
                props.setIsLoggedIn(true);
                return res.json();
            }
            else{
                throw new Error(JSON.stringify(res))
            }
        })
        .then(json => {
            console.log(json)
        })
        .catch(e => {
            console.log("HandleLogIn: " + e)
        })
    }

    return (
        <View>
            <Text>Email</Text>
            <TextInput
                value={email}
                onChange={e => setEmail(e.nativeEvent.text)}
            />
            <Text>Password</Text>
            <TextInput
                value={password}
                onChange={e => setPassword(e.nativeEvent.text)}
            />
            <Button
                title="Log in"
                onPress={handleLogIn}
            />
            <View>
                <Text>Not a member yet?</Text>
                <TouchableOpacity
                    onPress={() => {props.navigation.navigate("register")}}
                >
                    <Text style={{color: "blue"}}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginView
