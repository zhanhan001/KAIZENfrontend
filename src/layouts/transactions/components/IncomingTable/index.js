import React from "react";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import MUIDataTable from "mui-datatables";
import { Auth } from "aws-amplify";
import { useState, useEffect } from 'react';

/**
 * {@code LatestincomingTable} creates the table for the latest incoming results for every employee.
 *
 * @author Teo Keng Swee
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-28
 */

function IncomingTable(){

  const [transactions, setTransactions] = useState([]);
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
    await Auth.currentSession().then(res => {
      const queryString = objToQueryString({
        compId: res.getIdToken().payload['cognito:groups'][0],
      });
      fetch('/api/transactions/incoming' + `?${queryString}`, {
          headers: {
              'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
              Accept: "application/json",
              "Content-Type": "application/json",
          },
      })
          .then(response => response.json())
          .then(data => setTransactions(data))
          .then(data => console.log(data));
    })
  }

  useEffect(() => {
    FetchData()
  }, []);


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

  const accepted = (empId, date) => {
    Auth.currentSession().then((res) => {
      const queryString = objToQueryString({
        empId: empId,
        date: date,
        status: "Accepted",
      });
      var dataFormatted = {
          "empid" : empId,
          "date" : date,
          "status" : "Accepted",
      }
      fetch(`/api/transactions?${queryString}`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFormatted),
      });
      window.location.reload();
    });
  };

  const rejected = (empId, date) => {
    Auth.currentSession().then((res) => {
      const queryString = objToQueryString({
        empId: empId,
        date: date,
        status: "Rejected",
      });
      var dataFormatted = {
          "empid" : empId,
          "date" : date,
          "status" : "Accepted",
      }
      fetch(`/api/transactions?${queryString}`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFormatted),
      });
      window.location.reload();
    });
  };

  const columns = [
    { name: "employeeId", label: "Employee Id"},
    { name: "loanCompanyId", label: "loan Company Id" },
    { name: "borrowingCompanyId", label: "Borrowing Company Id" },
    { name: "startDate", label: "Loan start Date" },
    { name: "endDate", label: "Loan end Date" },
    { name: "totalCost", label: "Cost of hiring" },
    { name: "status", label: "Loan Status" },
    {
      name: "Accept",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updatedValue) => {
          if(tableMeta.rowData[6] == "Accepted"||tableMeta.rowData[6] ==  "Rejected"){
            return <h5>-</h5>
          }
          return (
            <SuiButton onClick={() => accepted(tableMeta.rowData[0], tableMeta.rowData[3])}>
              Accept
            </SuiButton>
          );
        },
      },
    },
        {
      name: "Reject",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updatedValue) => {
          if(tableMeta.rowData[6] == "Accepted"||tableMeta.rowData[6] == "Rejected"){
            return <h5>-</h5>
          }
          return (
            <SuiButton onClick={() => rejected(tableMeta.rowData[0], tableMeta.rowData[3])}>
              Reject
            </SuiButton>
          );
        },
      },
    },
  ];

  return (
        <SuiBox py={3}>
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
            data={transactions}
            columns={columns}
            options={options}
          ></MUIDataTable>
        </SuiBox>
  );


} export default IncomingTable;