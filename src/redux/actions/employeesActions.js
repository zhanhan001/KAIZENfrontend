import { ActionTypes } from "../constants/action-types";

export const setEmployees = (employees) => {
  return {
    type: ActionTypes.SET_EMPLOYEES,
    payload: employees,
  };
};

export const selectedEmployee = (employee) => {
  return {
    type: ActionTypes.SELECTED_EMPLOYEE,
    payload: employee,
  };
};
export const removeSelectedEmployee = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_EMPLOYEE,
  };
};
