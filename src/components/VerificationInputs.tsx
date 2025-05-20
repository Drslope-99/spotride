/* import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Colors from "../constants/colors";

export default function VerificationInput() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputs = useRef([]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      if (code[index] === "") {
        if (index > 0) {
          const newCode = [...code];
          newCode[index - 1] = "";
          setCode(newCode);
          inputs.current[index - 1].focus();
        }
      } else {
        const newCode = [...code];
        newCode[index] = ""; // clear current box
        setCode(newCode);
      }
    }
  };

  const handleBoxPress = (index) => {
    inputs.current[index].focus();
  };

  const handleSubmit = () => {
    const input = code.join("");
    if (isFinite(input) && input.length === 6) {
    }
    return;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.keyboardAvoidingContainer}
    >
      <View style={styles.container}>
        {code.map((digit, index) => (
          <Pressable key={index} onPress={() => handleBoxPress(index)}>
            <TextInput
              ref={(ref) => (inputs.current[index] = ref)}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              onSubmitEditing={handleSubmit}
              keyboardType="number-pad"
              maxLength={1}
              style={[
                styles.input,
                digit !== "" && styles.filledInput,
                index === 0 && styles.firstInput,
                index === 5 && styles.lastInput,
              ]}
              autoFocus={index === 0}
              selectionColor={Colors.lightGray}
            />
          </Pressable>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {},
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderColor: Colors.borderColor,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    backgroundColor: Colors.backgroundLight,
    color: Colors.darkBlue,
  },
  filledInput: {
    borderColor: Colors.green,
  },
});
 */

import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  TextInput as RNTextInput,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import Colors from "../constants/colors";

export default function VerificationInput() {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const inputs = useRef<(RNTextInput | null)[]>([]);

  const handleChange = (text: string, index: number): void => {
    if (!/^\d?$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ): void => {
    if (e.nativeEvent.key === "Backspace") {
      if (code[index] === "") {
        if (index > 0) {
          const newCode = [...code];
          newCode[index - 1] = "";
          setCode(newCode);
          inputs.current[index - 1]?.focus();
        }
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };

  const handleBoxPress = (index: number): void => {
    inputs.current[index]?.focus();
  };

  const handleSubmit = (): void => {
    const input = code.join("");
    if (isFinite(Number(input)) && input.length === 6) {
      // Handle submission
      console.log("Verification Code:", input);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.keyboardAvoidingContainer}
    >
      <View style={styles.container}>
        {code.map((digit, index) => (
          <Pressable key={index} onPress={() => handleBoxPress(index)}>
            <TextInput
              ref={(ref) => (inputs.current[index] = ref)}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              onSubmitEditing={handleSubmit}
              keyboardType="number-pad"
              maxLength={1}
              style={[
                styles.input,
                digit !== "" && styles.filledInput,
                index === 0 && styles.firstInput,
                index === 5 && styles.lastInput,
              ]}
              autoFocus={index === 0}
              selectionColor={Colors.lightGray}
            />
          </Pressable>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {},
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderColor: Colors.borderColor,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: Colors.backgroundLight,
    color: Colors.darkBlue,
  },
  filledInput: {
    borderColor: Colors.green,
  },
  firstInput: {},
  lastInput: {},
});
