import { StyleSheet, View } from "react-native";
import TextInputForm from "./forms/text-input-form.component";
import { useFormContext } from "react-hook-form";
import PasswordInputForm from "./forms/password-input-form.component";
import { ErrorMessage } from "@hookform/error-message";
import ThemeText from "./theme-text.component";
import { SIZES } from "../constants/theme";

export type RequiredFieldsType = {
  fieldName: string;
  label?: string;
  type: "name" | "username" | "email" | "password";
  placeHolder?: string;
}[];

export default function FormFieldRenderer({
  requiredFields,
}: {
  requiredFields: RequiredFieldsType;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <View
      style={{
        gap: 15,
      }}
    >
      {requiredFields.map((field, index) => {
        return field.type !== "password" ? (
          <View key={index} style={{ flex: 1 }}>
            <TextInputForm
              type={field.type}
              label={field.label}
              name={field.fieldName}
              placeHolder={field.placeHolder}
              control={control}
            />
            <ErrorMessage
              errors={errors}
              name={field.fieldName}
              render={({ message }) => (
                <ThemeText style={styles.errorMessage}>{message}</ThemeText>
              )}
            />
          </View>
        ) : (
          <View key={index} style={{ flex: 1 }}>
            <PasswordInputForm
              label={field.label}
              control={control}
              name={field.fieldName}
              placeHolder={field.placeHolder}
            />
            <ErrorMessage
              errors={errors}
              name={field.fieldName}
              render={({ message }) => (
                <ThemeText style={styles.errorMessage}>{message}</ThemeText>
              )}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: SIZES.fontSize.small,
    textAlign: "right",
    marginTop: SIZES.marginOrPadding.xSmall,
  },
});
