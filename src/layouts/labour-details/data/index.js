import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import avatar1 from "assets/images/team-2.jpg"
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";

/**
 * {@code labour-details/data} provides static data for the labour details page.
 *
 * @author Pang Jun Rong
 * @author Chong Zhan Han
 * @version 2.0
 * @since 2021-10-27
 */


//takes in an array of employee skills to throw out the correct data
export default function data(prop, findEmployeeSkillDTO) {

  const rows = prop.map((details) => {

    const setRow = () => {
      findEmployeeSkillDTO(details.name);
    }
    //console.log(details);
      return {
        name: [,details.name],
        rating: (
          <Rating name="readOnly" value={details.rating} precision={0.1} readOnly />
        ),
        category: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            {details.skillName}
          </SuiTypography>
        ),
        action: (
          <SuiBox width="8rem" textAlign="center">
            <Button href="#text-buttons" onClick = {setRow}>Select</Button>
          </SuiBox>
        ),
      } || [];
  });


  return {
    columns: [
      { name: "name", align: "left" },
      { name: "category", align: "center" },
      { name: "rating", align: "left" },
      { name: "action", align: "center" },
    ],    

    rows: rows
  };
}

