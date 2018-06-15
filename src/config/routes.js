import { createStackNavigator } from 'react-navigation';
import { PropertyDetails, PropertyHome } from '../components/property';

export const PropertyRouter = createStackNavigator(
    {
        Home: { screen: PropertyHome },
        Details: { screen: PropertyDetails },
    }, {
        initialRouteName: 'Home',
    });
