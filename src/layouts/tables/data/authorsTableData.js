/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "redux/actions/employeesActions";
import SuiButton from "components/SuiButton";
import { Auth } from 'aws-amplify';


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




export function authorsTableDataRow(){
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.allEmployees.employees);
  
  const remove = (workId) => {
    Auth.currentSession().then(res => {
        fetch(`/api/employees/${workId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEmployees = employees.filter(i => i.workId !== workId);
            dispatch(setEmployees(updatedEmployees));
            window.location.reload();
        });
    })
  }
  

  const renderList = employees.map((employee) => {
    return (
      {
        author: <Author image={team2} name={employee.name} email={employee.email} />,
        function: <Function job={employee.employeeRole} org="Organization" />,
        status: (
          <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
        ),
        employed: (
          <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
            01/01/21
          </SuiTypography>
        ),
        action: (
          <SuiTypography
            component="a"
            href="#"
            variant="caption"
            textColor="secondary"
            fontWeight="medium"
          >
            Edit
          <SuiButton onClick={() => remove(employee.workId)}>
            Delete
          </SuiButton>
          </SuiTypography>
          
        ),
      }
    );
  });

  renderList.push({
    author: <Author image={team2} name= "apple" email="orange" />,
    function: <Function job="Manager" org="Organization" />,
    status: (
      <SuiBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
    ),
    employed: (
      <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
        01/01/21
      </SuiTypography>
    ),
    action: (
      <SuiTypography
        component="a"
        href="#"
        variant="caption"
        textColor="secondary"
        fontWeight="medium"
      >
        Edit
        <SuiButton onClick={() => remove(employee.workId)}>
            Delete
        </SuiButton>
      </SuiTypography>
    ),
  });

  return renderList;

  
}


export default {

  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],
  
};




