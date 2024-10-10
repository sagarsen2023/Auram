import { SIZES, useThemeColor } from "@/src/constants/theme";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Controller, Control } from "react-hook-form";
import ThemeText from "../theme-text.component";

export default function TextInputForm({
  name,
  control,
  placeHolder,
  label,
  type,
}: {
  name: string;
  label?: string;
  type: string;
  placeHolder?: string;
  control: Control;
}) {
  const COLORS = useThemeColor();
  const [borderColor, setBorderColor] = useState(COLORS.borderColor);
  return (
    <View>
      {label && <ThemeText style={styles.labelText}>{label}</ThemeText>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onFocus={() => {
              setBorderColor(COLORS.primary);
            }}
            onBlur={() => {
              setBorderColor(COLORS.borderColor);
              onBlur();
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
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
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
