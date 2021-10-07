/* eslint-disable react/prop-types */
// Soft UI Dashboard React components

import React, { useState } from "react";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";
import { Link, withRouter } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import EmployeeForm from "./EmployeeForm";

import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "redux/actions/employeesActions";
import SuiButton from "components/SuiButton";
import { Auth } from "aws-amplify";

function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" textColor="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" textColor="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" textColor="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}

export function authorsTableDataRow() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.allEmployees.employees);

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderList = employees.map((employee) => {
    return {
      name: employee.name,
      workPermitNumber: employee.workPermitNumber,
      workId: employee.workId,
      email: employee.email,
      employeeRole: employee.employeeRole,
      passportNumber: employee.passportNumber,
      levy: employee.levy,
      workContactNumber: employee.workContactNumber,
      workSiteLocation: employee.workSiteLocation,
      singaporeAddress: employee.singaporeAddress,
      vaccStatus: employee.vaccStatus,
      covidResult: employee.covidResult,
      workPermitDateOfIssue: employee.workPermitDateOfIssue,
      workPermitExpiryDate: employee.workPermitExpiryDate,
      edit: (
        <div>
          <SuiButton
            component="a"
            variant="caption"
            textColor="secondary"
            fontWeight="medium"
            onClick={handleClickOpen}
          >
            Edit
          </SuiButton>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Employee</DialogTitle>
            <EmployeeForm attr={employee} />
            <DialogActions>
              <SuiButton onClick={handleClose}>Cancel</SuiButton>
            </DialogActions>
          </Dialog>
        </div>
      ),
      delete : <SuiButton onClick={() => remove(employee.workPermitNumber)}>Delete</SuiButton>
    };
  });

  return renderList;
}

export default {
  columns: [
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
    { name: "edit", label: "Edit Employee" },
    { name: "delete", label: "Delete Employee"},
  ],
};
