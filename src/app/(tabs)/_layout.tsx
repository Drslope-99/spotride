import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "../../constants/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 30,
        },
        tabBarActiveTintColor: Colors.purple,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ size, color }) => (
            // <Ionicons name="home-outline" size={size} color={color} />

            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            // <Ionicons name="person-circle-outline" size={size} color={color} />
            <FontAwesome name="user-circle" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
