import { View, StyleSheet } from "react-native";
import { SIZES, useThemeColor } from "../constants/theme";
import ThemeText from "./theme-text.component";

export default function OrSeparator({ text }: { text: string }) {
  const COLORS = useThemeColor();
  const style = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    separator: {
      height: 2,
      flex: 1,
      backgroundColor: COLORS.text,
      borderBottomWidth: 1,
      opacity: 0.2,
    },
  });
  return (
    <View style={style.wrapper}>
      <View style={style.separator} />
      <ThemeText
        size={SIZES.fontSize.medium}
        style={{
          color: COLORS.text,
          opacity: 0.7,
        }}
      >
        {text}
      </ThemeText>
      <View style={style.separator} />
    </View>
  );
}
