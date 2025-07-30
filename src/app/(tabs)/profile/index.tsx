import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import CustomButton from "../../components/CustomButton";
import LineSeperator from "../../../components/LineSeperator";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import { useAuth } from "../../../providers/AuthContext";

export default function ProfileScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout(); // clears isLoggedIn from AsyncStorage
    router.replace("/(auth)/login"); // redirect to login screen
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: tabBarHeight, // controls the inner content
      }}
    >
      <View style={styles.profile}>
        <Pressable style={styles.profileImageContainer}>
          <Ionicons name="person" size={32} color={Colors.purple} />
          <Ionicons
            name="add-circle"
            size={SIZES.fontXl}
            color={Colors.purple}
            style={styles.iconCircle}
          />
        </Pressable>
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profileLink}>
          <Ionicons name="person" size={SIZES.fontXl} color={Colors.purple} />
          <Text style={styles.linkTitle}>Personal information</Text>
        </TouchableOpacity>
        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <TouchableOpacity style={styles.profileLink}>
          <Ionicons
            name="lock-closed"
            size={SIZES.fontXl}
            color={Colors.dark}
          />
          <Text style={styles.linkTitle}>Login and security</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profileLink}>
          <Ionicons name="home" size={SIZES.fontXl} color={Colors.green400} />
          <Text style={styles.linkTitle}>Add home location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profileLink}>
          <Ionicons name="card" size={SIZES.fontXl} color={Colors.yellow400} />
          <Text style={styles.linkTitle}>Payments Method</Text>
        </TouchableOpacity>
        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <TouchableOpacity style={styles.profileLink}>
          <Ionicons name="globe" size={SIZES.fontXl} color={Colors.grayIcon} />
          <Text style={styles.linkTitle}>Language (english)</Text>
        </TouchableOpacity>
        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <TouchableOpacity style={styles.profileLink}>
          <Ionicons
            name="document"
            size={SIZES.fontXl}
            color={Colors.grayIcon}
          />
          <Text style={styles.linkTitle}>Terms and conditions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profileLink} onPress={handleLogout}>
          <Ionicons
            name="exit-outline"
            size={SIZES.fontXl}
            color={Colors.red400}
          />
          <Text style={[styles.linkTitle, styles.titleRed]}>Log out</Text>
        </TouchableOpacity>
        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <TouchableOpacity style={styles.profileLink}>
          <Ionicons name="trash" size={SIZES.fontXl} color={Colors.red400} />
          <Text style={[styles.linkTitle, styles.titleRed]}>
            Delete account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.spLg,
    paddingTop: SIZES.spXl,
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
    backgroundColor: Colors.violet100,
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
  profileSection: {
    backgroundColor: Colors.backgroundLight,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    paddingHorizontal: SIZES.spLg,
    paddingVertical: SIZES.spLg,
    borderRadius: SIZES.radXl,
    marginVertical: SIZES.spLg,
  },
  profileLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.spLg,
  },
  linkTitle: {
    color: Colors.dark,
    fontWeight: 400,
  },
  titleRed: {
    color: Colors.red400,
    fontWeight: 500,
  },
});
