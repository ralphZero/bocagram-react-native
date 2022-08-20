import { StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import AppBar from '../components/AppBar';
import Login from './Login';
import Explore from './Explore';
import Activity from './Activity';
import AddPost from './AddPost';
import Feed from './Feed';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
      <SafeAreaView style={styles.safeArea}>
          <Tab.Navigator safeAreaInsets={{bottom: 0, top: 0}}>
            <Tab.Screen name='Feed' component={Feed} options={{ tabBarShowLabel: false, header: (props) => <AppBar />, tabBarIcon: () => <Icon name='home' type='feather' />}} />
            <Tab.Screen name='Explore' component={Explore} options={{ tabBarShowLabel: false, tabBarIcon: () => <Icon name='search' type='feather'/> }} />
            <Tab.Screen name='Add Post' component={AddPost} options={{ tabBarShowLabel: false, tabBarIcon: () => <Icon name='plus-square' type='feather' /> }} />
            <Tab.Screen name='Activity' component={Activity} options={{ tabBarShowLabel: false, tabBarIcon: () => <Icon name='heart' type='feather' /> }} />
            <Tab.Screen name='login' component={Login} options={{ tabBarShowLabel: false, header: (props) => null ,tabBarIcon: () => <Icon name='user' type='feather' />}} />
          </Tab.Navigator>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  }
});
