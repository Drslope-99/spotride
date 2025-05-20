import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import appleIcon from "../../assets/images/applelogo.png";
import googleIcon from "../../assets/images/googlelogo.png";
import CustomButton from "../components/CustomButton";
import CustomEmailInput from "../components/CustomEmailInput";
import CustomIcon from "../components/CustomIcon";
import CustomPasswordInput from "../components/CustomPasswordInput";
import CustomPhoneInput from "../components/CustomPhoneInput";
import CustomTextInput from "../components/CustomTextInput";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import Colors from "../constants/colors";

const Login = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePhoneChange = (number: string) => {
    setPhoneInput(number);
  };

  const router = useRouter();

  const handleSubmit = () => {
    const details = { phoneInput, firstName, password, confirmPassword };
    console.log(details);
    router.push("/verification");
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
          <CustomTextInput
            placeholder={`First Name`}
            value={firstName}
            onChangeText={setFirstName}
          />
          <CustomEmailInput
            placeholder={`Email Address`}
            value={email}
            onChangeText={setEmail}
          />
          <CustomPasswordInput
            placeholder={`Enter Password`}
            value={password}
            onChangeText={setPassword}
          />
          <CustomPasswordInput
            placeholder={`Confirm Password`}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
