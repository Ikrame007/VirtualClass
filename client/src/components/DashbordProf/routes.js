/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React layouts
import Dashboard from "./layouts/dashboard";
import Courses from "./layouts/courses";
import Drafts from "./layouts/drafts";
import Billing from "./layouts/billing";
import Notifications from "./layouts/notifications";
import Profile from "./layouts/profile";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/professor/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Drafts",
    key: "drafts",
    icon: <Icon fontSize="small">drafts</Icon>,
    route: "/professor/drafts",
    component: <Drafts />,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    icon: <Icon fontSize="small">book</Icon>,
    route: "/professor/courses",
    component: <Courses />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/professor/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/professor/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/professor/profile",
    component: <Profile />,
  },
];

export default routes;
