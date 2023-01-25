
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
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


function EditUser() {
  let { id } = useParams();
  const [user, setUser] = useState();

  const getUser = () => {
    fetch('http://localhost:1337/api/users/' + id + '?populate=*')
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
      .catch((error) => {

      })

  }

  useEffect(() => {
    getUser()
  }, [])

  const styleField = {
    marginBottom: '5px',
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ marginTop: '60px', marginBottom: '10px' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4} md={1} >
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
            <MDBox p={2} mx={3} display="block">
              <CompEditUser label="Nome" name="username" value={user?.username} />
              <CompEditUser label="Conhecido como..." name="alias_users" value={user?.alias_users} />
              <CompEditUser label="E-mail" name="email" value={user?.email} />
              <CompEditUser label="Logradouro" name="address" value={user?.address} />
              <CompEditUser label="Número" name="number" value={user?.number} />
              <CompEditUser label="Complemento" name="complement" value={user?.complement} />
              <CompEditUser label="Cidade" name="district" value={user?.district} />
              <CompEditUser label="Estado" name="state" value={user?.state} />
            </MDBox>
          </Card>
          <Divider />

          <Card component="li" display="flex" alignItems="center" py={1} mb={1}>
            <MDBox item p={1} display="flex">
              <MDBox mr={2}>
                <Icon fontSize="large">perm_contact_calendar_icon</Icon>
              </MDBox>
              <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                <MDTypography variant="button" fontWeight="medium">
                  Dados de contato
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox p={2} mx={3} display="block">
              <CompEditUser label="Telefone" name="phone" value={user?.phone} />
              <CompEditUser label="E-mail" name="email" value={user?.email} />
              <CompEditUser label="Senha" name="password" value={null} />
            </MDBox>
          </Card>
          <Divider />
          <Card component="li" display="flex" alignItems="center" py={1} mb={1}>
            <MDButton variant="gradient" color="info">
              Salvar&nbsp;
              <Icon fontSize="medium">save</Icon>
            </MDButton>
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