import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiBadge from "components/SuiBadge";
import SuiAvatar from "components/SuiAvatar";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "redux/actions/employeesActions";
import EmployeeForm from "../../data/EmployeeForm";
import MUIDataTable from "mui-datatables";
import { Auth } from "aws-amplify";
import Modal from "components/Custom/Modal";
import EmployeeImage from "../../data/EmployeeImage";
import ImageModal from "components/Custom/ImageModal";

/**
 * {@code EmployeeTable} creates the layout for the CRUD interface.
 *
 * @author Teo Keng Swee
 * @author Pang Jun Rong
 * @version 1.1
 * @since 2021-10-16
 */

function Labour({ image, name, company }) {
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
          {company}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function EmployeeTable() {
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
    {
      name: "name",
      label: "Profile",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Labour
              image={employees[dataIndex].profileURL}
              name={employees[dataIndex].name}
              company={employees[dataIndex].company}
            />
          );
        },
      },
    },
    { name: "workPermitNumber", label: "Work Permit Number" },
    { name: "workId", label: " Work ID" },
    { name: "employeeRole", label: "Employee Role" },
    { name: "passportNumber", label: "PassportNumber" },
    { name: "levy", label: "Levy" },
    { name: "workContactNumber", label: "Work Contact Number" },
    { name: "workSiteLocation", label: "Work Site Location" },
    {
      name: "workPermitDateOfIssue",
      label: "Work Permit Date of Issue",
      options: {
        display: false,
      },
    },
    {
      name: "workPermitExpiryDate",
      label: "Work Permit Expiry Date",
      options: {
        display: false,
      },
    },
    {
      name: "description",
      label: "Description of Employee",
      options: {
        display: false,
      },
    },



    { name: "singaporeAddress", label: "Singapore Address" },
    {
      name: "vaccStatus", options: {
        filter: false,
        customBodyRender: (dataIndex) => {
          console.log(dataIndex);

          return dataIndex ? (
            <SuiBadge variant="gradient" badgeContent="Vaccinated" color="success" size="extra-small" />
          ) : (
            <SuiBadge variant="gradient" badgeContent="Not Vaccinated" color="secondary" size="extra-small" />

          );
        },
      }, label: "Vaccination Status"
    },
    {
      name: "Edit",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <div>
              <Modal>
                <EmployeeForm attr={tableMeta.rowData} />
              </Modal>
            </div>
          );
        },
      },
    },
    {
      name: "Delete",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <SuiButton onClick={() => remove(tableMeta.rowData[1])}>
              Delete
            </SuiButton>
          );
        },
      },
    },
    {
      name: "Upload Image",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <ImageModal>
              <EmployeeImage employee={tableMeta.rowData[1]} />
            </ImageModal>
          );
        },
      },
    },
  ];

  return (
    <SuiBox py={3}>
      <SuiBox mb={3}>
        <MUIDataTable
          title={
            <div>
              <SuiBox py={3}>
                <SuiTypography
                  variant="h4"
                  textColor="info"
                  fontWeight="bold"
                  textGradient
                >
                  My Organisation
                </SuiTypography>
              </SuiBox>
              <SuiBox pt={1}>
                <SuiButton
                  size="large"
                  variant="text"
                  buttonColor="success"
                  onClick={handleClickOpen("paper")}
                >
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
                  <SuiTypography
                    variant="h5"
                    textColor="info"
                    fontWeight="bold"
                    textGradient
                  >
                    Add Employee
                  </SuiTypography>
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
              </Dialog>
            </div>
          }
          data={employees}
          columns={columns}
          options={options}
        ></MUIDataTable>
      </SuiBox>
    </SuiBox>
  );
}

export default EmployeeTable;