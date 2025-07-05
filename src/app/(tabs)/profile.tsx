import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import Colors from "../../constants/colors";
import { useAuth } from "../../providers/AuthContext";

export default function ProfileScreen() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout(); // clears isLoggedIn from AsyncStorage
    router.replace("/(auth)/login"); // redirect to login screen
  };

  return (
    <View style={styles.container}>
      <Text>The Profile page</Text>
      <CustomButton
        title="log out"
        bgColor={Colors.darkBlue}
        color={Colors.white}
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
