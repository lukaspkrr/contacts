import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ContactsListItems from './ContactsListItems';

const ContactsList = props => {
    const { contacts, onPressItem } = props;

    return (
        <FlatList 
        style={styles.container}
        data={ contacts }
        renderItem={({ item }) => <ContactsListItems
        contact={ item }
        navigateToContactsDetail={ onPressItem } />}
        keyExtractor={ item => item.login.uuid }
         />
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 5
    }
});

export default ContactsList;