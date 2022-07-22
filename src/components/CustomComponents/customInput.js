import { Form, useField, Debug } from "informed";
import TextField from "@material-ui/core/TextField";

const CustomInput = (props) => {
  const { fieldState, fieldApi, render, ref, userProps } = useField({
    ...props,
  });

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */
  return render(
    <TextField
      {...rest}
      ref={ref}
      value={!value && value !== 0 ? "" : value}
      onChange={(e) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={(e) => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      }}
    />
  );
};

export default CustomInput;
