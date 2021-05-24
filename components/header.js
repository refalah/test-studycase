import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
//import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
    return (
        <View style={globalStyles.header}>
            <Text style={globalStyles.titleText}>Study Case</Text>
        </View>
    )
}