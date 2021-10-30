import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import React from "react";

/**
 * {@code FormInputText} creates the text input component for the CRUD interface.
 *
 * @author Teo Keng Swee
 * @author Pang Jun Rong
 * @version 1.1
 * @since 2021-10-16
 */

export const FormInputText = ({ name, control, label, min }) => {
  const checkIsValid = (value) => {
    // Here you probably what to check this to some regex validation
    if (value) {
      return "Present";
    }
    return "Not Present";
  }


  return (
    <Controller
        styles = {{border : "1px solid rgba(0, 0, 0, 0.05)", padding : "auto" }}
        name = { name } 
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
          <TextField onChange={onChange} value={value} label={label} error={!!error}
            helperText={error ? error.message : null} min={min} /> 
          </div>
        )}
        rules={{required: "This field cannot be blank", min: min}}
      />
     // , maxLength: 20, required: true, min: 3
  );
};
