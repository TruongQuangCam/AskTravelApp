import React from "react";
import { NavigationIndependentTree } from "@react-navigation/native";
import App from "../App";

export default function Index() {
  return (
    <NavigationIndependentTree>
      <App />
    </NavigationIndependentTree>
  );
}