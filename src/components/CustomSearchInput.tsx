import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SIZES from "src/constants/sizes";
import Colors from "../constants/colors";

type SearchInputProps = {
  placeholder: string;
};

export default function CustomSearchInput({ placeholder }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="search" size={SIZES.fontXl} color={Colors.grayIcon} />
      </View>

      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGray}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={input}
        onChangeText={setInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundLight,
    marginVertical: 8,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    overflow: "hidden",
    borderRadius: 50,
  },
  iconBox: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 45,
    textAlignVertical: "center",
    color: Colors.text,
  },
  inputFocused: {
    // borderColor: Colors.purple,
  },
});
