import CustomButton from "@/src/components/CustomButton";
import CustomEmailInput from "@/src/components/CustomEmailInput";
import CustomPasswordInput from "@/src/components/CustomPasswordInput";
import CustomTextInput from "@/src/components/CustomTextInput";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import Colors from "@/src/constants/colors";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Were almost done!</Text>
            <Text style={styles.description}>
              Enter the verification code sent to your number 090**6 to verify
              your account
            </Text>
          </View>
          <CustomTextInput
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="first name"
          />
          <CustomTextInput
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholder="last name"
          />
          <CustomEmailInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
          />
          <CustomPasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
          />
          <CustomPasswordInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm password"
          />
          <CustomButton
            title="Register"
            bgColor={Colors.purple}
            color={Colors.white}
          />
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: Colors.darkBlue,
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 10,
  },
  description: {
    color: Colors.text,
    fontSize: 15,
    lineHeight: 22.4,
  },
});
