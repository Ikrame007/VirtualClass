/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "../../../MDBox";
import MDTypography from "../../../MDTypography";
import MDAvatar from "../../../MDAvatar";

// Images
import LogoAsana from "../../../../../assets/images/small-logos/logo-asana.svg";

export default function data() {
  const Course = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "course", accessor: "course", width: "45%", align: "left" },
      { Header: "price", accessor: "price", align: "center" },
      { Header: "participants", accessor: "participants", align: "center" },
      { Header: "revenue", accessor: "revenue", align: "center" },
      { Header: "published", accessor: "published", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        course: <Course image={LogoAsana} name="Asana" />,
        price: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            $52
          </MDTypography>
        ),
        participants: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
        ),
        revenue: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        published: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
