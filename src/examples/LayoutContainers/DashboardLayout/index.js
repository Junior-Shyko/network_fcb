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
// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "context";

// Componente Material Ui
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ApartmentIcon from '@mui/icons-material/Apartment';

// import SideBarRight from "./../../Sidenav/SideBarRight";
import MenuProfile from "layouts/dashboard/components/MenuProfile";
function DashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <MDBox sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
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
      {/* <MDBox m={1}  sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="info" variant="gradient">
          <Toolbar>            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  color="inherit">
              Logo
            </Typography>            
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              title="Sua instituição"
            >
              <ApartmentIcon />
            </IconButton>
            <MenuProfile />
          </Toolbar>
        </AppBar>
      </MDBox> */}
     
      {children}
    
    </MDBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
