import { SIZES, useThemeColor } from "@/src/constants/theme";
import { useState } from "react";
import { StyleSheet, TextInput, useColorScheme } from "react-native";
import { Controller, Control } from "react-hook-form";

export default function TextInputForm({
  name,
  control,
}: {
  name: string;
  control: Control;
}) {
  const COLORS = useThemeColor();
  const [borderColor, setBorderColor] = useState(
    useColorScheme() === "dark" ? "#525050" : "lightgrey"
  );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onFocus={() => {
            setBorderColor(COLORS.primary);
          }}
          onBlur={() => {
            setBorderColor("#525050");
            onBlur(); 
          }}
          onChangeText={onChange}
          value={value}
          selectionColor={COLORS.primary}
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
});
