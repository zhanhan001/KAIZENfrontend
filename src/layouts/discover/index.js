import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MarketplaceBanner from "layouts/labour-sharing/components/MarketplaceBanner"
import styles from "layouts/labour-sharing/styles";

import CategoryTable from "./components/CategoryTable";
import { Grid } from "@mui/material";
import FeaturedTable from "./components/FeaturedTable";
import MUIDataTable from "mui-datatables";
import SkillMarketTable from "layouts/labour-sharing/components/SkillMarketTable";

function LabourSharing() {
  const classes = styles();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SkillMarketTable />
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LabourSharing;
