import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-native-international-phone-number";
import Colors from "../constants/colors";

type PhoneInputProps = {
  onPhoneChange: (number: string) => void;
  value: string;
};

export default function CustomPhoneInput({
  onPhoneChange,
  value,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState();

  function handleSelectedCountry(country: any) {
    setSelectedCountry(country);
  }

  return (
    <View style={{ width: "100%", padding: 0, marginVertical: 20 }}>
      <Text style={styles.label}>Phone number</Text>
      <PhoneInput
        placeholder="904 407 6884"
        phoneInputStyles={{
          container: {
            backgroundColor: Colors.backgroundLight,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: isValidPhoneNumber(value, selectedCountry)
              ? Colors.purple
              : Colors.borderColor,
          },
          flagContainer: {
            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
            backgroundColor: Colors.backgroundLight,
            justifyContent: "center",
          },
          caret: {
            color: Colors.grayIcon,
            fontSize: 14,
          },
          callingCode: {
            fontSize: 14,
            fontWeight: 400,
            color: Colors.darkBlue,
          },
          input: {
            color: Colors.darkBlue,
            fontSize: 14,
          },
        }}
        value={value}
        onChangePhoneNumber={(number) => onPhoneChange(number)}
        selectedCountry={selectedCountry}
        defaultCountry="NG"
        onChangeSelectedCountry={handleSelectedCountry}
        allowZeroAfterCallingCode={false}
      />
      {/* <View style={{ marginTop: 10 }}>
        <Text>
          Country: {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
        </Text>
        <Text>
          Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
        </Text>
        <Text>
          isValid:{" "}
          {isValidPhoneNumber(inputValue, selectedCountry) ? "true" : "false"}
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    paddingVertical: 7,
  },
});
