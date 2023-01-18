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

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "context";

// Componente Material Ui
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";

import SideBarRight from "./../../Sidenav/SideBarRight";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <div>
      <MDBox m={1}  sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="info" variant="gradient">
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <MDButton variant="gradient" color="light">Perfil</MDButton>
          </Toolbar>
        </AppBar>
      </MDBox>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={10}>
          <MDBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
              p: 3,
              position: "relative",
              [breakpoints.up("xl")]: {
                marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
                transition: transitions.create(["margin-left", "margin-right"], {
                  easing: transitions.easing.easeInOut,
                  duration: transitions.duration.standard,
                }),
              },
            })}
          >
            {children}
          </MDBox>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <MDBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
              [breakpoints.up("xl")]: {
                marginRight: miniSidenav ? pxToRem(120) : pxToRem(1),
                transition: transitions.create(["margin-left", "margin-right"], {
                  easing: transitions.easing.easeInOut,
                  duration: transitions.duration.standard,
                }),
              },
            })}
          >
           <SideBarRight />
          </MDBox>
        </Grid>
      </Grid>
    
    
    </div>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
