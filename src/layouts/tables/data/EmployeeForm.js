import React, { useState } from "react";

import { FormInputText } from "layouts/tables/input/FormInputText";
import { FormInputDate } from "layouts/tables/input/FormInputDate";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import SuiButton from "components/SuiButton";

import { FormProvider, useForm } from "react-hook-form";

import { Auth } from "aws-amplify";


export default function EmployeeForm(props) {
  const employee = props.attr;

  const defaultValues = {
    workId: employee.workId || "",
    name: employee.name || "",
    email: employee.email || "",
    employeeRole: employee.employeeRole || "",
    passportNumber: employee.passportNumber || "",
    workPermitNumber: employee.workPermitNumber || "",
    levy: employee.levy || "",
    workContactNumber: employee.workContactNumber || "",
    workSiteLocation: employee.workSiteLocation || "",
    singaporeAddress: employee.singaporeAddress || "",
    vaccStatus: employee.vaccStatus || "",
    covidResult: employee.covidResult || "",
    workPermitDateOfIssue: employee.workPermitDateOfIssue || new Date(),
    workPermitExpiryDate: employee.workPermitExpiryDate || new Date(),
  };

  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, control, reset } = methods;

  const onSubmit = (data) => {
    const response = Auth.currentSession().then((res) => {
        fetch('/api/employees' + (employee.id ? '/' + employee.id : ''), {
            method: (employee.id) ? 'PUT' : 'POST',
            headers: {
                'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        console.log(JSON.stringify(data));
    });
    window.location.reload();
  };

  return (
    <DialogContent>
      <FormInputText name="workId" control={control} label="Work ID" />

      <FormInputText name="name" control={control} label="Employee Name" />
      
      <FormInputText name="email" control={control} label="Email" />
      <FormInputText
        name="employeeRole"
        control={control}
        label="Employee Role"
      />
      <FormInputText
        name="passportNumber"
        control={control}
        label="Passport Number"
      />

      <FormInputText
        name="workPermitNumber"
        control={control}
        label="Work Permit Number"
      />
      <FormInputText name="levy" control={control} label="Levy" />
      <FormInputText
        name="workContactNumber"
        control={control}
        label="Contact Number"
      />
      <FormInputText
        name="workSiteLocation"
        control={control}
        label="WorkSite Location"
      />
      <FormInputText
        name="singaporeAddress"
        control={control}
        label="Singapore Address"
      />

      <FormInputText
        name="vaccStatus"
        control={control}
        label="Vaccination Status"
      />
      <FormInputText
        name="covidResult"
        control={control}
        label="Covid Test Result"
      />

      <FormInputDate
        name="workPermitDateOfIssue"
        control={control}
        label="Work Permit Date of Issue"
      />
      <FormInputDate
        name="workPermitExpiryDate"
        control={control}
        label="Work Permit Expiry"
      />
      <SuiButton onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </SuiButton>
      <SuiButton onClick={() => reset()} variant={"outlined"}>
        Reset
      </SuiButton>
    </DialogContent>
  );
}
