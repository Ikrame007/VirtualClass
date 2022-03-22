import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { Link } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "../../MDBox";
import MDTypography from "../../MDTypography";
import MDInput from "../../MDInput";
import MDButton from "../../MDButton";
import MDAlert from "../../MDAlert";

import "./NewCourse.css";

// Material Dashboard 2 React example components
import DashboardLayout from "../../LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../Navbars/DashboardNavbar";
import DataTable from "../../Tables/DataTable";
import { useState } from "react";
import axios from "axios";

// Data
/* import coursesTableData from "layouts/courses/data/coursesTableData"; */

function NewCourse() {
  const columns = [
    { Header: "Your Collaborators", accessor: "pseudo", align: "left" },
    { accessor: "action", align: "center" },
  ];

  const alertContent = (content) => (
    <MDTypography variant="body2" color="white">
      {content}
    </MDTypography>
  );
  const rows = [
    {
      pseudo: "Amal Kalim",
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Remove
        </MDTypography>
      ),
    },
  ];
  const [showErrors, setShowErrors] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState('');
  console.log('ok')
  const submit = () => {
    console.log('submitted');
    const data = {
      title,
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RzdHVkZW50MEB0ZXN0LmNvbSIsIm5hbWUiOiJ0ZXN0dGVzdCIsImlhdCI6MTY0NzY4Njg4MiwiZXhwIjoxOTA2ODg2ODgyfQ.IwYURdK7C9uS2HPSA4mIwf1AP9OOsjER-nhe4KPV2HY' 
    }
    axios({
      method: "post",
      url: "http://localhost:9090/courses-service/api/courses",
      data: data,
      headers: {
        accesToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RzdHVkZW50MEB0ZXN0LmNvbSIsIm5hbWUiOiJ0ZXN0dGVzdCIsImlhdCI6MTY0NzY4Njg4MiwiZXhwIjoxOTA2ODg2ODgyfQ.IwYURdK7C9uS2HPSA4mIwf1AP9OOsjER-nhe4KPV2HY',
      },
    })
    /* axios.post(`http://localhost:9090/courses-service/api/courses`, 
      data
    ) */
      .then(res => {
        setShowSuccess(true);

      })
      .catch(err => {
        setErrors('Creation of new course was failed! Check if the input is valid.');
        console.log(errors);
        setShowErrors(true);
      })
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br />
      {/* {show ? <MDAlert color="success" dismissible /> : null} */}
      {showErrors ? <MDAlert color="error" dismissible >{alertContent(errors)} </MDAlert> : null}
      {showSuccess ? <MDAlert color="success" dismissible >{alertContent('New Course was created! Press Edit Button to start editting your course.')} </MDAlert> : null}
      <div className="general-informations">
        <h1 className="title">Add New Course</h1>
        <span className="label">Course title</span>
        <br />
        <MDInput
          className="input"
          placeholder="e.g. 'React.js Basics' "
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <span className="label">Add Collaborators</span>
        <MDButton
          className="back"
          component="a"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          size="small"
          color="success"
          style={{ "margin-left": "37%" }}
        >
          Add people
        </MDButton> 
        <br />
        {/* <MDInput className="input" placeholder="Find a collaborator..." />  */}
        <MDBox pt={6} pb={3} className="input">
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
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
        <Link to="/courses">
          <MDButton
            className="back"
            component="a"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            color="light"
            style={{ "margin-right": "5%" }}
          >
            Cancel
          </MDButton>
        </Link>
        {!showSuccess ? <MDButton
          className="continue"
          component="a"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color="secondary"
          onClick={() => submit()}
        >
          Continue
        </MDButton>

          : null}
        {showSuccess ? <Link to="/courses/course-informations/1234567"> <MDButton
          className="continue"
          component="a"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color="secondary"
        >
          Edit
        </MDButton>
        </Link>
          : null}
      </div>
    </DashboardLayout>
  );
}

export default NewCourse;
