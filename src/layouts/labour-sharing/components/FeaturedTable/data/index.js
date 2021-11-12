import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import avatar1 from "assets/images/team-2.jpg"
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";

/**
 * {@code FeaturedTable/data} provides the static data for featured table.
 *
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-16
 */

export default function data() {

  return {
    columns: [
      { name: "name", align: "left" },
      { name: "category", align: "center" },
      { name: "rating", align: "left" },
      { name: "action", align: "center" },
    ],    

    rows: [
      {
        name: [avatar1, "Arvin Aktar"],
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
        name: [avatar1, "Karim Amin"],
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
        name: [avatar1, "Ghosh Nasrin Sakib"],
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
        name: [avatar1, "Ming"],
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
