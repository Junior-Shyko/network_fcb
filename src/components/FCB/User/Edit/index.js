
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
// import BasicLayout from "../../../../layouts/authentication/components/BasicLayout";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import burceMars from "assets/images/bruce-mars.jpg";
import CompEditUser from "./compEditUser";
import { api } from "services/Api";

function EditUser() {
  let { id } = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
        await api.get('users/' + id + '?populate=*')
        .then((res) => {
          setUser(res.data)
        })
        .catch((err) => {
          console.log({err})
        })
        
    }
    getUser()
  }, [])

  const preData = {
    firstName: 'User'
  }


  const styleField = {
    marginBottom: '5px',
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox color="white"
        bgColor="info"
        variant="gradient"
        borderRadius="lg"
        shadow="lg"
        opacity={1}
        mb={1}
        sx={{ marginTop: '60px' }}
      >
        <IconButton aria-label="voltar" size="small">
          <Icon fontSize="large" onClick={() => navigate(-1)} sx={{ color: "#fff" }}>arrow_back</Icon>
        </IconButton>
      </MDBox>
      <Card sx={{ marginBottom: '10px' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4} md={1}>
            <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" sx={{ margin: 1 }} />
          </Grid>
          <Grid item xs={8} md={5} >
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
          <Grid item xs={12} md={6} sm={6}>
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

            {user ?
              <CompEditUser preData={user} /> : <div>Aguarde...</div>
            }

          </Card>



        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <Card component="li" display="flex" alignItems="center" py={1} mb={1}>
            <MDBox item p={1} display="flex">
              <MDBox mr={2}>
                <Icon fontSize="large">location_city_icon</Icon>
              </MDBox>
              <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                <MDTypography variant="button" fontWeight="medium">
                  Dados da Igreja {user?.institutions[0].name}
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox mb={2} lineHeight={0} >
              <Grid container>
                <MDTypography variant="caption" color="text" mt={1} ml={2}>
                  <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                    Nome:
                  </MDTypography>&nbsp;&nbsp;&nbsp;
                  {user?.institutions[0].name}
                </MDTypography>
              </Grid>
              <Grid container>
                <MDTypography variant="caption" color="text" mt={1} ml={2}>
                  <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                    CNPJ:
                  </MDTypography>&nbsp;&nbsp;&nbsp;
                  {user?.institutions[0].cnpj}
                </MDTypography>
              </Grid>
              <Grid container>
                <MDTypography variant="caption" color="text" mt={1} ml={2}>
                  <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                    Endereço completo:
                  </MDTypography>&nbsp;&nbsp;&nbsp;
                  {user?.institutions[0].address} , {user?.institutions[0].number} , {user?.institutions[0].complement} , {user?.institutions[0].district} ,
                  {user?.institutions[0].city} , {user?.institutions[0].state}.
                </MDTypography>
              </Grid>
            </MDBox>
          </Card>
          <Divider />
          <Card component="li" display="flex" alignItems="center" py={1} mb={1}>
            <MDBox item p={1} display="flex">
              <MDBox mr={2}>
                <Icon fontSize="large">people_alt_icon</Icon>
              </MDBox>
              <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                <MDTypography variant="button" fontWeight="medium">
                  Dados do Grupo
                </MDTypography>
                <MDTypography variant="button" fontWeight="small">
                  <MDButton variant="outlined" color="info" size="small">TROCAR GRUPO</MDButton>
                </MDTypography>
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Grid>

    </DashboardLayout>
  );
}

export default EditUser;