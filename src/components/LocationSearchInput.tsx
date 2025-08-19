import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";
import LineSeperator from "./LineSeperator";

type LocationSearchInputProps = {
  pickup: string;
  dropoff: string;
  onChangePickup: (text: string) => void;
  onChangeDropoff: (text: string) => void;
};

export default function LocationSearchInput({
  pickup,
  dropoff,
  onChangePickup,
  onChangeDropoff,
}: LocationSearchInputProps) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputWrapper}>
        <View style={styles.inputIcon}>
          <Ionicons name="arrow-up" size={SIZES.fontLg} />
        </View>
        <TextInput
          placeholder="Pick-up Location"
          value={pickup}
          onChangeText={onChangePickup}
          style={styles.searchInput}
        />
      </View>
      <LineSeperator color={Colors.borderColor} />
      <View style={styles.inputWrapper}>
        <View style={styles.inputIcon}>
          <Ionicons name="arrow-down" size={SIZES.fontLg} />
        </View>
        <TextInput
          placeholder="Drop-off Location"
          value={dropoff}
          onChangeText={onChangeDropoff}
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    gap: 10,
    backgroundColor: Colors.backgroundLight,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "green",
    width: "100%",
  },
  inputIcon: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
});
