import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomSearchInput from "../../../components/CustomSearchInput";
import HeaderHomeComponent from "../../../components/HeaderHomeComponent";
import HeaderNavLink from "../../../components/HeaderNavLink";
import LineSeperator from "../../../components/LineSeperator";
import Colors from "../../../constants/colors";

export default function HomeScreen() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const data = useMemo(() => [], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const router = useRouter();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}></View>
      <BottomSheet
        index={1}
        snapPoints={["40%", "90%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        backgroundStyle={{
          elevation: 10,
        }}
      >
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
          contentContainerStyle={styles.sheetContainer}
          ListHeaderComponent={
            <HeaderHomeComponent>
              <CustomSearchInput placeholder="Deliver to?" />
              <View style={styles.navContainer}>
                <HeaderNavLink
                  iconName="package"
                  color={Colors.violet400}
                  bgColor={Colors.violet50}
                  title="Send Package"
                  onPress={() => router.push("/home/sendpackage")}
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
            </HeaderHomeComponent>
          }
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
  sheetContainer: {
    paddingHorizontal: 10,
  },
  navContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
});
