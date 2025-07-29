import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Colors from "src/constants/colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>weclome to the home scren</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
