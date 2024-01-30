import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mainnavigator from './App/Navigator/Mainnavigator';
import 'react-native-gesture-handler';
import Splashscreen from './App/Screen/Home/Splashscreen';
import Signup from './App/Screen/Home/Signup';
const Stack = createNativeStackNavigator();

function App() {
  const [showsplashscreen, setshowsplashscreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowsplashscreen(false);
    }, 4000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showsplashscreen ? (
          <Stack.Screen
            name="splashscreen"
            options={{headerShown: false}}
            component={Splashscreen}
          />
        ) : null}
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mainscreen"
          options={{headerShown: false}}
          component={Mainnavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
