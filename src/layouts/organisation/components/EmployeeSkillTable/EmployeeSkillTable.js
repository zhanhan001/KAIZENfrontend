import React,{ useEffect, useCallback, useMemo, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import EmployeeSkillForm from "../../data/EmployeeSkillForm";
import MUIDataTable from "mui-datatables";
import { Auth } from "aws-amplify";
import Modal from "components/Custom/Modal";

/**
 * {@code EmployeeTable} creates the layout for the CRUD interface.
 *
 * @author Chong Zhan Han
 * @author Tan Jie En
 * @author Teo Keng Swee 
 * @version 1.0
 * @since 2021-10-18
 */

function EmployeeSkillTable() {

    const [employeeSkills, setEmployeeSkills] = useState([]);
    const empty = {};
  
    const FetchData = async () => {
      await Auth.currentSession().then(res => {
        fetch('/api/employeeSkills/all', {
            headers: {
                'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
            }
        })
            .then(response => response.json())
            .then(data => setEmployeeSkills(data))
            .then(data => console.log(data));
      })
  }
  
    useEffect(() => {
      FetchData();
      console.log(employeeSkills);
    }, []);
  
  
    const options = {
      filterType: "checkbox",
      enableNestedDataAccess: '.', 
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
  
    function objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
          keyValuePairs.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
          );
        }
        return keyValuePairs.join("&");
      }
  
    const remove = (empId, skillId) => {

        console.log(empId + " " + skillId);

      Auth.currentSession().then((res) => {

        const queryString = objToQueryString({
            empId: empId,
            skillId: skillId
          });

        fetch(`/api/employeeSkills?${queryString}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + res.getIdToken().getJwtToken(),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
       window.location.reload();
      });
    };
  
    const columns = [
        { name: "id.employee", label: "Employee Id" },
        { name: "id.skill", label: "Skill Id" },
        { name: "cost", label: "Cost" },
        { name: "experience", label: "Years of Experience" },
        { name: "rating", label: "Rating" },
        {
          name: "Edit",
          options: {
            filter: true,
            enableNestedDataAccess: '.', 
            customBodyRender: (value, tableMeta, updatedValue) => {
              return (
                <div>
                  <Modal>
                    <EmployeeSkillForm attr={tableMeta.rowData} />
                  </Modal>
                </div>
              );
            },
          },
        },
        {
          name: "Delete",
          options: {
            enableNestedDataAccess: '.', 
            filter: true,
            customBodyRender: (value, tableMeta, updatedValue) => {
              return (
                <SuiButton onClick={() => remove(tableMeta.rowData[0], tableMeta.rowData[1])}>
                  Delete
                </SuiButton>
              );
            },
          },
        },
      ];
  
    console.log(employeeSkills);
  
  
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
                     Edit Employee Skills
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox pt={1}>
                    <SuiButton
                      size="large"
                      variant="text"
                      buttonColor="success"
                      onClick={handleClickOpen("paper")}
                    >
                      Add Entry
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
                        Add Employee Skill
                      </SuiTypography>
                    </DialogTitle>
                    <DialogContent dividers={scroll === "paper"}>
                      <DialogContentText
                        id="scroll-dialog-description"
                        //ref={descriptionElementRef}
                        tabIndex={-1}
                      >
                        {<EmployeeSkillForm />}
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </div>
              }
              data={employeeSkills}
              columns={columns}
              options={options}
            ></MUIDataTable>
          </SuiBox>
        </SuiBox>
      
    );
}

export default EmployeeSkillTable;
