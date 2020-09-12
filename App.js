import React, { useEffect, useState } from "react";

// IMPORTS...
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS...
import SplashScreen from "./src/screens/SplashScreen";
import ReceiptsScreen from "./src/screens/ReceiptsScreen";
import Receipt from "./src/components/Receipt";

const Stack = createStackNavigator();

export default function App() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAuth(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {auth ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Receipts" component={ReceiptsScreen} />
            <Stack.Screen
              name="Receipt"
              component={Receipt}
              options={{ headerShown: true, title: "Purchase Detail" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
