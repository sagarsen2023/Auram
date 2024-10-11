import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useThemeColor } from "../constants/theme";
import { ReactNode } from "react";

export default function ThemeModal({
  isModalVisible,
  setIsModalVisible,
  onModalClose,
  children,
}: {
  isModalVisible: boolean;
  children?: ReactNode;
  setIsModalVisible: (value: boolean) => void;
  onModalClose?: () => void;
}) {
  const COLORS = useThemeColor();
  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        if (onModalClose) onModalClose();
        setIsModalVisible(false);
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          if (onModalClose) onModalClose();
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modalContent,
                {
                  backgroundColor: COLORS.secondary,
                  borderColor: COLORS.primary,
                },
              ]}
            >
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    width: "80%",
  },
});
