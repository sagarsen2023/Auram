import { ReactNode } from "react";
import { useThemeColor } from "@/src/constants/theme";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { View } from "react-native";

export default function _layout() {
  const COLORS = useThemeColor();

  const TabBarIcon = ({
    focused,
    icon,
  }: {
    focused: boolean;
    icon: ReactNode;
  }) => {
    return (
      <View
        style={{
          backgroundColor: focused ? COLORS.primary : "transparent",
          width: 55,
          height: 55,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          overflow: "hidden",
          paddingBottom: 0,
          paddingHorizontal: 0,
          paddingTop: 0,
          height: 70,
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
