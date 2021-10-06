/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from "react";

import Card from "@mui/material/Card";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Table";

// Custom styles for the Tables
import styles from "layouts/tables/styles";

// import EmployeePage from "layouts/tables/data/EmployeeListing";
import { useSelector } from "react-redux";
// import Popup from "layouts/tables/popup";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { authorsTableDataRow } from "layouts/tables/data/authorsTableData";

import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "layouts/tables/input/FormInputText";
import { FormInputDate } from "layouts/tables/input/FormInputDate";

import { Auth } from "aws-amplify";

function Tables() {
  const classes = styles();
  const { columns } = authorsTableData;
  const rows = authorsTableDataRow();
  const { columns: prCols, rows: prRows } = projectsTableData;
  const employees = useSelector((state) => state.allEmployees.employees);

  const defaultValues = {
    workId: "",
    name: "",
    email: "",
    employeeRole: "",
    passportNumber: "",
    workPermitNumber: "",
    levy: "",
    workContactNumber: "",
    workSiteLocation: "",
    singaporeAddress: "",
    vaccStatus: "",
    covidResult: "",
    workPermitDateOfIssue: new Date(),
    workPermitExpiryDate: new Date(),
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, control, reset } = methods;
  const onSubmit = (data) => {
    const response = Auth.currentSession().then((res) => {
      fetch("/api/employees", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(JSON.stringify(data));
    });
    window.location.reload();
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { item } = this.state;

  //   const response =  Auth.currentSession().then(res => {
  //       fetch('/api/employees' + (item.id ? '/' + item.id : ''), {
  //           method: (item.id) ? 'PUT' : 'POST',
  //           headers: {
  //               'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
  //               'Accept': 'application/json',
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(item),
  //       });
  //       console.log(JSON.stringify(item));
  //   });

  //   this.props.history.push('/employees');
  //   //window.location.reload();

  //   console.log(formValues);
  // };

  console.log("Employees :", employees);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SuiTypography variant="h6">Employees table</SuiTypography>
              <SuiButton onClick={handleClickOpen}> Add Employee </SuiButton>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <FormInputText
                    name="workId"
                    control={control}
                    label="Work ID"
                  />
                  <FormInputText
                    name="name"
                    control={control}
                    label="Employee Name"
                  />
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
                </DialogContent>
                <DialogActions>
                  <SuiButton onClick={handleClose}>Cancel</SuiButton>
                  <SuiButton
                    onClick={handleSubmit(onSubmit)}
                    variant={"contained"}
                  >
                    Submit
                  </SuiButton>
                  <SuiButton onClick={() => reset()} variant={"outlined"}>
                    Reset
                  </SuiButton>
                </DialogActions>
              </Dialog>
            </SuiBox>
            <SuiBox customClass={classes.tables_table}>
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
        <Card>
          <SuiBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={3}
          >
            <SuiTypography variant="h6">Projects table</SuiTypography>
          </SuiBox>
          <SuiBox customClass={classes.tables_table}>
            <Table columns={prCols} rows={prRows} />
          </SuiBox>
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
