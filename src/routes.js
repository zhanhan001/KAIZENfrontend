import Dashboard from "layouts/dashboard";
import Organisation from "layouts/organisation";
import Profile from "layouts/profile";
import LabourSharing from "layouts/labour-sharing";
import LabourDetails from "layouts/labour-details";
import Discovery from "layouts/discover";
import Categories from "layouts/categories";

import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Basket from "examples/Icons/Basket";
import Cube from "examples/Icons/Cube"

/**
 * {@code routes} lists all routes in the frontend, which will be displayed on the sidenav
 *
 * @author Pang Jun Rong
 * @version 1.0
 * @since 2021-10-16
 */

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Organisation",
    key: "organisation",
    route: "/organisation",
    icon: <Office size="12px" />,
    component: Organisation,
    noCollapse: true,
  },
  
  {
    type: "collapse",
    name: "Labour Sharing",
    key: "labour-sharing",
    route: "/labour-sharing",
    icon: <Basket size="12px" />,
    component: LabourSharing,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Categories",
    key: "categories",
    route: "/categories",
    icon: <Cube size="12px" />,
    component: Categories,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Labour Details",
    key: "labour-details",
    route: "/labour-details",
    icon: <Settings size="12px" />,
    component: LabourDetails,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Labour Discovery",
    key: "labour-discover",
    route: "/labour-discover",
    icon: <Settings size="12px" />,
    component: Discovery,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: Profile,
    noCollapse: true,
  },
  
];

export default routes;
