import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import EmployeeSkillTable from "./components/EmployeeSkillTable/EmployeeSkillTable";
import ProjectTable from "./components/ProjectTable/ProjectTable";
import Header from "./components/Header"

/**
 * {@code organisation} creates the layout for the CRUD interface.
 *
 * @author Teo Keng Swee
 * @author Chong Zhan Han
 * @author Tan Jie En
 * @author Pang Jun Rong
 * @version 1.1
 * @since 2021-10-16
 */

function Organisation() {
 
 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header />
      <EmployeeTable/>
      <EmployeeSkillTable/>
      <ProjectTable />
     
      <Footer />
    </DashboardLayout>

    

  );
}

export default Organisation;
