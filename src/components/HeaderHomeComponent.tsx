import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";
import CustomSearchInput from "./CustomSearchInput";
import HeaderNavLink from "./HeaderNavLink";
import LineSeperator from "./LineSeperator";

export default function HeaderHomeComponent() {
  return (
    <View style={styles.container}>
      <CustomSearchInput placeholder="Deliver to?" />
      <View style={styles.navContainer}>
        <HeaderNavLink
          iconName="package"
          color={Colors.violet400}
          bgColor={Colors.violet50}
          title="Send Package"
        />

        <HeaderNavLink
          iconName="package"
          color={Colors.red400}
          bgColor={Colors.red50}
          title="Receive Package"
        />

        <HeaderNavLink
          iconName="package"
          color={Colors.green400}
          bgColor={Colors.green50}
          title="Order History"
        />
      </View>
      <LineSeperator margin={10} color={Colors.borderColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  navContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    paddingBlock: 10,
  },
});
