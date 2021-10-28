import Card from "@mui/material/Card";
import { Grid, Icon, Rating } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SuiBadge from "components/SuiBadge";
import Table from "examples/Table";
// import HireDialog from ".././HireDialog";
// import LabourCard from "../LabourDetails/LabourCard"
import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import data from "layouts/labour-details/data";
import styles from "../../styles";





function Recommendation(props) {

    const classes = styles();


    const { columns, rows } = data(props.attr);
    

    return (
        <div><SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
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
            </div>
    );

} export default Recommendation;