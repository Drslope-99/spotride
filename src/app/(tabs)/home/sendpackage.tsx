// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
// import { useNavigation } from "expo-router";
// import { useLayoutEffect } from "react";
// import { Text, View } from "react-native";

// export default function SendPackageScreen() {
//   const navigation = useNavigation();
//   const tabBarHeight = useBottomTabBarHeight();

//   useLayoutEffect(() => {
//     navigation.getParent()?.setOptions({
//       tabBarStyle: { display: "none" },
//     });

//     return () =>
//       navigation.getParent()?.setOptions({
//         tabBarStyle: { height: tabBarHeight, paddingBottom: 30 },
//       });
//   }, [navigation]);

//   return (
//     <View>
//       <Text>SendPackageScreen</Text>
//     </View>
//   );
// }

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useRef } from "react";
import { Text, View } from "react-native";

export default function SendPackageScreen() {
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();

  // Store the original style once
  const originalTabBarStyle = useRef({
    height: tabBarHeight,
    paddingBottom: 30,
  });

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: originalTabBarStyle.current,
      });
    };
  }, [navigation]);

  return (
    <View>
      <Text>SendPackageScreen</Text>
    </View>
  );
}
