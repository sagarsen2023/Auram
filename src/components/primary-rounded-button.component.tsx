import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useThemeColor } from "../constants/theme";

export default function PrimaryRoundedButton({
  title,
  onPress,
}: {
  title: string;
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
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
