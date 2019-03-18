import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import ContactDescription from '../components/ContactDescription';

export default class ContactsDetailPage extends React.Component {
    render () {
        const { contact } = this.props.navigation.state.params;
        return (
            <ScrollView style={styles.container}>
                <Image 
                style={styles.avatar}
                source={{ uri: contact.picture.large }} />
                <ContactDescription label='Email' content={ contact.email } />
                <ContactDescription label='Cidade' content={ contact.location.city } />
                <ContactDescription label='Estado' content={ contact.location.state } />
                <ContactDescription label='Tel' content={ contact.phone } />
                <ContactDescription label='Cel' content={ contact.cell } />
                <ContactDescription label='Nacionalidade' content={ contact.nat } />
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 200
    }
});