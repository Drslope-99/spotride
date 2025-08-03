import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text>Orders tab page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
