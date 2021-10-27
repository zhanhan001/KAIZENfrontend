import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import { Controller } from "react-hook-form";

/**
 * {@code FormInputDate} creates a date picker component for the forms.
 *
 * @author Teo Keng Swee
 * @version 1.0
 * @since 2021-10-16
 */

export const FormInputDate = ({ name, control, label }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field : {onChange , value } }) => (
          <KeyboardDatePicker
            onChange={onChange}
            value={value}
            label={label}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};