import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Carousel from "react-material-ui-carousel";
import Table from "examples/Table";
import styles from "layouts/labour-sharing/components/FeaturedTable/styles";
import data from "layouts/labour-sharing/components/FeaturedTable/data";
import profileImage1 from "assets/images/team-1.jpg"
import profileImage2 from "assets/images/team-2.jpg"
import { Grid, Rating } from "@mui/material";

/**
 * {@code FeaturedTable} creates the component for featured professionals.
 *
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-16
 */

function FeaturedTable() {
  const { columns, rows } = data();
  const classes = styles();

  return (
    <Card className="h-100">
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
      <SuiBox position="relative" height="100%">
        <Carousel interval="5000" indicators={false} animation="slide">
            <Grid container spacing={3} p={3}>
              <Grid item xs={12} lg={4}>
                <SuiBox component="img" src="https://s3.ap-southeast-1.amazonaws.com/kaizen-imagebucket/1636547575105-Barsha.jpg" alt="profile-image" width="100%" borderRadius="10%" />
              </Grid>
              <Grid item xs={12} lg={8}>
                <SuiBox px={3}>
                  <SuiTypography variant="button" textColor="text" fontWeight="medium">
                    Welding
                  </SuiTypography>
                  <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                    Muhammad Sharmin
                  </SuiTypography>
                </SuiBox>
                <SuiBox p={3}>
                  <SuiTypography variant="h6" textColor="dark" fontWeight="regular">
                    "Seriously talented in welding and an overall amazing employee to have around!"
                  </SuiTypography>
                  <SuiBox pt={1}>
                    <Rating name="readOnly" value={4.9} precision={0.1} readOnly />
                  </SuiBox>
                  <SuiBox pl={15}>
                    <SuiTypography variant="button" textColor="dark" fontWeight="regular">
                      – Penta Ocean Construction Pte Ltd
                    </SuiTypography>
                  </SuiBox>
                </SuiBox>
              </Grid>
            </Grid>
            <Grid container spacing={3} p={3}>
              <Grid item xs={12} lg={4}>
                <SuiBox component="img" src="https://s3.ap-southeast-1.amazonaws.com/kaizen-imagebucket/1636644523121-Abdul_Katun.jpg" alt="profile-image" width="100%" borderRadius="10%" />
              </Grid>
              <Grid item xs={12} lg={8}>
                <SuiBox px={3}>
                  <SuiTypography variant="button" textColor="text" fontWeight="medium">
                    Tower Crane Operation
                  </SuiTypography>
                  <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                    Jahan Das
                  </SuiTypography>
                </SuiBox>
                <SuiBox p={3}>
                  <SuiTypography variant="h6" textColor="dark" fontWeight="regular">
                    "Das is a precise and accurate crane operator and knows all the protocols, highly recommended as site supervisor."
                  </SuiTypography>
                  <SuiBox pt={1}>
                    <Rating name="readOnly" value={4.9} precision={0.1} readOnly />
                  </SuiBox>
                  <SuiBox pl={15}>
                    <SuiTypography variant="button" textColor="dark" fontWeight="regular">
                      – Precision Engineering Pte Ltd
                    </SuiTypography>
                  </SuiBox>
                </SuiBox>
              </Grid>
            </Grid>
        </Carousel>
      </SuiBox>
      <SuiBox customClass={classes.projects_table}>
        <Table columns={columns} rows={rows} />
      </SuiBox>
    </Card>
  );
}

export default FeaturedTable;