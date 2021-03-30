import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTransparent: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7159c1',
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        initialRouteName="Main"
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Pagina Inicial' }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={({ route }) => ({ title: route.params.user.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
