import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ToursScreen from "../screens/tours/ToursScreen";
import TourDetailScreen from "../screens/tours/TourDetailScreen";
import BookingScreen from "../screens/tours/BookingScreen";
import PaymentScreen from "../screens/tours/PaymentScreen";
import BookingSuccessScreen from "../screens/tours/BookingSuccessScreen";

const Stack = createNativeStackNavigator();

export default function ToursStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ToursList" component={ToursScreen} />
      <Stack.Screen name="TourDetail" component={TourDetailScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />
    </Stack.Navigator>
  );
}