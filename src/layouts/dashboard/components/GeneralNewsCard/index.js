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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";


// Custom styles for the BuildByDevelopers
import styles from "layouts/dashboard/components/GeneralNewsCard/styles";
import { Auth } from 'aws-amplify';
import { useState, useEffect } from "react";
import Carousel from 'react-material-ui-carousel';

// Images
import mock from "assets/images/mock.svg";

function GeneralNewsCard() {
  // const classes = styles();
  const [boxes, setboxes] = useState([]);

  useEffect(() => {
    Auth.currentSession().then(res => {
      fetch('/api/dashboard/news', {
        headers: {
        }
      })
        .then(response => response.json())
        .then(data => setboxes(Array.from(data)))
    })
  }, []);

  const classes = styles();
  let headers = boxes.map(box =>
    <SuiTypography textColor="white">
      <SuiTypography key={box.id} style={{ height: 100 }} variant="h5" fontWeight="bold" gutterBottom>
        {box.header}
      </SuiTypography>

      {/* <SuiBox
              // display="grid"
              justifyContent="center"
              alignItems="center"
              borderRadius="50"
              backgroundGradient
              component="img" src={box.imageUrl} alt="news-image" width="100%" height="100%" p={3}
              inputProps={{style:{padding:0}}}
            /> */}
      <SuiTypography key={box.id} style={{ height: 100 }} variant="body2" textColor="text">
        {box.excerpt}
      </SuiTypography>
      {/* <SuiTypography key={box.id} style= {{height:70}} variant="h5" fontWeight="bold" gutterBottom>
        {box}
      </SuiTypography> */}

      <SuiTypography key={box.id}
        component="a"
        href={box.url}
        variant="button"
        textColor="text"
        fontWeight="medium"
        customClass={classes.generalNewsCard_button}
      > Read More
        <Icon className="font-bold">arrow_forward</Icon>
      </SuiTypography>

    </SuiTypography>
  );


  return (
    <Card className="h-100">
      <SuiBox p={2} position="relative" height="100%">
        <SuiBox mb={3} pt={1}>
          <SuiTypography variant="h5" textColor="text" fontWeight="medium">
            General COVID-19 News
          </SuiTypography>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={20} lg={40}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <Carousel>
                {headers}
              </Carousel>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default GeneralNewsCard;
