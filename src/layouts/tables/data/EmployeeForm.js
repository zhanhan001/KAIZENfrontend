import React from "react";

import { FormInputText } from "layouts/tables/input/FormInputText";
import { FormInputDate } from "layouts/tables/input/FormInputDate";

import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";

import SuiButton from "components/SuiButton";

import { useForm } from "react-hook-form";
import styles from "layouts/tables/styles";

import { Auth } from "aws-amplify";
import SuiTypography from "components/SuiTypography";
import { Divider } from "@mui/material";


export default function EmployeeForm(props) {
  const classes = styles();
  const employee = props.attr;

  console.log("testing" + employee);

  const defaultValues = {
    workId: employee[1] || "",
    name: employee[0] || "",
    email: employee[2] || "",
    employeeRole: employee[3] || "",
    passportNumber: employee[4] || "",
    workPermitNumber: employee[5] || "",
    levy: employee[6] || "",
    workContactNumber: employee[7] || "",
    workSiteLocation: employee[8] || "",
    singaporeAddress: employee[9] || "",
    vaccStatus: employee[10] || "",
    covidResult: employee[11] || "",
    workPermitDateOfIssue: employee[12] || new Date(),
    workPermitExpiryDate: employee[13] || new Date(),
  };

  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, control, reset } = methods;

  const onSubmit = (data) => {
    const response = Auth.currentSession().then((res) => {
      fetch('/api/employees' + (employee[5] ? '/' + employee[5] : ''), {
        method: (employee[5]) ? 'PUT' : 'POST',
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
      <SuiTypography variant="h6" textColor="info" fontWeight="bold" textGradient>
        Personal Particulars
      </SuiTypography>
      <SuiBox customClass={classes.tables_table} pt={1}>
        <FormInputText name="workId" control={control} label="Work ID" />
      </SuiBox>

      <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
        <Grid container spacing={1} direction={'row'}>
          <Grid item>
            <FormInputText name="name" control={control} label="Employee Name" />
          </Grid>
          <Grid item>
            <FormInputText name="email" control={control} label="Email" />
          </Grid>
          <Grid item>
            <FormInputText
              name="passportNumber"
              control={control}
              label="Passport Number"
            />
          </Grid>
          <Grid item>
            <FormInputText
              name="workContactNumber"
              control={control}
              label="Contact Number"
            />
          </Grid>
        </Grid>
      </SuiBox>

      <Divider variant="middle" />
      <SuiTypography variant="h6" textColor="info" fontWeight="bold" textGradient>
        Job Details
      </SuiTypography>

      <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
        <Grid container spacing={1} direction={'row'}>
          <Grid item>
            <FormInputText
              name="employeeRole"
              control={control}
              label="Employee Role"
            />
          </Grid>
          <Grid item>
            <FormInputText
              name="workPermitNumber"
              control={control}
              label="Work Permit Number"
            />
          </Grid>
          <Grid item>
            <FormInputDate
              name="workPermitDateOfIssue"
              control={control}
              label="Work Permit Issue Date"
            />
          </Grid>
          <Grid item>
            <FormInputDate
              name="workPermitExpiryDate"
              control={control}
              label="Work Permit Expiry"
            />
          </Grid>
          <Grid item>
            <FormInputText
              name="workSiteLocation"
              control={control}
              label="Work Location"
            />
          </Grid>
          <Grid item>
            <FormInputText
              name="singaporeAddress"
              control={control}
              label="Residence Address"
            />
          </Grid>
          <Grid item>
            <FormInputText name="levy" control={control} label="Levy" />
          </Grid>
        </Grid>
      </SuiBox>

      <Divider variant="middle" />
      <SuiTypography variant="h6" textColor="info" fontWeight="bold" textGradient>
        Health Information
      </SuiTypography>
      <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
        <Grid container spacing={1} direction={'row'}>
          <Grid item>
            <FormInputText
              name="vaccStatus"
              control={control}
              label="Vaccination Status"
            />
          </Grid>
          <Grid item>
            <FormInputText
              name="covidResult"
              control={control}
              label="Covid Test Result"
            />
          </Grid>
        </Grid>
      </SuiBox>

      <SuiBox py={3}>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <SuiButton size="medium" onClick={handleSubmit(onSubmit)} variant={"contained"} buttonColor="success" circular>
              Submit
            </SuiButton>
          </Grid>
          <Grid item>
            <SuiButton size="medium" variant={"contained"} buttonColor="error" circular onClick={() => reset()}>
              Reset
            </SuiButton>
          </Grid>
        </Grid>
      </SuiBox>

    </DialogContent>
  );
}
