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

// @mui material components

import Grid from '@mui/material/Grid';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import {useEffect, useState} from "react"
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
// Material Dashboard 2 React example components

// Dashboard components
import FormPost from "layouts/dashboard/components/FormPost";
import ContentPost from "./components/ContentPost";


function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [ upPosts, setUpPosts ] = useState();
  const [ getPosts, setGetPosts ] = useState(true);
  
  function upGetPosts(mudanca) {
    setGetPosts(mudanca)
  }

  useEffect(() => {
    console.log({getPosts})
  }, [])

  return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3} sx={{ marginTop: '25px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={1.5}>
                <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
                  <Grid item xs={12} md={12} lg={12}>
                    {/* AQUI HAVIA COMPONENT DE POST */}
                  </Grid>
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
          <MDBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={0.5}>
              </Grid>
              <Grid item xs={12} md={12} lg={8.5}>
                <FormPost upGetPosts={upGetPosts} />
                <ContentPost getPosts={getPosts} /> 
              </Grid>

              <Grid item xs={3} md={12} lg={3} sx={{maxHeight: 800, overflow: 'auto', borderRadius: '18px', display: { xs: "none", lg: "block" }}}>
              <Card>
                  <CardMedia
                      sx={{ height: 300 }}
                      image="https://d2r9epyceweg5n.cloudfront.net/stores/002/363/568/products/whatsapp-image-2022-08-24-at-17-36-361-dd505a7bf0ce039a3016613752127470-1024-1024.jpeg"
                      title="green iguana"
                  />
                  <CardContent sx={{textAlign: 'center'}}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Card de informações
                      </Typography>
                      <Typography variant="h5" component="div">
                          Grupo de Convívio
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                      </Typography>
                      <Typography variant="body2">
                          Se você está gostando desse projeto seja um doador para o desenvolvimento da 
                          aplicação não parar.
                          <br />
                          {'"a benevolent smile"'}
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <MDButton variant="gradient" color="info" fullWidth>
                          Quero ajudar no projeto
                      </MDButton>
                  </CardActions>
              </Card>
              </Grid>
                      
            </Grid>
          </MDBox>
          {/* <MDBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={8}>
                <Projects />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <OrdersOverview />
              </Grid>
            </Grid>
          </MDBox> */}
        </MDBox>
        <Footer />
      </DashboardLayout>
  );
}

export default Dashboard;
