import data from "layouts/labour-sharing/components/SkillMarketTable/data";
import { Rating } from "@mui/material";
import React,{ useEffect, useCallback, useMemo, useState } from "react";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import MUIDataTable from "mui-datatables";
import { Auth } from "aws-amplify";
import Modal from "components/Custom/Modal";
import { Link, withRouter } from 'react-router-dom';


/**
 * {@code SkillMarketTable} creates a component table to display entities in the skill market .
 *
 * @author Pang Jun Rong
 * @version 1.0
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

function Function({ category, experience }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" textColor="text">
        {category}
      </SuiTypography>
      <SuiTypography variant="caption" textColor="secondary">
        {experience}
      </SuiTypography>
    </SuiBox>
  );
}

export default function SkillMarketTable() {
  const [employeeSkills, setEmployeeSkills] = useState([]);
  const empty = {};

  function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      );
    }
    return keyValuePairs.join("&");
  }

  const FetchData = async () => {
    await Auth.currentSession().then((res) => {
      const queryString = objToQueryString({
        compId: res.getIdToken().payload['cognito:groups'][0],
      });
      fetch("/api/employeeSkills/all"  + `?${queryString}`, {
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
        },
      })
        .then((response) => response.json())
        .then((data) => setEmployeeSkills(data))
    });
  };

  useEffect(() => {
    FetchData();
    console.log(employeeSkills);
  }, []);

  const options = {
    filterType: "checkbox",
    rowsPerPage: [5],
    rowsPerPageOptions: [],
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

  const columns = [
    {
      name: "name",
      label: "Profile",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Labour
              image={employeeSkills[dataIndex].imageURL}
              name={employeeSkills[dataIndex].name}
              company={employeeSkills[dataIndex].company}
            />
          );
        },
      },
    },
    {
      name: "skillName",
      label: "Skill",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Function
              category={employeeSkills[dataIndex].skillName}
              experience={employeeSkills[dataIndex].experience}
            />
          );
        },
      },
    },
    {
      name: "rating",
      label: "Rating",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Rating
              name="readOnly"
              value={employeeSkills[dataIndex].rating}
              precision={0.1}
              readOnly
            />
          );
        },
      },
    },
    {
      name: "workPermitNumber",
      options: {
        filter: true,
        enableNestedDataAccess: ".",
        customBodyRenderLite: (dataIndex) => {
          return (          
            <Link  to={{  pathname: "/labour-details/" + employeeSkills[dataIndex].workPermitNumber, state: employeeSkills[dataIndex] }}>
              <SuiButton > View </SuiButton>
            </Link>
          );
        },
      },
      label: "View More"
    },
  ];
//href={"/labour-details/" + dataIndex }
  return (
    <MUIDataTable
      data={employeeSkills}
      columns={columns}
      options={options}
    />
  );
}
