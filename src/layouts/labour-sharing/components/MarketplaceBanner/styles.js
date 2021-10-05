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
import { makeStyles } from "@mui/styles";

// Images
import bca from "assets/images/lsbanner.jpg";

export default makeStyles(({ functions, palette, borders }) => {
  const { linearGradient, rgba, pxToRem } = functions;
  const { gradients } = palette;
  const { borderRadius } = borders;

  return {
    marketplaceBanner_content: {
      backgroundImage: `${linearGradient(
        rgba(gradients.dark.main, 0.8),
        rgba(gradients.dark.state, 0.8)
      )}, url(${bca})`,
      backgroundSize: "cover",
      backgroundPosition: "30% 30%",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: pxToRem(16),
      borderRadius: borderRadius.lg,
    },

    marketplaceBanner_button: {
      marginTop: "auto",
      marginRight: "auto",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",

      "& .material-icons-round": {
        fontSize: "1.125rem",
        transform: `translate(${pxToRem(4)}, ${pxToRem(0)})`,
        transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
      },

      "&:hover .material-icons-round, &:focus .material-icons-round": {
        transform: `translate(${pxToRem(10)}, ${pxToRem(-10)})`,
      },
    },
  };
});
