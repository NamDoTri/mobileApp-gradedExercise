import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const RegisterView = props => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);

    const handleRegister = () => {
        fetch(`${props.baseUri}/users/register`, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:  JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            }
        )
        .then(res => {
            if(res.status == 202){
                props.navigation.navigate("login")
                return res.json();
            }
            else if( res.status == 200){
                console.log("email already registered");
                setErrors([...errors, 'Email already registered']);
            }
            else{
                throw new Error(JSON.stringify(res))
            }
        })
        .then(json => {
            console.log(json)
        })
        .catch(e => {
            console.log("HandleRegister: " + e)
        })
    }

    const component = errors.length > 1 ? (errors.map(error => <Text>{error}</Text>)) : 

    (<View><Text>Email</Text>
    <TextInput
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
    />
    <Text>Username</Text>
    <TextInput
        value={username}
        onChange={e => setUsername(e.nativeEvent.text)}
    />
    <Text>Password</Text>
    <TextInput
        value={password}
        onChange={e => setPassword(e.nativeEvent.text)}
    />
    <Button
        title="Register"
        onPress={handleRegister}
    /></View>);
    return (
        <View>
            {
                component
            }
        </View>
    )
}

export default RegisterView
