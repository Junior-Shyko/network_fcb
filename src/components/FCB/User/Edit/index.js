
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
// import BasicLayout from "../../../../layouts/authentication/components/BasicLayout";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import burceMars from "assets/images/bruce-mars.jpg";

function EditUser() {
  let { id } = useParams();
  const [user, setUser] = useState();

  const getUser = () => {
    fetch('http://localhost:1337/api/users/' + id + '?populate=links,groups')
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
      .catch((error) => {

      })

  }
  console.log({ user })
  useEffect(() => {
    getUser()
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ marginTop: '60px', marginBottom: '10px' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4} md={1}>
            <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" sx={{ margin: 1 }} />
          </Grid>
          <Grid item xs={8} md={5}>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Nome: {user?.username}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Grupo: {user?.groups[0].name}
              </MDTypography>
            </MDBox>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDButton variant="gradient" color="info">
              Acessar Grupo&nbsp;
              <Icon fontSize="medium">people_icon</Icon>
            </MDButton>
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} xl={6}>
          <Card component="li" display="flex" alignItems="center" py={1} mb={1}>
            <MDBox item p={1} display="flex">
              <MDBox mr={2}>
                <Icon fontSize="large">account_circle_user</Icon>
              </MDBox>
              <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                <MDTypography variant="button" fontWeight="medium">
                  Dados Pessoais
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox p={2} mx={3} display="flex">
              <TextField label="Nome" variant="standard" fullWidth />
            </MDBox>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <Card>
            <MDBox p={2} mx={3} display="flex" justifyContent="center">
              <h5>Aqui</h5>
            </MDBox>
          </Card>
        </Grid>
      </Grid>

    </DashboardLayout>
  );
}

export default EditUser;