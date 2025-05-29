import CustomButton from "@/src/components/CustomButton";
import CustomEmailInput from "@/src/components/CustomEmailInput";
import Colors from "@/src/constants/colors";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.description}>
            A verification link will be sent to your email for your password
            reset
          </Text>
        </View>
        <CustomEmailInput
          placeholder="Enter your value"
          value={email}
          onChangeText={setEmail}
        />
        <CustomButton
          title="Reset Password"
          bgColor={Colors.darkBlue}
          color={Colors.white}
          disabled={email === ""}
        />
      </View>
    </View>
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

  resendTime: {
    color: Colors.darkBlue,
    fontWeight: 600,
  },
});
