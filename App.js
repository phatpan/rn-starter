import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponetsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponetsScreen
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
