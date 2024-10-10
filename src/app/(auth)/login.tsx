import ThemeText from "@/src/components/theme-text.component";
import { SIZES, useThemeColor } from "@/src/constants/theme";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const COLORS = useThemeColor()
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.secondary,
    }}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.loginContainer}>
            <ThemeText size={24} fontWeight={"bold"}>
              Login
            </ThemeText>
            <ThemeText size={16} style={styles.subText}>
             Hi! Welcome back, you have been missed.
            </ThemeText>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
  subText: {
    marginVertical: SIZES.marginOrPadding.medium,
  }
});
