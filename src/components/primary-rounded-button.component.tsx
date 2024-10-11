import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useThemeColor } from "../constants/theme";

export default function PrimaryRoundedButton({
  title,
  onPress,
  isLoading,
}: {
  title: string;
  isLoading?: boolean;
  onPress?: () => void;
}) {
  const COLORS = useThemeColor();
  const styles = StyleSheet.create({
    button: {
      backgroundColor: COLORS.primary,
      padding: 15,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
    },
  });
  return (
    <TouchableOpacity disabled={isLoading} style={styles.button} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={COLORS.secondary} size={"small"} style={{
        }}  />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
