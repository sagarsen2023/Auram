import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { SIZES, useThemeColor } from "../../constants/theme";
import { ReactNode } from "react";

export default function SecondaryRoundedButton({
  title,
  onPress,
  isLoading,
  buttonStyle,
  textStyle,
  children,
}: {
  title?: string;
  isLoading?: boolean;
  children?: ReactNode;
  onPress?: () => void;
  buttonStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}) {
  const COLORS = useThemeColor();
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "transparent",
      padding: SIZES.marginOrPadding.default,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: COLORS.primary,
    },
    buttonText: {
      color: COLORS.text,
      fontSize: SIZES.fontSize.large,
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
