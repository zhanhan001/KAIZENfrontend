import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard PRO React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard PRO React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Custom styles for Header
import styles from "layouts/profile/components/Header/styles";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const classes = styles();

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <SuiBox position="relative" py={3}>
      <SuiBox customClass={classes.profileHeader_background} />
      <Card className={classes.profileHeader_profile}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              customClass="shadow-sm"
            />
          </Grid>
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Teo Keng Swee
              </SuiTypography>
              <SuiTypography variant="button" textColor="text" fontWeight="medium">
                Blackrock Industries Pte. Ltd
              </SuiTypography>
            </SuiBox>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
  );
}

export default Header;
