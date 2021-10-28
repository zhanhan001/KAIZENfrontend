import React from "react";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import AllArtsTable from "./component/AllArtsTable";
import LatestArtsTable from "./component/LatestArtsTable";


/**
 * {@code organisation} creates the layout for the CRUD interface.
 *
 * @author Teo Keng Swee
 * @version 1.0
 * @since 2021-10-16
 */

function ART() {
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
         <LatestArtsTable />
        </SuiBox>
      </SuiBox>
      <SuiBox py={3}>
        <SuiBox mb={3}>
         <AllArtsTable />
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ART;
