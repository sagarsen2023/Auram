import { SIZES, useThemeColor } from "@/src/constants/theme";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import ThemeText from "../theme-text.component";
import Entypo from "@expo/vector-icons/Entypo";

function PasswordInputForm({
  name,
  label,
  placeHolder,
  control,
}: {
  name: string;
  label?: string;
  placeHolder?: string;
  control: Control;
}) {
  const COLORS = useThemeColor();
  const [borderColor, setBorderColor] = useState(COLORS.borderColor);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View>
      {label && <ThemeText style={styles.labelText}>{label}</ThemeText>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.passwordInput, { borderColor }]}>
            <TextInput
              onFocus={() => {
                setBorderColor(COLORS.primary);
              }}
              onBlur={() => {
                setBorderColor(COLORS.borderColor);
                onBlur();
              }}
              placeholder={placeHolder}
              placeholderTextColor={COLORS.borderColor}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!isPasswordVisible}
              style={{
                flex: 1,
                color: COLORS.text,
              }}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Entypo name="eye-with-line" size={20} color={COLORS.primary} />
              ) : (
                <Entypo name="eye" size={20} color={COLORS.primary} />
              )}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default PasswordInputForm;

const styles = StyleSheet.create({
  passwordInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
