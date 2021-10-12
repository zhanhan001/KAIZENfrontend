import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import styles from "layouts/categories/styles";

import CategoriesTable from "layouts/categories/components/CategoriesTable";
import Card from "@mui/material/Card";

function Categories() {
  const classes = styles();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Card>
          <CategoriesTable />
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Categories;
