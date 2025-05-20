import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import VerificationInput from "../components/VerificationInputs";
import Colors from "../constants/colors";

export default function Verification() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter verification code</Text>
          <Text style={styles.description}>
            Enter the verification code sent to your number 090**6 to verify
            your account
          </Text>
        </View>
        <VerificationInput />
        <Text style={styles.resendText}>
          Didn`t receive your code? Resend in
          <Text style={styles.resendTime}>00:30</Text>
        </Text>

        <Text style={styles.link} onPress={() => router.back()}>
          Change your phone number
        </Text>
      </View>
      <View style={[styles.content, styles.btnContainer]}>
        <CustomButton
          title="Verify"
          bgColor={Colors.darkBlue}
          color={Colors.white}
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
  btnContainer: {
    marginTop: "auto",
  },
});
