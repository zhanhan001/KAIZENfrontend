/* eslint-disable react/prop-types */
// Soft UI Dashboard React components

import React from "react";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

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
            <DialogTitle>
              <SuiTypography variant="h5" textColor="info" fontWeight="bold" textGradient>Edit Employee</SuiTypography>
            </DialogTitle>
            <EmployeeForm attr={employee} />
            <DialogActions>
              <SuiButton onClick={handleClose}>Cancel</SuiButton>
            </DialogActions>
          </Dialog>
        </div>
      ),
      delete: <SuiButton buttonColor="error" onClick={() => remove(employee.workPermitNumber)}>Delete</SuiButton>
    };
  });

  return renderList;
}

export default {
  columns: [
    { name: "name", label: "Employee Name" },
    { name: "workPermitNumber", label: "Work Permit Number" },
    { name: "workId", label: "Work ID" },
    { name: "email", align: "center", label: "Email"},
    { name: "employeeRole", label: "Employee Role" },
    { name: "passportNumber", label: "PassportNumber" },
    { name: "levy", label: "Levy" },
    { name: "workContactNumber", label: "Contact Number" },
    { name: "workSiteLocation", label: "Work Location" },
    { name: "singaporeAddress", label: "Residence Address" },
    { name: "vaccStatus", label: "Vaccination Status" },
    { name: "covidResult", label: "ART Result" },
    { name: "workPermitDateOfIssue", label: "Work Permit Issue Date" },
    { name: "workPermitExpiryDate", label: "Work Permit Expiry Date" },
    { name: "edit", label: "Edit Employee" },
    { name: "delete", label: "Delete Employee" },
  ],
};
