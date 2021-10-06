import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import React from "react";

export const FormInputText = ({ name, control, label }) => {
  return (
    <Controller
        name = { name } 
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={label} />
        )}
      />
  );
};
