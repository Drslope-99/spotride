import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HeaderHomeComponent from "../../components/HeaderHomeComponent";
import Colors from "../../constants/colors";

export default function HomeScreen() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const data = useMemo(() => [], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>weclome to the home screen</Text>
      </View>
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
          ListHeaderComponent={HeaderHomeComponent}
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
});
