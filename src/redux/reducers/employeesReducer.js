import { ActionTypes } from "../constants/action-types";
const intialState = {
  employees: [],
};

export const employeesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: payload };
    default:
      return state;
  }
};

export const selectedEmployeesReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_EMPLOYEE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_EMPLOYEE:
      return {};
    default:
      return state;
  }
};
