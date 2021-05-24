import React, {useState} from 'react';
import { StyleSheet, Button,Text, View, TextInput } from 'react-native';
//import { Header } from 'react-native/Libraries/NewAppScreen';

export default function AddPost({handleSubmit}) {
    const [ text, setText ] = useState({
        title: "",
        body: ""
    })
    const changeHandler = (val) => {
        setText({...val.text})
    }
    return (
        <View>
            <TextInput style={styles.input} placeholder='Add new one here' onChangeText={changeHandler}/>
            <Button onPress={() => handleSubmit(text)} title='Add' color='tomato'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal:8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
})