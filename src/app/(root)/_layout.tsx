import { Tabs } from "expo-router";
export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="(cart)"
        options={{
          title: "Cart",
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
