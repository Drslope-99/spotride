import CustomButton from "@/src/components/CustomButton";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import VerificationInput from "@/src/components/VerificationInputs";
import Colors from "@/src/constants/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const correctCode = "123456";

export default function VerificationScreen() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const [error, setError] = useState(false);
  const router = useRouter();

  const disabled = code.join("").length < 6;

  const handleCodeSubmit = (completeCode: string) => {
    if (completeCode !== correctCode || completeCode.length < 6) {
      setError(true);
    } else {
      setError(false);
      router.replace("/signup/register");
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Enter verification code</Text>
            <Text style={styles.description}>
              Enter the verification code sent to your number 090**6 to verify
              your account
            </Text>
          </View>
          <VerificationInput
            value={code}
            onChange={setCode}
            onSubmit={handleCodeSubmit}
            error={error}
          />
          <Text style={styles.resendText}>
            Didn`t receive your code? Resend in
            <Text style={styles.resendTime}>00:30</Text>
          </Text>

          <Text style={styles.link} onPress={() => router.back()}>
            Change your phone number
          </Text>
        </View>
        <View style={styles.content}>
          <CustomButton
            title="Verify"
            bgColor={Colors.darkBlue}
            color={Colors.white}
            onPress={() => handleCodeSubmit(code.join(""))}
            disabled={disabled}
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
    padding: 20,
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
  resendText: {
    marginVertical: 25,
    fontSize: 15,
    color: Colors.text,
  },
  resendTime: {
    color: Colors.darkBlue,
    fontWeight: 600,
  },
  link: {
    fontSize: 15,
    color: Colors.darkBlue,
    textDecorationLine: "underline",
    textDecorationColor: "red",
  },
});
