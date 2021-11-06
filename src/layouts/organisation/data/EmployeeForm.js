
import React from "react";
import { FormInputText } from "layouts/organisation/input/FormInputText";
import { FormInputDate } from "layouts/organisation/input/FormInputDate";
import { FormInputRadio } from "layouts/organisation/input/FormInputRadio";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import { useForm } from "react-hook-form";
import styles from "layouts/organisation/styles";
import { Auth } from "aws-amplify";
import SuiTypography from "components/SuiTypography";
import { Divider } from "@mui/material";

/**
 * {@code EmployeeForm} creates the form component for the CRUD interface.
 *
 * @author Teo Keng Swee
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-16
 */

export default function EmployeeForm(props) {
  const classes = styles();
  const employee = props.attr;

  console.log(employee);

  const defaultValues = {
    workId: employee[2] || "",
    name: employee[0] || "",
    employeeRole: employee[3] || "",
    passportNumber: employee[4] || "",
    workPermitNumber: employee[1] || "",
    levy: employee[5] || "",
    workContactNumber: employee[6] || "",
    workSiteLocation: employee[7] || "",
    singaporeAddress: employee[11] || "",
    vaccStatus: employee[12] || "",
    description: employee[10] || "",
    workPermitDateOfIssue: employee[8] || new Date(),
    workPermitExpiryDate: employee[9] || new Date(),
  };

  const methods = useForm({ defaultValues: defaultValues });
  const { register, handleSubmit, control, reset, formState: { errors } } = methods;
  console.log(errors);

  function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      );
    }
    return keyValuePairs.join("&");
  }

  const onSubmit = (data) => {
    const response = Auth.currentSession().then((res) => {
      const queryString = objToQueryString({
        compId: res.getIdToken().payload['cognito:groups'][0]
      });
      fetch(
        "/api/employees" +
        (employee[1] ? "/" + employee[1] : "") +
        `?${queryString}`,
        {
          method: employee[1] ? "PUT" : "POST",
          headers: {
            Authorization: "Bearer " + res.getIdToken().getJwtToken(),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(JSON.stringify(data));
    }).then((getResponse) => {
        if (Endpoint.lastStatus == 400) {
          alert("Error occured. Please ensure that the fields are correctly inputted");
        } else {
          alert("Employee updated!");       
        }
     
    }).catch((error) => {
        alert("Error occured. Please try again");
      });

      window.location.reload();
  };
  // ref={register({
  //   required: true, minLength: 10
  return employee[12] ? (
    <DialogContent>
      <SuiTypography
        variant="h6"
        textColor="info"
        fontWeight="bold"
        textGradient
      >
        Personal Particulars
      </SuiTypography>
      <SuiBox customClass={classes.tables_table} pt={1}>
        <FormInputText
          name="workId"
          control={control}
          label="Work ID"
          min={3}
        />

      </SuiBox>

      <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
        <Grid container spacing={1} direction={"row"}>
          <Grid item>
            <FormInputText
              name="name"
              control={control}
              label="Employee Name"
            />
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
      <SuiTypography
        variant="h6"
        textColor="info"
        fontWeight="bold"
        textGradient
      >
        Job Details
      </SuiTypography>

      <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
        <Grid container spacing={1} direction={"row"}>
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
      <SuiTypography
        variant="h6"
        textColor="info"
        fontWeight="bold"
        textGradient
      >
        Employee Description
      </SuiTypography>
      <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
        <Grid container spacing={1} direction={"row"}>
          <Grid item>
            <FormInputText
              name="description"
              control={control}
              label="Description"
            />
          </Grid>
        </Grid>
      </SuiBox>

      <SuiBox py={3}>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <SuiButton
              size="medium"
              onClick={handleSubmit(onSubmit)}
              variant={"contained"}
              buttonColor="success"
              circular
            >
              Submit
            </SuiButton>
          </Grid>
          <Grid item>
            <SuiButton
              size="medium"
              variant={"contained"}
              buttonColor="error"
              circular
              onClick={() => reset()}
            >
              Reset
            </SuiButton>
          </Grid>
        </Grid>
      </SuiBox>
    </DialogContent>
  ) : (<DialogContent>
    <SuiTypography
      variant="h6"
      textColor="info"
      fontWeight="bold"
      textGradient
    >
      Personal Particulars
    </SuiTypography>
    <SuiBox customClass={classes.tables_table} pt={1}>
      <FormInputText name="workId" control={control} label="Work ID" />
    </SuiBox>

    <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
      <Grid container spacing={1} direction={"row"}>
        <Grid item>
          <FormInputText
            name="name"
            control={control}
            label="Employee Name"
          />
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
    <SuiTypography
      variant="h6"
      textColor="info"
      fontWeight="bold"
      textGradient
    >
      Job Details
    </SuiTypography>

    <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
      <Grid container spacing={1} direction={"row"}>
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
    <SuiTypography
      variant="h6"
      textColor="info"
      fontWeight="bold"
      textGradient
    >
      Health Information
    </SuiTypography>
    <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
      <Grid container spacing={1} direction={"row"}>
        <Grid item>
          <FormInputRadio
            name="vaccStatus"
            control={control}
            label="Vaccination Status"
          />
        </Grid>
      </Grid>
    </SuiBox>


    <Divider variant="middle" />
    <SuiTypography
      variant="h6"
      textColor="info"
      fontWeight="bold"
      textGradient
    >
      Employee Description
    </SuiTypography>
    <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
      <Grid container spacing={1} direction={"row"}>
        <Grid item>
          <FormInputText
            name="description"
            control={control}
            label="Description"
          />
        </Grid>
      </Grid>
    </SuiBox>

    <SuiBox py={3}>
      <Grid container direction="row" spacing={3}>
        <Grid item>
          <SuiButton
            size="medium"
            onClick={handleSubmit(onSubmit)}
            variant={"contained"}
            buttonColor="success"
            circular
          >
            Submit
          </SuiButton>
        </Grid>
        <Grid item>
          <SuiButton
            size="medium"
            variant={"contained"}
            buttonColor="error"
            circular
            onClick={() => reset()}
          >
            Reset
          </SuiButton>
        </Grid>
      </Grid>
    </SuiBox>
  </DialogContent>);
}

