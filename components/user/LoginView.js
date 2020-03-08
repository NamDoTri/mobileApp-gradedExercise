import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const LoginView = props => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogIn = () => {
        props.handleLogIn(email, password)
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
        </View>
    )
}

export default LoginView
