import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const categories: string[] = [
  "all",
  "delivery updates",
  "payments",
  "promotions",
  "special offer",
];

export default function NotificationScreen() {
  const [menuActive, setMenuActive] = useState("all");

  return (
    <View style={styles.container}>
      <View style={{ height: 60 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          style={{ height: 60 }}
        >
          {categories.map((cat) => {
            const isActive = cat === menuActive;

            return (
              <Pressable
                key={cat}
                style={[styles.menuBtn, isActive && styles.menuActive]}
              >
                <Text
                  style={[
                    styles.menuBtnText,
                    isActive && { color: Colors.purple },
                  ]}
                  numberOfLines={1}
                  onPress={() => setMenuActive(cat)}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    flexDirection: "row",
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
  },
  menuBtn: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  menuBtnText: {
    fontSize: 15,
    textTransform: "capitalize",
    color: Colors.text,
  },
  menuActive: {
    borderWidth: 1,
    borderColor: Colors.purple,
  },
});
