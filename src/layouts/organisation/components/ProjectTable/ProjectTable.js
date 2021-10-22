import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "redux/actions/projectsActions";
import MUIDataTable from "mui-datatables";
import { Auth } from "aws-amplify";
import Modal from "components/Custom/Modal";
import ProjectForm from "../../data/ProjectForm";

/**
 * {@code ProjectTable} creates the layout for the CRUD interface.
 *
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-22
 */

function ProjectTable() {
  const projects = useState([]);
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

  const remove = (projectId) => {
    Auth.currentSession().then((res) => {
      fetch(`/api/project/${projectId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => {
        let updatedProjects = projects.filter((i) => i.projectId !== projectId);
        dispatch(setProjects(updatedProjects));
        window.location.reload();
      });
    });
  };

  const columns = [
    { name: "projectId", label: "Project Id" },
    { name: "projectName", label: "Project Name" },
    { name: "budget", label: "Budget" },
    { name: "startDate", label: "Start Date" },
    { name: "completionDate", label: "Completion Date" },
    { name: "progress", label: "Progress" },
    {
      name: "Edit",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <div>
              <Modal>
                <ProjectForm attr={tableMeta.rowData} />
              </Modal>
            </div>
          );
        },
      },
    },
    {
      name: "Delete",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <SuiButton onClick={() => remove(tableMeta.rowData[5])}>
              Delete
            </SuiButton>
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
                    Projects
                  </SuiTypography>
                </SuiBox>
                <SuiBox pt={1}>
                  <SuiButton
                    size="large"
                    variant="text"
                    buttonColor="success"
                    onClick={handleClickOpen("paper")}
                  >
                    Add Project
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
                      Add Project
                    </SuiTypography>
                  </DialogTitle>
                  <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                      id="scroll-dialog-description"
                      ref={descriptionElementRef}
                      tabIndex={-1}
                    >
                      {<ProjectForm attr={empty} />}
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              </div>
            }
            data={projects}
            columns={columns}
            options={options}
          ></MUIDataTable>
        </SuiBox>
      </SuiBox>

  );
}

export default ProjectTable;
