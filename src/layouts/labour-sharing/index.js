import SuiBox from "components/SuiBox";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MarketplaceBanner from "layouts/labour-sharing/components/MarketplaceBanner"
import styles from "layouts/labour-sharing/styles";

import CategoryTable from "./components/CategoryTable";
import { Grid } from "@mui/material";
import FeaturedTable from "./components/FeaturedTable";

function LabourSharing() {
  const classes = styles();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox pt={3}>
        <MarketplaceBanner/>
      </SuiBox>
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={6}>
            <CategoryTable />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={6}>
            <FeaturedTable />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LabourSharing;
