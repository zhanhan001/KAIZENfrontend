import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import logoGeneric from "assets/images/small-logos/logo-category.svg"
import Button from "@mui/material/Button";

/**
 * {@code CategoryTable/data} provides the static data for category table.
 *
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-16
 */

export default function data() {

  return {
    columns: [
      { name: "category", align: "left" },
      { name: "availability", align: "left" },
      { name: "cost", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: [
      {
        category: [logoGeneric, "Electrical Wiring Installation"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            56
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $400/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Gas Pipefitting"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            20
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $380/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Lift Installation"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            28
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $350/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Mobile Crane Operation"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            3
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $800/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Plastering"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            84
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $380/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Tower Crane Operation"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            56
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $750/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Thermal Insulation"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            310
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $400/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Tiling"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            198
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $300/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Waterproofing"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            34
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $350/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons">Select</Button>
          </SuiBox>
        ),
      },
      {
        category: [logoGeneric, "Welding"],
        availability: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            6
          </SuiTypography>
        ),
        cost: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            From $500/Week
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="/categories">Select</Button>
          </SuiBox>
        ),
      },
    ],
  };
}
