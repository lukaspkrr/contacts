import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import ContactsList from './../components/ContactsList';
import ErrorMessage from './../components/ErrorMessage';

import axios from 'axios';

export default class ContactsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get('https://randomuser.me/api?nat=BR&results=150')
    .then(res => {
      const { results } = res.data;
      this.setState({
        contacts: results,
        loading: false
      })
    })
    .catch(error => {
        this.setState({
            loading: false,
            error: true
        })
    });
  }

  
  render() {
      return (
          <View style={styles.container}>
        { 
            this.state.loading 
            ? <ActivityIndicator size='large' color='#c10000' /> 
            : this.state.error 
            ? <ErrorMessage />
                : <ContactsList 
                contacts={this.state.contacts}
                onPressItem={ PageParams => {
                    this.props.navigation.navigate('ContactsDetail', PageParams);
                } } />
            }
      </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})