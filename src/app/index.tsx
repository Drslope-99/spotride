import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderButton from "../components/HeaderButton";

export default function IndexScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>IndexScreen</Text>
      <HeaderButton title="(tabs)" onPress={() => router.push("/(tabs)")} />
      <HeaderButton title="(auth)" onPress={() => router.push("/(auth)")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
