import { Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Home from "../screens/Home";
import Details from "../screens/Details";
import Settings from "../screens/Settings";
// import Drawer from "./Drawer";

// stack instantiation
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      {/* screens */}
      {/* <Stack.Screen name="Drawer" component={Drawer} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
export default MainStack;
