import Card from "@mui/material/Card";
import { Grid, Icon, Rating } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import profileImage1 from "assets/images/team-1.jpg"
import profileImage2 from "assets/images/team-2.jpg"
import profileImage3 from "assets/images/team-3.jpg"
// import styles from "./styles";
import SuiBadge from "components/SuiBadge";
import Carousel from 'react-material-ui-carousel';
import HireDialog from "../HireDialog/";
import { render } from "react-dom";

/**
 * {@code LabourCard} creates the card for labour details.
 * @author Pang Jun Rong
 * @author Chong Zhan Han
 * @version 1.0
 * @since 2021-10-27
 */


function LabourCard (props) {

    const employeeSkill = props.employeeSkillDTO || {} ;

    return (
        <SuiBox p={3} mb={0.5}>
            <SuiTypography variant="h4" textColor="dark" fontWeight="medium" pl={3}>
                Employee details
            </SuiTypography>
            <Grid container spacing={3} p={3}>
                <Grid item xs={12} lg={4}>
                    <Carousel 
                        indicators={false}
                        interval="5000"
                    >
                        <SuiBox component="img" src={employeeSkill.imageURL} alt="profile-image" width="100%" borderRadius="10%" />
                        </Carousel>
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
                            {employeeSkill.name}
                        </SuiTypography>
                        <SuiTypography variant="h6" textColor="text" fontWeight="medium">
                            {employeeSkill.skillName} | {employeeSkill.experience} YEARS
                        </SuiTypography>
                        <Rating name="readOnly" value={employeeSkill.rating || 0} precision={0.1} readOnly />
                        <SuiBox py={3} pl={1}>
                            <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                                Price
                            </SuiTypography>
                            <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                                ${employeeSkill.cost}/Week
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox pb={6} pl={1}>
                            <SuiTypography variant="h6" textColor="dark" fontWeight="medium">
                                Description
                            </SuiTypography>
                            <SuiTypography variant="h6" textColor="text" fontWeight="medium">
                                {employeeSkill.description}
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox pl={1}>
                            <SuiTypography variant="h5" textColor="dark" fontWeight="medium">
                                Interested in Hiring {employeeSkill.name}?
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox p={3}>
                            <HireDialog />
                        </SuiBox>
                    </SuiBox>
                </Grid>
            </Grid>
        </SuiBox>
    );
}

export default LabourCard;