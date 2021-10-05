import { combineReducers } from "redux";
import { employeesReducer, selectedEmployeesReducer } from "./employeesReducer";
const reducers = combineReducers({
  allEmployees: employeesReducer,
  employees: selectedEmployeesReducer,
});
export default reducers;
