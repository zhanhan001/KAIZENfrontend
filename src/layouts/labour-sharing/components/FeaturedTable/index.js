/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/


// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Table";

// Custom styles for the Projects
import styles from "layouts/labour-sharing/components/FeaturedTable/styles";

// Data
import data from "layouts/labour-sharing/components/FeaturedTable/data";

function FeaturedTable() {
  const { columns, rows } = data();
  const classes = styles();

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiBox>
          <SuiTypography variant="h3" gutterBottom>
            Featured Professionals
          </SuiTypography>
          <SuiBox display="flex" alignItems="center" lineHeight={0}>
            <Icon className="font-bold text-info">verified_user</Icon>
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              &nbsp;based on lifetime <strong>consistent performance</strong>.
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <SuiBox customClass={classes.projects_table}>
        <Table columns={columns} rows={rows} />
      </SuiBox>
    </Card>
  );
}

export default FeaturedTable;
