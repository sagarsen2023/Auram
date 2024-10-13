import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { useThemeColor } from "@/src/constants/theme";

export default function ThemeText({
  children,
  style,
  size,
  fontWeight,
  type = "Default",
  numberOfLines,
}: {
  children?: ReactNode;
  fontWeight?: TextStyle["fontWeight"];
  style?: TextStyle | TextStyle[];
  size?: number;
  type?: "Default" | "Primary";
  numberOfLines?: number;
}) {
  const COLOR = useThemeColor();
  return (
    <Text
      maxFontSizeMultiplier={1}
      numberOfLines={numberOfLines}
      style={[
        {
          color: type === "Default" ? COLOR.text : COLOR.primary,
          fontSize: size,
          fontWeight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
