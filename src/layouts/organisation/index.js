import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import EmployeeTable from "./EmployeeTable";
import EmployeeSkillTable from "./EmployeeSkillTable";
import ProjectTable from "./ProjectTable";

/**
 * {@code organisation} creates the layout for the CRUD interface.
 *
 * @author Teo Keng Swee
 * @author Chong Zhan Han
 * @author Tan Jie En
 * @version 1.0
 * @since 2021-10-16
 */

function Organisation() {
 
 

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <EmployeeTable/>
      <EmployeeSkillTable/>
      <ProjectTable />
     
      <Footer />
    </DashboardLayout>

    

  );
}

export default Organisation;
