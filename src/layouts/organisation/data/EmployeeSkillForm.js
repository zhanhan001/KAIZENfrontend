import React from "react";
import { FormInputText } from "layouts/organisation/input/FormInputText";
import { FormInputDropdown } from "layouts/organisation/input/FormInputDropdown";
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
 * {@code EmployeeTable} creates the layout for the CRUD interface.
 *
 * @author Chong Zhan Han
 * @author Tan Jie En
 * @author Teo Keng Swee 
 * @version 1.0
 * @since 2021-10-18
 */

export default function EmployeeSkillForm(props) {
  const classes = styles();
  const employeeSkill = props.attr || ["","","","",""];

  console.log("Testinggg  " + employeeSkill);

  const defaultValues = {
    employeeId: employeeSkill[0] ,
    skillId: employeeSkill[1] ,
    cost:employeeSkill[2] ,
    experience:employeeSkill[3] ,
    rating:employeeSkill[4] ,
  };



  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, control, reset } = methods;

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
        empId: data.employeeId,
        skillId: data.skillId
      });
      var dataFormatted = {
          "id" : {
              "employee" : data.employeeId,
              "skill" : data.skillId
          },
          "experience" : data.experience,
          "rating" : data.rating,
          "cost" : data.cost
      }
      fetch("/api/employeeSkills" +
      (employeeSkill[0] ? `?${queryString}` : "") , { 
        method: employeeSkill[0] ? "PUT" : "POST",
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFormatted),
      });
      console.log("sending post request " + JSON.stringify(dataFormatted));
    });
    window.location.reload();
  };

  return (
    <DialogContent>
      <SuiTypography
        variant="h6"
        textColor="info"
        fontWeight="bold"
        textGradient
      >
        Add/Edit Employee Skills
      </SuiTypography>
      <SuiBox customClass={classes.tables_table} pt={1}>
        <FormInputText
          name="employeeId"
          control={control}
          label="Employee Id"
        />
      </SuiBox>

      <SuiBox customClass={classes.tables_table} pt={1} pb={3}>
        <Grid container spacing={1} direction={"row"}>
          <Grid item>
            <FormInputDropdown
              name="skillId"
              control={control}
              label="Skill"
            />
          </Grid>
          <Grid item>
            <FormInputText
              name="cost"
              control={control}
              label="Cost"
            />
          </Grid>

          <Grid item>
            <FormInputText
              name="experience"
              control={control}
              label="Experience"
            />
          </Grid>

          <Grid item>
            <FormInputText
              name="rating"
              control={control}
              label="Rating"
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
  );
}
