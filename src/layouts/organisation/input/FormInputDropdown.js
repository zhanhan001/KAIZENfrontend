import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";


const options = [
  {
    label: "Welding",
    value: "welding",
  },
  {
    label: "Electrical Wiring",
    value: "wiring",
  },
  {
    label: "Gas Pipefitting",
    value: "pipefitting",
  },
  {
    label: "Waterproofing",
    value: "waterproofing",
  },
  {
    label: "Tiling",
    value: "tiling",
  },
  {
    label: "Thermal Insulation",
    value: "insulation",
  },
  {
    label: "Tower Crane Operation",
    value: "towercrane",
  },
  {
    label: "Plastering",
    value: "plastering",
  },
  {
    label: "Lift Installation",
    value: "lift",
  },
  {
    label: "Mobile Crane Operation",
    value: "mobilecrane",
  },

];

export const FormInputDropdown = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};