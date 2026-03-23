import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainTabNavigator from "./src/navigation/MainTabNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}