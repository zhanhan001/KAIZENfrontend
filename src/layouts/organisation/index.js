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

import Dialog from "@mui/material/Dialog";
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

// Custom styles for the Organisation
import styles from "layouts/organisation/styles";


import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "redux/actions/employeesActions";

// Data
import projectsTableData from "layouts/organisation/data/projectsTableData";
import EmployeeForm from "./data/EmployeeForm";

import MUIDataTable from "mui-datatables";

import { Auth } from "aws-amplify";

import Modal from "components/Custom/Modal"

function Organisation() {
  const classes = styles();
  // const { columns } = authorsTableData;
  //  const rows = authorsTableDataRow();
  const { columns: prCols, rows: prRows } = projectsTableData;
  const employees = useSelector((state) => state.allEmployees.employees);
  const empty = {};
  const dispatch = useDispatch();


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

  const remove = (workId) => {
    Auth.currentSession().then((res) => {
      fetch(`/api/employees/${workId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => {
        let updatedEmployees = employees.filter((i) => i.workId !== workId);
        dispatch(setEmployees(updatedEmployees));
        window.location.reload();
      });
    });
  };


  const columns = [
    { name: "name", label: "Employee Name" },
    { name: "workPermitNumber", label: "Work Permit Number" },
    { name: "workId", label: " Work ID" },
    { name: "email", align: "center" },
    { name: "employeeRole", label: "Employee Role" },
    { name: "passportNumber", label: "PassportNumber" },
    { name: "levy", label: "Levy" },
    { name: "workContactNumber", label: "Work Contact Number" },
    { name: "workSiteLocation", label: "Work Site Location" },
    { name: "singaporeAddress", label: "Singapore Address" },
    { name: "vaccStatus", label: "Vaccination Status" },
    { name: "covidResult", label: "Covid Test Result" },
    { name: "workPermitDateOfIssue", label: "Work Permit Date Of Issue" },
    { name: "workPermitExpiryDate", label: "Work Permit Date Of Expiry" },
    {
      name: "Edit",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <div>
              <Modal>
                <EmployeeForm attr={tableMeta.rowData} />
              </Modal>
            </div>
          );
        }
      }
    },
    {
      name: "Delete",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <SuiButton onClick={() => remove(tableMeta.rowData[5])}>Delete</SuiButton>
          );
        }
      }
    }
  ]



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <MUIDataTable
            title={
              <div>
                <SuiBox py={3}>
                  <SuiTypography variant="h4" textColor="info" fontWeight="bold" textGradient>
                    Employees Table
                  </SuiTypography>
                </SuiBox>
                <SuiBox pt={1}>
                  <SuiButton size="large" variant="text" buttonColor="success" onClick={handleClickOpen("paper")}>
                    Add Employee
                  </SuiButton>
                </SuiBox>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  scroll={scroll}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle id="scroll-dialog-title">
                    <SuiTypography variant="h5" textColor="info" fontWeight="bold" textGradient>Add Employee</SuiTypography>
                  </DialogTitle>
                  <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                      id="scroll-dialog-description"
                      ref={descriptionElementRef}
                      tabIndex={-1}
                    >
                      {<EmployeeForm attr={empty} />}
                    </DialogContentText>
                  </DialogContent>
                  {/* <DialogActions>
                  <SuiButton onClick={handleClose}>Cancel</SuiButton>
                  <SuiButton onClick={handleClose}>Subscribe</SuiButton>
                </DialogActions> */}
                </Dialog></div>}
            data={employees}
            columns={columns}
            options={options}
          ></MUIDataTable>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Organisation;
