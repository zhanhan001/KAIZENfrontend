import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MarketplaceBanner from "layouts/labour-sharing/components/MarketplaceBanner"
import Table from "examples/Table";
import { Card } from "reactstrap";
import styles from "layouts/labour-sharing/styles";

import marketTableData from "./data/marketTableData";
import CategoryTable from "./components/CategoryTable";
import { Grid } from "@mui/material";
import FeaturedTable from "./components/FeaturedTable";

function LabourSharing() {
  const classes = styles();
  const { columns, rows } = marketTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MarketplaceBanner />
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
      <SuiBox pb={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h2">Skill Market</SuiTypography>
            </SuiBox>
            <SuiBox customClass={classes.tables_table}>
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LabourSharing;
