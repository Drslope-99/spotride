import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";

type MyComponentProps = {
  children: React.ReactNode;
};

export default function SafeScreen({ children }: MyComponentProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: Colors.backgroundLight,
      }}
    >
      {children}
    </View>
  );
}
