import React  from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ErrormMassage = () => {
    return (
        <View>
            <Image style={styles.imageError} source={require('./../../assets/error.png')}/>
            <Text style={styles.error}>Ops... Algo deu errado :(</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        fontSize: 15,
        color: '#8d8d8d',
        alignSelf: 'center'
    },
    imageError: {
        aspectRatio: 1,
        height: 200,
        alignSelf: 'center'
    }
})

export default ErrormMassage;
