import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

const getIsTabBarVisible = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params 
      ? route.params.screen 
      : 'Home';

  switch (routeName) {
    case 'Home':
    case 'Root':
    case 'Profile': 
      return true;
    default:
      return false;
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Root"
      screenOptions={({route}) => ({
        tabBarVisible: getIsTabBarVisible(route),
      })}
      >
        <Tab.Screen name="Root" component={Root} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
