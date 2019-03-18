import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = props => (
    <View style={styles.container}>
    <Text style={styles.topBar}></Text>
        <Text style={styles.title}>{props.title}</Text>
    </View>
);

//StyleSheet
const styles = StyleSheet.create({
    container :{
        paddingBottom: 5,
        backgroundColor: '#c10000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topBar: {
        backgroundColor: '#910000',
        width: 500,
        height: 25
    },
    title: {
        fontSize: 45,
        color: '#fff'
    }
});

export default Header;