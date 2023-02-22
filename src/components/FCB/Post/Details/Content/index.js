import React from 'react';
import CardContent from "@mui/material/CardContent";
import MDTypography from "components/MDTypography";
// import { Container } from './styles';

function Content(props) {
  return (
    <CardContent>
        <MDTypography
        component="div"
        variant="subtitle1"
        color="dark"
        fontWeight="regular"
        >
        {props.content}
        </MDTypography>
    </CardContent>
  );
}

export default Content;