import { SIZES, useThemeColor } from "@/src/constants/theme";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import ThemeText from "../theme-text.component";

const ThemeTextInput = ({
  onChange,
  onBlur,
  value,
  placeHolder,
  type,
  label,
}: {
  onChange?: (e: string) => void;
  onBlur?: () => void;
  value?: string;
  placeHolder?: string;
  type?: string;
  label?: string;
}) => {
  const COLORS = useThemeColor();
  const [borderColor, setBorderColor] = useState(COLORS.borderColor);

  return (
    <View>
      {label && <ThemeText style={styles.labelText}>{label}</ThemeText>}
      <TextInput
        onFocus={() => {
          setBorderColor(COLORS.primary);
        }}
        onBlur={() => {
          setBorderColor(COLORS.borderColor);
          onBlur && onBlur();
        }}
        onChangeText={onChange}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.borderColor}
        selectionColor={COLORS.primary}
        autoCapitalize={type === "email" ? "none" : "sentences"}
        style={[
          styles.textInput,
          {
            borderColor,
            color: COLORS.text,
          },
        ]}
      />
    </View>
  );
};

export default ThemeTextInput;

const styles = StyleSheet.create({
    textInput: {
      width: "100%",
      height: 50,
      borderRadius: 20,
      borderWidth: 1,
      paddingHorizontal: SIZES.marginOrPadding.large,
    },
    labelText: {
      fontSize: SIZES.fontSize.medium,
      marginBottom: SIZES.marginOrPadding.small,
    },
  });