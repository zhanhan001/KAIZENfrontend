import Card from "@mui/material/Card";
import { Grid, Icon, Rating } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import profileImage from "assets/images/team-1.jpg"

import styles from "./styles";
import SuiBadge from "components/SuiBadge";
import SuiButton from "components/SuiButton";
import data from "layouts/labour-details/data";
import Table from "examples/Table";
import HireShare from "./components/HireShare";
import BasicDateRangePicker from "./components/Availability";
import HireDialog from "./components/HireDialog";

function LabourDetails() {
    const { columns, rows } = data();
    const classes = styles();

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox py={3}>
                <Card>
                    <SuiBox display="flex" flexDirection="column" height="100%">
                        <SuiBox p={2} mb={0.5}>
                            <SuiTypography variant="h4" textColor="dark" fontWeight="medium" pl={3}>
                                Labour Profile
                            </SuiTypography>
                            <Grid container spacing={3} p={3}>
                                <Grid item xs={12} lg={4}>
                                    <SuiBox component="img" src={profileImage} alt="profile-image" width="100%" borderRadius="10%" />
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <SuiBadge variant="gradient" badgeContent="CLEAN" color="info" size="large" />
                                        </Grid>
                                        <Grid item>
                                            <SuiBadge variant="gradient" badgeContent="TEAMPLAYER" color="info" size="large" />
                                        </Grid>
                                        <Grid item>
                                            <SuiBadge variant="gradient" badgeContent="PUNCTUAL" color="info" size="large" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <SuiBox pb={8} pl={8} pr={8} pl={1}>
                                        <SuiTypography variant="h3" textColor="dark" fontWeight="bold">
                                            James Smith
                                        </SuiTypography>
                                        <SuiTypography variant="h6" textColor="text" fontWeight="medium">
                                            WELDING | 10 YEARS
                                        </SuiTypography>
                                        <Rating name="readOnly" value={4.9} precision={0.1} readOnly />
                                        <SuiBox py={3} pl={1}>
                                            <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                                                Price
                                            </SuiTypography>
                                            <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                                                $800/Week
                                            </SuiTypography>
                                        </SuiBox>
                                        <SuiBox pb={6} pl={1}>
                                            <SuiTypography variant="h6" textColor="dark" fontWeight="medium">
                                                Description
                                            </SuiTypography>
                                            <SuiTypography variant="h6" textColor="text" fontWeight="medium">
                                                James is a hardworking individual with a wealth of experience in the construction industry.
                                                Since 1999, James has participated in numerous commercial projects as a general worker, performing
                                                tasks beyond his duty. He obtained his welding certification in 2011 and has been our company
                                                welder ever since.
                                            </SuiTypography>
                                        </SuiBox>
                                        <SuiBox pl={1}>
                                            <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                                                Interested in Sharing James?
                                            </SuiTypography>
                                        </SuiBox>
                                        <SuiBox p={3}>
                                            <HireDialog />
                                        </SuiBox>
                                    </SuiBox>
                                </Grid>
                            </Grid>
                        </SuiBox>
                        <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SuiBox>
                                <SuiTypography variant="h3" gutterBottom>
                                    Recommendations
                                </SuiTypography>
                                <SuiBox display="flex" alignItems="center" lineHeight={0}>
                                    <Icon className="font-bold text-info">recommend</Icon>
                                    <SuiTypography variant="button" fontWeight="regular" textColor="text">
                                        &nbsp;based on your <strong>past interactions</strong>.
                                    </SuiTypography>
                                </SuiBox>
                            </SuiBox>
                        </SuiBox>
                        <SuiBox customClass={classes.projects_table}>
                            <Table columns={columns} rows={rows} />
                        </SuiBox>
                    </SuiBox>
                </Card>
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default LabourDetails