import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Post({item, navigate}){
    
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={globalStyles.item}>
            <Text style={globalStyles.title}>{item.title}</Text>
            <Text style={globalStyles.body}>{item.body}</Text>
        </View>  
      </TouchableOpacity>  
    )
}