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
  const classes = styles();
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

  // let headers = boxes.map(box =>
  //   <SuiTypography textColor="white">
  //     <SuiTypography key={box.id} display="flex" variant="h5" fontWeight="bold" gutterBottom>
  //       {box.header}
  //     </SuiTypography>
  //     <SuiBox
              
  //             justifyContent="center"
  //             alignItems="center"
  //             borderRadius="50"
  //             height="auto" p={3}
  //             inputProps={{style:{height:50, width: 50}}}
  //           ><img src={box.imageUrl} max-width="100%" class="img-fluid"/></SuiBox>
  //     <SuiTypography key={box.id} display="flex" variant="body2" textColor="text">
  //       {box.excerpt}
  //     </SuiTypography>
  //     {/* <SuiTypography key={box.id} style= {{height:70}} variant="h5" fontWeight="bold" gutterBottom>
  //       {box}
  //     </SuiTypography> */}

  //     <SuiTypography key={box.id}
  //       component="a"
  //       href={box.url}
  //       variant="button"
  //       textColor="text"
  //       fontWeight="medium"
  //       customClass={classes.generalNewsCard_button}
  //     > Read More
  //       <Icon className="font-bold">arrow_forward</Icon>
  //     </SuiTypography>

  //   </SuiTypography>
  // );
  let headers = boxes.map(box =>
    <SuiBox textColor="white" flexDirection="column">
      <SuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SuiTypography key={box.id}  variant="h5" fontWeight="bold" gutterBottom>
              {box.header}
            </SuiTypography>
          </Grid>
          <Grid item xs={12} lg={4}>
          <SuiBox
                    class="img"
                  justifyContent="right"
                  // alignItems="center"
                  borderRadius="50" style={{height:80}}
                ><img  height="80" maxWidth="20%" src={box.imageUrl} /></SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
      <SuiTypography>

        <SuiTypography style={{height:70}} mb={3} variant="body2" >
          {box.excerpt}
        </SuiTypography>
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
    </SuiBox>
  );



  return (
    <Card className="h-100">
      <SuiBox p={2}  position="relative" height="100%">
        <SuiBox >
          <SuiBox mb={3} pt={1}>
            <SuiTypography variant="h5" textColor="text" fontWeight="medium">
              General COVID-19 News
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={20} lg={40}>
            <SuiBox display="flex" flexDirection="column" mb={2} pt={1}>
                <Carousel maxHeight="140">
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
