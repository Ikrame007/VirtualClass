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
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../MDBox";
import MDTypography from "../../MDTypography";
import MDButton from "../../MDButton";
import MDAvatar from "../../MDAvatar";

// Material Dashboard 2 React example components
import DashboardLayout from "../../LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../Navbars/DashboardNavbar";
import DataTable from "../../Tables/DataTable";

import imgtest from '../../../../../src/assets/images/node-js-training-institute.jpg';

function Courses(props) {
  /*  const { columns, rows } = coursesTableData(); */
  const columns = [
    { Header: "course", accessor: "course", width: "45%", align: "left" },
    { Header: "price", accessor: "price", align: "center" },
    { Header: "participants", accessor: "participants", align: "center" },
    { Header: "revenue", accessor: "revenue", align: "center" },
    { Header: "published", accessor: "published", align: "center" },
    { Header: "action", accessor: "action", align: "center" },
  ];
  const Course = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );
  const rows =
    props.courses.map((course) => {
      return {
        course: <Course image={imgtest} name={course.title} />,
        price: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {course.price}
          </MDTypography>
        ),
        participants: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            
          </MDTypography>
        ),
        revenue: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            
          </MDTypography>
        ),
        published: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      }
    });
    
   
    
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Link to="/mycourses/new-course">
        <MDButton
          className="new-course"
          component="a"
          href="#"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color="secondary"
        >
          New Course
        </MDButton>
      </Link>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Published courses
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
})

export default connect(mapStateToProps)(Courses);

