import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import styles from "layouts/labour-sharing/styles";

import SkillMarketTable from "layouts/labour-sharing/components/SkillMarketTable";
import Card from "@mui/material/Card";

function LabourSharing() {
  const classes = styles();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Card>
          <SkillMarketTable />
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LabourSharing;
