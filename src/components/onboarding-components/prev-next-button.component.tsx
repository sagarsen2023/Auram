import { StyleSheet, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "@/src/constants/theme";

export default function PrevNextButton({
  type,
  onPress,
  currentIndex,
  totalItemsCount,
  onEndReached,
}: {
  type: "prev" | "next";
  onPress: () => void;
  currentIndex: number;
  totalItemsCount?: number;
  onEndReached?: () => void;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          display: type === "prev" && currentIndex === 0 ? "none" : "flex",
          backgroundColor: type === "prev" ? "white" : COLORS.primary,
        },
      ]}
      onPress={
        type === "next" && currentIndex == totalItemsCount
          ? onEndReached
          : onPress
      }
    >
      {type === "next" && currentIndex == totalItemsCount ? (
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 20,
            paddingVertical: 12,
            color: "white",
          }}
        >
          Next
        </Text>
      ) : (
        <AntDesign
          name={type === "prev" ? "left" : "right"}
          size={20}
          color={type === "prev" ? COLORS.primary : "white"}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 50,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
  },
});
