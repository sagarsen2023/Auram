import { useColorScheme } from "react-native";

export const useThemeColor = () => {
  const colorScheme = useColorScheme();
  const COLORS = {
    primary: colorScheme === "light" ? "#704F38" : "#A67D5D",
    secondary: colorScheme === "light" ? "white" : "black",
    text: colorScheme === "light" ? "black" : "white",
    borderColor: colorScheme === "light" ? "lightgray" : "#525050",
    success: "green",
    error: "red",
  };
  return COLORS;
};

export const SIZES = {
  marginOrPadding: {
    xSmall: 4,
    small: 8,
    default: 12,
    medium: 16,
    mLarge: 20,
    large: 24,
    xLarge: 32,
  },
  fontSize: {
    xSmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xLarge: 20,
  },
};

export const TYPOGRAPHY = {
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 16,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    fontWeight: "normal",
  },
  caption: {
    fontSize: 12,
    fontWeight: "normal",
  },
};
