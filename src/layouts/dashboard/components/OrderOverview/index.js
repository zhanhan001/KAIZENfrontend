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

// Soft UI Dashboard PRO Material-UI components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO Material-UI example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SuiBox pt={3} px={3}>
        <SuiTypography variant="h6" fontWeight="medium">
          Activities Overview
        </SuiTypography>
        <SuiBox mt={1} mb={2}>
          <SuiTypography variant="button" textColor="text" fontWeight="regular">
            <SuiTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon className="font-bold text-success">arrow_upward</Icon>
            </SuiTypography>
            &nbsp;
            <SuiTypography variant="button" textColor="text" fontWeight="medium">
              24%
            </SuiTypography>{" "}
            this month
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2}>
        <TimelineItem
          color="success"
          icon="share"
          title="4 Incoming Shared Labour"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="local_hospital"
          title="2 Suspected Positive ART Results"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="error"
          icon="announcement"
          title="New BCA Advisory Release"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="info"
          icon="article"
          title="Daily General COVID-19 News"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="warning"
          icon="exit_to_app"
          title="2 Employees Shared & Outgoing"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem
          color="success"
          icon="paid"
          title="Monthly Financials for Employee Sharing"
          dateTime="17 DEC"
        />
      </SuiBox>
    </Card>
  );
}

export default OrdersOverview;
