// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Clientes" }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: "Novo Cliente" }} />
        <Stack.Screen name="Edit" component={EditScreen} options={{ title: "Editar Cliente" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
