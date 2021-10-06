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

// Custom styles for the WorkWithTheRockets
import styles from "layouts/dashboard/components/AdvisoryCard/styles";

import { useState, useEffect } from "react";

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Auth } from 'aws-amplify';
    

class AdvisoryCard extends Component {
  // const [isLoading] = useState(true);
  // const[boxes] = useState([]);
  // useEffect(() => {
  //     Auth.currentSession().then(res => {
  //           fetch('/dashboard', {
  //               headers: {
  //                   'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
  //               }})
  //               .then(response => response.json())
  //               .then(data => this.setState({ boxes: data, isLoading : false }));
  //     })
  // }, []);
  
  
  // const classes = styles();
  
  state = {
        isLoading: true,
        boxes: []
      };
    

    async componentDidMount() {
        Auth.currentSession().then(res => {
            fetch('/dashboard', {
                headers: {
                }})
                .then(response => response.json())
                .then(data => this.setState({ boxes: data, isLoading : false }));
        })
    }
          // <div>
          //         {boxes.map(box =>
          //         <div key={box.id}>
          //             {box.header}
          //         </div>
          //         )}
          // </div>

    render() {
        const {boxes, isLoading, classes} = this.state;

        if (isLoading) {
          return <p>Loading...</p>;
        }

        return (
          <Card className="h-100">
          <SuiBox position="relative" height="100%">
            <SuiBox customClass={classes.advisoryCard_content}>
              <SuiBox mb={3} pt={1}>
                <SuiTypography variant="h5" textColor="white" fontWeight="bold">
                  Latest BCA Advisory
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiTypography variant="body2" textColor="white">

                </SuiTypography>
              </SuiBox>
              <SuiTypography
                component="a"
                href="#"
                variant="button"
                textColor="white"
                fontWeight="medium"
                customClass={classes.advisoryCard_button}
              >
                Read More
                <Icon className="font-bold">arrow_forward</Icon>
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </Card>
        );
    }


  // return (
  //   <Card className="h-100">
  //     <SuiBox position="relative" height="100%">
  //       <SuiBox customClass={classes.advisoryCard_content}>
  //         <SuiBox mb={3} pt={1}>
  //           <SuiTypography variant="h5" textColor="white" fontWeight="bold">
  //             Latest BCA Advisory
  //           </SuiTypography>
  //         </SuiBox>
  //         <SuiBox mb={2}>
  //           <SuiTypography variant="body2" textColor="white">
  //             {boxes.map(box =>
  //             <div key={box.id}>
  //                 {box.header}
  //             </div>
  //             )}
  //           </SuiTypography>
  //         </SuiBox>
  //         <SuiTypography
  //           component="a"
  //           href="#"
  //           variant="button"
  //           textColor="white"
  //           fontWeight="medium"
  //           customClass={classes.advisoryCard_button}
  //         >
  //           Read More
  //           <Icon className="font-bold">arrow_forward</Icon>
  //         </SuiTypography>
  //       </SuiBox>
  //     </SuiBox>
  //   </Card>
  // );
}

export default AdvisoryCard;
