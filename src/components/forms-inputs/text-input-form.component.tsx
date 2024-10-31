import { View } from "react-native";
import { Controller, Control } from "react-hook-form";
import ThemeTextInput from "./theme-text-input.component";

export default function TextInputForm({
  name,
  control,
  placeHolder,
  label,
  type,
  onChange,
  onBlur,
  value,
}: {
  name: string;
  label?: string;
  type: string;
  placeHolder?: string;
  control?: Control;
  onChange?: () => void;
  onBlur?: () => void;
  value?: string;
}) {
  return (
    <View>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemeTextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeHolder={placeHolder}
              type={type}
              label={label}
            />
          )}
        />
      ) : (
        <ThemeTextInput
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeHolder={placeHolder}
          type={type}
          label={label}
        />
      )}
    </View>
  );
}
