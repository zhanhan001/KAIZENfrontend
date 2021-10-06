
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Custom styles for the Projects
import styles from "layouts/labour-sharing/components/CategoryTable/styles";

import avatar1 from "assets/images/team-2.jpg"
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";


export default function data() {
  const classes = styles();

  return {
    columns: [
      { name: "name", align: "left" },
      { name: "category", align: "center" },
      { name: "rating", align: "left" },
      { name: "action", align: "center" },
    ],    

    rows: [
      {
        name: [avatar1, "Michael Myers"],
        rating: (
          <Rating name="readOnly" value={5.0} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Tower Crane Operation
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Jakob Blues"],
        rating: (
          <Rating name="readOnly" value={4.9} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Lift Installation
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Nathan Kheng"],
        rating: (
          <Rating name="readOnly" value={4.9} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Lift Installation
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Louis Ang"],
        rating: (
          <Rating name="readOnly" value={4.9} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Welding
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Boris Possum"],
        rating: (
          <Rating name="readOnly" value={4.8} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Tiling
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "David Copper"],
        rating: (
          <Rating name="readOnly" value={4.8} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Welding
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Richard Ng"],
        rating: (
          <Rating name="readOnly" value={4.7} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Gas Pipefitting
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Nico Bach"],
        rating: (
          <Rating name="readOnly" value={4.5} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Waterproofing
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Bob Niro"],
        rating: (
          <Rating name="readOnly" value={4.4} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Tower Crane Operation
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        name: [avatar1, "Caleb Khong"],
        rating: (
          <Rating name="readOnly" value={4.3} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Plastering
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
    ],
  };
}
