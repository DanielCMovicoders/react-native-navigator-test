/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNavigationContainerRef, NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const TextInputScreen = () => (
  <View style={{ padding: 10 }}>
    <TextInput style={{ borderColor: "blue", borderWidth: 2 }} />
  </View>
);

function App(): JSX.Element {
  const navigationRef = createNavigationContainerRef<NavigationContainerRef<ReactNavigation.RootParamList>>();
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator initialRouteName="app">
          <Drawer.Screen name="app" component={TextInputScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
  );
}

export default App;
