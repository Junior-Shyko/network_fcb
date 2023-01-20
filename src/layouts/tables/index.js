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
import {useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import Icon from "@mui/material/Icon";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [ rows, setRows ] = useState([])

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  useEffect(() => {
    console.log({rows})
    const nameMember = {};
    fetch('http://localhost:1337/api/members?populate=*')
        .then(response => response.json())
        .then(data => {
          console.log(data.data)
          setRows(data.data)
          data.data.forEach((element, indice) => {
            nameMember[indice] = {
              name : element.attributes.name,
              function : element.attributes.city,
              status : element.attributes.state,
              employed : element.attributes.phone
            };
            // console.log(element)
            // nameMember['name'].push(element.attributes.name)
            // nameMember['function'] = element.attributes.city
            // nameMember['status'] = element.attributes.state
            // nameMember['employed'] = element.attributes.phone
          });
          console.log({nameMember})
          // setRows(nameMember)
        });
  }, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}  mt={1}>
            <Card>
              <MDBox
                mx={2}              
                py={3}
                px={2}
                variant="gradient"             
                borderRadius="lg"
                coloredShadow="dark"
              >
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}  display="flex" justifyContent="center">
                  <MDBox
                    borderRadius="lg"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"                   
                  >
                    <MDBox>
                      <MDButton variant="gradient" color="info">
                        <Icon>person_add_icon</Icon>
                        &nbsp; adicionar membro
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={4}  display="flex" justifyContent="center">
                  <MDBox
                    borderRadius="lg"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"                   
                  >
                    <MDBox>
                      <MDButton variant="gradient" color="info">
                        <Icon>home_icon</Icon>
                        &nbsp; Feed de notícias
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={4}  display="flex" justifyContent="center">
                  <MDBox
                    borderRadius="lg"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"                   
                  >
                    <MDBox>
                      <MDButton variant="gradient" color="info">
                        <Icon>groups_icon</Icon>
                        &nbsp; visualizar grupos
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </Grid>
              </Grid>
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
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
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
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
