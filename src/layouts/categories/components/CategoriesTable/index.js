import * as React from 'react';
import data from "layouts/categories/components/CategoriesTable/data";
import styles from "./styles";
import MUIDataTable from "mui-datatables";
import SuiTypography from 'components/SuiTypography';
import SuiBox from 'components/SuiBox';
import SuiButton from 'components/SuiButton';
import SuiAvatar from 'components/SuiAvatar';
import { Rating } from "@mui/material";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';


/**
 * {@code CategoriesTable} provides a table component for the categories page.
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


export default function CategoriesTable(props) {


  const [results, setResults] = useState([]);

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
        await Auth.currentSession().then(res => {
            const queryString = objToQueryString({
                skillId: props.attr,
                compId: res.getIdToken().payload['cognito:groups'][0],
            });
            fetch('/api/employeeSkills' + `?${queryString}`, {
                headers: {
                    'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
                }
            })
                .then(response => response.json())
                .then(data => setResults(data))
                .then(data => console.log(data));
        })
    }

    useEffect(() => {
        FetchData()
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
        displayRows: "OF"
      }
    },
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    }
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
              image={results[dataIndex].imageURL}
              name={results[dataIndex].name}
              company={results[dataIndex].company}
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
              category={results[dataIndex].skillName}
              experience={results[dataIndex].experience}
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
              value={results[dataIndex].rating}
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
            <Link  to={{  pathname: "/labour-details/" + results[dataIndex].workPermitNumber, state: results[dataIndex] }}>
              <SuiButton > View </SuiButton>
            </Link>
          );
        },
      },
      label: "View More"
    },
  ];
  return (
    <MUIDataTable
      data={results}
      columns={columns}
      options={options}
    />
  );
}

