import { createAppContainer, createStackNavigator } from 'react-navigation';

import ContactsPage from './src/pages/ContactsPage';
import ContactsDetailPage from './src/pages/ContactsDetailPage';
import { captalizeFirstLetter } from './src/util';

const AppNavigator = createStackNavigator({
    'Main': {
      screen: ContactsPage
    },
    'ContactsDetail': {
      screen: ContactsDetailPage,
      navigationOptions: ({ navigation }) => {
        const contactName = captalizeFirstLetter(navigation.state.params.contact.name.first);
        return ({
          title: contactName,
          headerTitleStyle: {
            color: '#fff',
            fontSize: 30
          }
        });
      }
    }
}, {
  defaultNavigationOptions: {
    title: 'Contacts',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#c10000'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 40,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
