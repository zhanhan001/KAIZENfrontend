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
import EmployeeForm from "./data/EmployeeForm";

import { FormProvider, useForm } from "react-hook-form";

import MUIDataTable from "mui-datatables";

import { Auth } from "aws-amplify";
import EmployeeList from "./data/EmployeeList";

function Tables() {
  const classes = styles();
  const { columns } = authorsTableData;
  const rows = authorsTableDataRow();
  const { columns: prCols, rows: prRows } = projectsTableData;
  const employees = useSelector((state) => state.allEmployees.employees);
  const empty = {};

  const options = {
    filterType: "checkbox",
    rowsPerPage: [3],
    rowsPerPageOptions: [1, 3, 5, 6],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF",
      },
    },
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  // const methods = useForm({ defaultValues: defaultValues });
  // const { handleSubmit, control, reset } = methods;

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
              {/* <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <EmployeeForm attr ={empty}/>
                <DialogActions>
                  <SuiButton onClick={handleClose}>Cancel</SuiButton>
                </DialogActions>
              </Dialog> */}
            </SuiBox>
            <SuiBox customClass={classes.tables_table}>
              
              <MUIDataTable
                title={<div><SuiButton onClick={handleClickOpen("paper")}>
                {" "}
                Add Employee{" "}
              </SuiButton>
              <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                  <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    {<EmployeeForm attr ={empty}/>}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <SuiButton onClick={handleClose}>Cancel</SuiButton>
                  <SuiButton onClick={handleClose}>Subscribe</SuiButton>
                </DialogActions>
              </Dialog></div>}
                data={rows}
                columns={columns}
                options={options}
              ></MUIDataTable>
            
            

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
