import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "redux/actions/employeesActions";
import axios from "axios";
import { Auth } from 'aws-amplify';


const EmployeePage = () => {
  const employees = useSelector((state) => state.allEmployees.employees);
  const dispatch = useDispatch();
  const fetchEmployees = async () => {
    const response = await Auth.currentSession().then(res => {
       fetch('/api/employees', {
          headers: {
              'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
          }
      }).catch((err) => {
              console.log("Err: ", err);
      }).then(response => response.json())
      .then(data => dispatch(setEmployees(data)))
          
  })
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  console.log("Employees :", employees);
  return(
    <></>
  )
};

export default EmployeePage;
