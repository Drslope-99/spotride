import CustomButton from "@/src/components/CustomButton";
import CustomIcon from "@/src/components/CustomIcon";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomPhoneInput from "@/src/components/CustomPhoneInput";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import Colors from "@/src/constants/colors";
const googleIcon = require("../../../../assets/images/googlelogo.png");
const appleIcon = require("../../../../assets/images/applelogo.png");

const SignUpScreen = () => {
  const [phoneInput, setPhoneInput] = useState("");

  const handlePhoneChange = (number: string) => {
    setPhoneInput(number);
  };

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/signup/verify");
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Welcome to Spotride!</Text>
          <Text style={styles.description}>
            Please enter your phone number to continue
          </Text>
          <CustomPhoneInput
            onPhoneChange={handlePhoneChange}
            value={phoneInput}
          />

          <CustomButton
            title="Continue"
            bgColor={Colors.purple}
            color={Colors.white}
            onPress={handleSubmit}
            disabled={false}
          />
        </View>

        <Text style={styles.or}>Or</Text>

        <View style={styles.section}>
          <CustomButton
            title="Continue with Google"
            bgColor={Colors.backgroundLight}
            color={Colors.darkBlue}
            borderCol={Colors.borderColor}
          >
            <CustomIcon src={googleIcon} />
          </CustomButton>
          <CustomButton
            title="Continue with Apple"
            bgColor={Colors.backgroundLight}
            color={Colors.darkBlue}
            borderCol={Colors.borderColor}
          >
            <CustomIcon src={appleIcon} />
          </CustomButton>
        </View>

        <View style={styles.policy}>
          <Text style={styles.policyText}>
            By proceeding, i agree to all Spotrides{" "}
            <Link style={styles.textLink} href="https://example.com">
              Terms of Service{" "}
            </Link>
            and{" "}
            <Link style={styles.textLink} href="https://example.com">
              Privacy Policy
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  section: {},
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: Colors.darkBlue,
    marginBottom: 10,
  },
  description: {
    color: Colors.text,
    fontSize: 15,
    marginBottom: 10,
  },

  or: {
    alignSelf: "center",
    marginVertical: 15,
    fontSize: 18,
  },
  policy: {
    marginTop: "auto",
  },
  policyText: {
    color: Colors.text,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 20,
  },
  textLink: {
    color: Colors.darkBlue,
    fontWeight: 500,
    textDecorationLine: "underline",
  },
});
