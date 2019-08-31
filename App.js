import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponetsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponetsScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
