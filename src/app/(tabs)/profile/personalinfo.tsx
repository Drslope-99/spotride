import { ScrollView, StyleSheet, View } from "react-native";
import CustomEmailInput from "src/components/CustomEmailInput";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

export default function PersonalInfoScreen() {
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <CustomTextInput label="First Name" value="John" disabled={true} />
          <CustomTextInput label="Last Name" value="Doe" disabled={true} />
          <CustomTextInput
            label="Phone Number"
            value="09078993060"
            disabled={true}
          />
          <CustomEmailInput
            value="realjohndoe@gmail.com"
            onChangeText={() => {}}
            disabled={true}
          />
          <CustomButton
            title="Continue"
            bgColor={Colors.purple}
            color={Colors.white}
            disabled={true}
          />
        </ScrollView>
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
    flexGrow: 1,
    paddingVertical: SIZES.spLg,
    paddingHorizontal: SIZES.spLg,
    paddingBottom: 80,
  },
});
