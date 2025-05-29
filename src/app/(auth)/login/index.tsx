import CustomButton from "@/src/components/CustomButton";
import CustomIcon from "@/src/components/CustomIcon";
import CustomPasswordInput from "@/src/components/CustomPasswordInput";
import CustomPhoneInput from "@/src/components/CustomPhoneInput";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import Colors from "@/src/constants/colors";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const googleIcon = require("../../../../assets/images/googlelogo.png");
const appleIcon = require("../../../../assets/images/applelogo.png");

const LoginScreen = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (number: string) => {
    setPhoneInput(number);
  };

  const router = useRouter();

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

          <CustomPasswordInput
            placeholder={`Enter Password`}
            value={password}
            onChangeText={setPassword}
          />
          <Link href={"/login/reset"} style={styles.forgotLink} push>
            Forgot password?
          </Link>
          <CustomButton
            title="Log in"
            bgColor={Colors.purple}
            color={Colors.white}
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

export default LoginScreen;

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
    marginBottom: 5,
  },
  description: {
    color: Colors.text,
    fontSize: 15,
    marginBottom: 5,
  },

  forgotLink: {
    marginBlock: 10,
    textDecorationLine: "underline",
  },

  or: {
    alignSelf: "center",
    marginVertical: 10,
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
