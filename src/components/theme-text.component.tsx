import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { useThemeColor } from "@/src/constants/theme";

export default function ThemeText({
  children,
  style,
  size,
  fontWeight,
  type = "Default",
}: {
  children?: ReactNode;
  fontWeight?: TextStyle["fontWeight"];
  style?: TextStyle | TextStyle[];
  size?: number;
  type?: "Default" | "Primary";
}) {
  const COLOR = useThemeColor();
  return (
    <Text
      maxFontSizeMultiplier={1}
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
