import React from "react";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiAvatar from "components/SuiAvatar";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "redux/actions/employeesActions";
import MUIDataTable from "mui-datatables";
import { Auth } from "aws-amplify";

/**
 * {@code IncomingTable} is an user interface for accessing incoming transactions.
 *
 * @author Pang Jun Rong
 * @author Teo Keng Swee
 * @version 1.0
 * @since 2021-10-25
 */

 function Transaction({ image, name, company }) {
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

function IncomingTable() {
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
    { name: "name", 
      label: "Profile", 
      options:{
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Transaction image={employees[dataIndex].profileURL} name={employees[dataIndex].name} company={employees[dataIndex].company} />
          );
        },
      }
      },
    { name: "workPermitNumber", label: "Work Permit Number" },
    { name: "workId", label: "Worker Name" },
    { name: "employeeRole", label: "Profession" },
    { name: "passportNumber", label: "Parent Company" },
    { name: "levy", label: "Loan Duration" },
    { name: "workContactNumber", label: "Total Cost" },
    { name: "workSiteLocation", label: "Status" },
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
                    Incoming Transactions
                  </SuiTypography>
                </SuiBox>
              </div>
            }
            data={employees}
            columns={columns}
            options={options}
          />
        </SuiBox>
      </SuiBox>

  );
}

export default IncomingTable;
