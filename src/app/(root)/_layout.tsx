import React, { ReactNode, useEffect, useRef } from "react";
import { Animated, Easing, Platform } from "react-native";
import { useThemeColor } from "@/src/constants/theme";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function _layout() {
  const COLORS = useThemeColor();

  const TabBarIcon = ({
    focused,
    icon,
  }: {
    focused: boolean;
    icon: ReactNode;
  }) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      Animated.timing(scaleAnim, {
        toValue: focused ? 1.2 : 0.9,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }, [focused, scaleAnim]);

    return (
      <Animated.View
        style={{
          backgroundColor: focused ? COLORS.primary : "transparent",
          width: 45,
          height: 45,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: scaleAnim }],
        }}
      >
        {icon}
      </Animated.View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
          borderRadius: 50,
          marginVertical: 0,
          marginHorizontal: 60,
          marginBottom: Platform.OS === "ios" ? 20 : 5,
          overflow: "hidden",
          paddingBottom: 28,
          height: 70,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: COLORS.primary,
          borderTopColor: COLORS.primary,
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              icon={
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "white" : COLORS.text}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(cart)"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              icon={
                <Entypo
                  name="shopping-cart"
                  size={24}
                  color={focused ? "white" : COLORS.text}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              icon={
                <AntDesign
                  name="heart"
                  size={24}
                  color={focused ? "white" : COLORS.text}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              icon={
                <FontAwesome
                  name="user"
                  size={24}
                  color={focused ? "white" : COLORS.text}
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
