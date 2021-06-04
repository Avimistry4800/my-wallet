import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import React from 'react';
import Tabs from "./navigation/tabs";
import { SignUp } from "./screens";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })
    
    if(!loaded){
    return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />

                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* <Stack.Screen name="Scan" component={Scan} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
