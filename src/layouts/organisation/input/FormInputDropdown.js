import React from "react";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";


const options = [
  {
    label: "Welding",
    value: "Welding",
  },
  {
    label: "Electrical Wiring",
    value: "Wiring",
  },
  {
    label: "Gas Pipefitting",
    value: "Pipefitting",
  },
  {
    label: "Waterproofing",
    value: "Waterproofing",
  },
  {
    label: "Tiling",
    value: "Tiling",
  },
  {
    label: "Thermal Insulation",
    value: "Insulation",
  },
  {
    label: "Tower Crane Operation",
    value: "Towercrane",
  },
  {
    label: "Plastering",
    value: "Plastering",
  },
  {
    label: "Lift Installation",
    value: "Lifts",
  },
  {
    label: "Mobile Crane Operation",
    value: "Crane",
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
    <FormControl>
      <Controller
        render={({ field: { onChange, value } }) => (
          <div style={{width: "19vh"}}>
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
          <FormHelperText>{label}</FormHelperText>
          </div>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};