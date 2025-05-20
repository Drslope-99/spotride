import { Stack } from "expo-router";
import { Text } from "react-native";
import Colors from "../constants/colors";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // Home screen
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          headerShadowVisible: false,
          headerTitle: () => (
            <Text
              style={{
                color: Colors.purple,
                marginLeft: "auto",
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontWeight: "bold",
                backgroundColor: "#ebf0ff",
                borderRadius: 100,
              }}
            >
              Log in
            </Text>
          ),
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="verification"
        options={{ headerShown: true, headerShadowVisible: false }}
      />
    </Stack>
  );
}
