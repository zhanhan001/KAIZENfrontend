import Card from "@mui/material/Card";
import { Grid, Icon, Rating } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import profileImage1 from "assets/images/team-1.jpg"
import profileImage2 from "assets/images/team-2.jpg"
import profileImage3 from "assets/images/team-3.jpg"
import styles from "./styles";
import SuiBadge from "components/SuiBadge";
import data from "layouts/labour-details/data";
import Table from "examples/Table";
import Carousel from 'react-material-ui-carousel';
import HireDialog from "./components/HireDialog";
import LabourCard from "./components/LabourDetails/LabourCard"
import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

/**
 * {@code labour-details} creates the layout for the labour details page.
 *
 * @author Pang Jun Rong
 * @author Chong Zhan Han
 * @version 2.0
 * @since 2021-10-27
 */

function LabourDetails() {

    const classes = styles();

    const [employeeSkillDTO, setEmployeeSkillDTO] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const empty = {};

    function objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
          keyValuePairs.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
          );
        }
        return keyValuePairs.join("&");
      }

    const FetchData = async () => {

        

        await Auth.currentSession().then(res => {

            const queryString = objToQueryString({
            compId: res.getIdToken().payload['cognito:groups'][0],
          });

            fetch('/api/employeeSkills/all' + `?${queryString}`, {
                headers: {
                    'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
                }
            })
                .then(response => response.json())
                .then(data => setRecommendations(data))
                .then(data => console.log("Testing labour sharing " + data));
        })
    }

    //Recommendation will be refreshed the first time the page is loaded
    useEffect(() => {
        FetchData();    
        console.log("recommendation : " + recommendations[0]);
    }, []);

    //First item in recommendation will be set as the displayed employee skill
    useEffect(() => {
        setEmployeeSkillDTO(recommendations[0]);
    }, [recommendations]);

    //if we select an employee detail in the recommendation section
    const findEmployeeSkillDTO = (employeeName) => {
        recommendations.filter((e) => e.name === employeeName).map(
            e => setEmployeeSkillDTO(e)
        )
    }


    const { columns, rows } = data(recommendations, findEmployeeSkillDTO);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox py={3}>
                <Card>
                    <SuiBox display="flex" flexDirection="column" height="100%">
                        <LabourCard employeeSkillDTO = {employeeSkillDTO} />
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