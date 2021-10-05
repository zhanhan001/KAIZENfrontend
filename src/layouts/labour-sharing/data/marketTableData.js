/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";
import Button from "@mui/material/Button";


// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Rating } from "@mui/material";

function Labour({ image, name, company }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" textColor="secondary">
          {company}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Function({ category, experience }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" textColor="text">
        {category}
      </SuiTypography>
      <SuiTypography variant="caption" textColor="secondary">
        {experience}
      </SuiTypography>
    </SuiBox>
  );
}

export default {
  columns: [
    { name: "professional", align: "left" },
    { name: "skill", align: "left" },
    { name: "rating", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      professional: <Labour image={team2} name="John Michael" company="Merdeka Sdn Bhd" />,
      skill: <Function category="Welding" experience="10 Years" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="for hire" color="success" size="extra-small" />
      ),
      rating: (
        <Rating name="readOnly" value={3.7} precision={0.1} readOnly />
      ),
      action: (
        <Button href="#text-buttons">View</Button>
      ),
    },
    {
      professional: <Labour image={team3} name="Alexa Liras" company="Deckard Construction Pte Ltd" />,
      skill: <Function category="Tower Crane Operation" experience="2 Years" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="hired" color="secondary" size="extra-small" />
      ),
      rating: (
        <Rating name="readOnly" value={4.0} precision={0.1} readOnly />
      ),
      action: (
        <Button href="#text-buttons">View</Button>
      ),
    },
    {
      professional: <Labour image={team4} name="Laurent Perrier" company="Blackrock Heavy Industries Pte Ltd" />,
      skill: <Function category="Gas Pipefitting" experience="3 Years" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="for hire" color="success" size="extra-small" />
      ),
      rating: (
        <Rating name="readOnly" value={4.1} precision={0.1} readOnly />
      ),
      action: (
        <Button href="#text-buttons">View</Button>
      ),
    },
    {
      professional: <Labour image={team3} name="Michael Levi" company="Singapore Construction Pte Ltd" />,
      skill: <Function category="Welding" experience="1 Year" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="for hire" color="success" size="extra-small" />
      ),
      rating: (
        <Rating name="readOnly" value={4.1} precision={0.1} readOnly />
      ),
      action: (
        <Button href="#text-buttons">View</Button>
      ),
    },
    {
      professional: <Labour image={team2} name="Richard Gran" company="Terraformers Pte Ltd" />,
      skill: <Function category="Lift Installation" experience="6 Years" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="hired" color="secondary" size="extra-small" />
      ),
      rating: (
        <Rating name="readOnly" value={3.5} precision={0.1} readOnly />
      ),
      action: (
        <Button href="#text-buttons">View</Button>
      ),
    },
    {
      professional: <Labour image={team4} name="Miriam Eric" company="Penta Ocean Construction Pte Ltd" />,
      skill: <Function category="Electrical Wiring Installation" experience="2 Years" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="hired" color="secondary" size="extra-small" />
      ),
      rating: (
        <Rating name="readOnly" value={4.3} precision={0.1} readOnly />
      ),
      action: (
        <Button href="#text-buttons">View</Button>
      ),
    },
  ],
};
