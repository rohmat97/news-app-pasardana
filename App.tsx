// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/NewsScreen';
import DetailsScreen from './src/screen/DetailNewsScreen';

type RootStackParamList = {
  news: undefined;
  'detail-news': any;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="news" component={HomeScreen}/>
        <Stack.Screen name="detail-news" component={DetailsScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;
