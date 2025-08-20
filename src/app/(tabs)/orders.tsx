import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomSearchInput from "../../components/CustomSearchInput";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import Colors from "../../constants/colors";
import SIZES from "../../constants/sizes";

export default function OrdersScreen() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <CustomSearchInput
          placeholder="Search"
          value={searchInput}
          onChangeText={setSearchInput}
        />
        <EmptyOder />
      </View>
    </KeyboardAvoidingWrapper>
  );
}

function EmptyOder() {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyPackage}>
        <Feather name="package" size={SIZES.iconXxl} color={Colors.violet400} />
      </View>
      <Text style={styles.emptyText}>You have no deliveries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.spMd,
    backgroundColor: Colors.white,
  },
  emptyContainer: {
    paddingVertical: 16,
  },
  emptyPackage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.violet50,
  },
  emptyText: {
    textAlign: "center",
    marginVertical: SIZES.spMd,
    fontSize: SIZES.fontLg,
    color: Colors.text,
  },
});
