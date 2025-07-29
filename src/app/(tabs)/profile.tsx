import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileImageContainer}>
          <Ionicons name="person" size={28} color={Colors.purple} />
          <Ionicons
            name="add-circle"
            size={20}
            color={Colors.purple}
            style={styles.iconCircle}
          />
        </View>
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <CustomButton
        title="log out"
        bgColor={Colors.darkBlue}
        color={Colors.white}
        onPress={handleLogout}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: Colors.white,
  },
  profile: {
    alignItems: "center",
  },
  profileImageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: Colors.borderColor,
    borderRadius: 35,
  },
  profileName: {
    fontSize: 18,
    marginVertical: 10,
    color: Colors.dark,
    fontWeight: 500,
  },
  iconCircle: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
