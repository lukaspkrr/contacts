import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { captalizeFirstLetter } from './../util';

const ContactsListItems = props => {
    const { contact, navigateToContactsDetail } = props;
    const { title, first, last } = contact.name;
    const { thumbnail } = contact.picture;
    return (
        <TouchableOpacity onPress={() => {
            navigateToContactsDetail({ contact });
        }}>
            <View style={styles.line}>
            <Image style={styles.avatar} source={{ uri: thumbnail }}/>
            <Text style={styles.lineText}>{ 
                `${
                    captalizeFirstLetter(title)
                } ${
                    captalizeFirstLetter(first)
                } ${
                    captalizeFirstLetter(last)
                }` }</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 2,
        marginBottom: 2,
        height: 65,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbb',
        backgroundColor: '#ffeded',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 5
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 15,
        flex: 1,
        borderRadius: 50
    }
});

export default ContactsListItems;