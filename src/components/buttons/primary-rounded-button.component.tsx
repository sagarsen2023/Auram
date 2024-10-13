import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useThemeColor } from "../../constants/theme";
import { ReactNode } from "react";

export default function PrimaryRoundedButton({
  title,
  onPress,
  isLoading,
  buttonStyle,
  textStyle,
  children,
}: {
  title?: string;
  children?: ReactNode;
  isLoading?: boolean;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
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
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.secondary} size={"small"} style={{}} />
      ) : (
        <>
          {title && <Text style={[styles.buttonText, textStyle]}>{title}</Text>}
          {children}
        </>
      )}
    </TouchableOpacity>
  );
}
