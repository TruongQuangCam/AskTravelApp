import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeStackNavigator from "./HomeStackNavigator";
import ToursStackNavigator from "./ToursStackNavigator";
import GuidesScreen from "../screens/guides/GuidesScreen";
import MoreScreen from "../screens/more/MoreScreen";

const Tab = createBottomTabNavigator();

type AnimatedTabIconProps = {
  focused: boolean;
  routeName: string;
  color: string;
};

function AnimatedTabIcon({
  focused,
  routeName,
  color,
}: AnimatedTabIconProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.25 : 1,
      useNativeDriver: true,
      friction: 5,
      tension: 140,
    }).start();
  }, [focused, scaleAnim]);

  let icon = null;

  if (routeName === "Home") {
    icon = <Ionicons name="home" size={24} color={color} />;
  } else if (routeName === "Tours") {
    icon = <Ionicons name="airplane" size={24} color={color} />;
  } else if (routeName === "Guides") {
    icon = (
      <MaterialCommunityIcons name="account-tie" size={24} color={color} />
    );
  } else if (routeName === "More") {
    icon = (
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={24}
        color={color}
      />
    );
  }

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      {icon}
    </Animated.View>
  );
}

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: "#FFFFFF",
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "600",
          marginBottom: 4,
        },
        tabBarIcon: ({ focused, color }) => (
          <AnimatedTabIcon
            focused={focused}
            routeName={route.name}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Tours" component={ToursStackNavigator} />
      <Tab.Screen name="Guides" component={GuidesScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}