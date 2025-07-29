import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "../../constants/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "light",
          color: Colors.dark,
        },
        headerStyle: {
          borderBottomWidth: 2,
          borderBottomColor: Colors.backgroundLight,
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 30,
        },
        tabBarActiveTintColor: Colors.purple,
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            // <Ionicons name="home-outline" size={size} color={color} />

            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cube" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: "Notifications",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
