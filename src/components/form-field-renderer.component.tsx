import { View } from "react-native";
import TextInputForm from "./forms/text-input-form.component";
import { useFormContext } from "react-hook-form";

export type RequiredFieldsType = {
    fieldName: string;
    type: string;
}[];

export default function FormFieldRenderer({
  requiredFields,
}: {
  requiredFields: RequiredFieldsType;
}) {
  const { control } = useFormContext();
  return (
    <View>
      {requiredFields.map((field, index) => {
        return (
          <TextInputForm key={index} name={field.fieldName} control={control} />
        );
      })}
    </View>
  );
}
