import { useState } from "react";
import { StyleSheet, View } from "react-native";
import KeyboardAvoidingWrapper from "src/components/KeyboardAvoidingWrapper";
import LocationSearchInput from "../../../components/LocationSearchInput";
import PickMapAddressBtn from "../../../components/PickMapAddressBtn";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

export default function SendPackageScreen() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <LocationSearchInput
          pickup={pickupLocation}
          dropoff={dropoffLocation}
          onChangePickup={setPickupLocation}
          onChangeDropoff={setDropoffLocation}
        />
        <PickMapAddressBtn
          title="pick address via map"
          background={Colors.backgroundLight}
          borderCol={Colors.borderColor}
        />
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: SIZES.spMd,
  },
});
