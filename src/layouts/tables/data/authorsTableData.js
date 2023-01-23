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
import { Link } from "react-router-dom";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
// @mui material components
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {

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

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "nome", accessor: "username", align: "left" },
      { Header: "telefone", accessor: "phone", align: "left" },
      { Header: "status", accessor: "state", align: "center" },
      { Header: "Grupo", accessor: "nameGroup", align: "center" },
      { Header: "ação", accessor: "id", id: 'edit', align: "center", 
        Cell: ({ value }) => (
          <MDBox>
            <MDButton variant="gradient" color="info" size="medium" circular={true} iconOnly title="Editar Usuário">
              <Link to={`../usuario/editar/` + value} relative="path" >
                <MDTypography color="white" >
                    <ManageAccountsIcon />
                </MDTypography>
              </Link>
            </MDButton>
          </MDBox>
        )
      },
    ],
    rows : []   
  };
}
