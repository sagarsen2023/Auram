import React from "react";
import { Platform } from "react-native";
import {
  BaseToast,
  ErrorToast,
  ToastShowParams,
} from "react-native-toast-message";
import { useThemeColor } from "../constants/theme";

const toastConfig = {
  success: (props: ToastShowParams) => {
    const COLORS = useThemeColor();
    return (
      <BaseToast
        {...props}
        text1Style={{
          fontSize: 17,
          color: COLORS.success,
          fontWeight: "bold",
        }}
        text2Style={{
          fontSize: 15,
          color: COLORS.text,
        }}
        style={{
          top: Platform.OS === "ios" ? 25 : 0,
          backgroundColor: COLORS.secondary,
          borderLeftColor: COLORS.success,
          borderWidth: 0.2,
          borderColor: COLORS.success,
          position: "absolute",
          zIndex: 10,
        }}
      />
    );
  },
  error: (props: ToastShowParams) => {
    const COLORS = useThemeColor();
    return (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
          color: COLORS.error,
          fontWeight: "bold",
        }}
        text2Style={{
          fontSize: 15,
          color: COLORS.text,
        }}
        style={{
          top: Platform.OS === "ios" ? 25 : 0,
          backgroundColor: COLORS.secondary,
          borderLeftColor: COLORS.error,
          borderWidth: 0.2,
          borderColor: COLORS.error,
          position: "absolute",
          zIndex: 10,
        }}
      />
    );
  },
};

export default toastConfig;
