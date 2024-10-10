import { View } from "react-native";
import TextInputForm from "./forms/text-input-form.component";
import { useFormContext } from "react-hook-form";
import PasswordInputForm from "./forms/password-input-form.component";

export type RequiredFieldsType = {
  fieldName: string;
  label?: string;
  type: "text" | "password";
  placeHolder?: string;
}[];

export default function FormFieldRenderer({
  requiredFields,
}: {
  requiredFields: RequiredFieldsType;
}) {
  const { control } = useFormContext();
  return (
    <View
      style={{
        gap: 15,
      }}
    >
      {requiredFields.map((field, index) => {
        return field.type === "text" ? (
          <TextInputForm
            key={index}
            label={field.label}
            name={field.fieldName}
            placeHolder={field.placeHolder}
            control={control}
          />
        ) : (
          <PasswordInputForm
            key={index}
            label={field.label}
            control={control}
            name={field.fieldName}
            placeHolder={field.placeHolder}
          />
        );
      })}
    </View>
  );
}
