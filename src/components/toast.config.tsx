import React from "react";
import { ViewStyle, TextStyle, Platform } from "react-native";
import {
  BaseToast,
  ErrorToast,
  SuccessToast,
  ToastShowParams,
} from "react-native-toast-message";
import { useThemeColor } from "../constants/theme";

const toastConfig = {
  success: (props: ToastShowParams) => {
    const COLORS = useThemeColor();
    return (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "pink" } as ViewStyle}
        contentContainerStyle={{ paddingHorizontal: 15 } as ViewStyle}
        text1Style={
          {
            fontSize: 15,
            color: COLORS.text,
            fontWeight: "400",
          } as TextStyle
        }
      />
    );
  },
  error: (props: ToastShowParams) => {
    const COLORS = useThemeColor();
    return (
      <ErrorToast
        {...props}
        text1Style={
          {
            fontSize: 17,
            color: COLORS.primary,
          } as TextStyle
        }
        text2Style={
          {
            fontSize: 15,
            color: COLORS.primary,
          } as TextStyle
        }
        style={{
          marginTop: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: COLORS.secondary,
          borderLeftColor: "red",
          borderWidth: 0.2,
          borderColor: "red",
        }}
      />
    );
  },
};

export default toastConfig;
