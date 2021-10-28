import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
// import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "Positive",
    value: "true",
  },
  {
    label: "Negative",
    value: "false",
  },
];

export const FormInputRadio = ({ name, control, label }) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup value={value} label={label} onChange={onChange}>
          {generateRadioOptions()}
        </RadioGroup>
      )}
    />
  );
};
