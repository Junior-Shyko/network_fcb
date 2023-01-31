

import React from 'react';
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
// import { Container } from './styles';

function TitleSummerAccordion(props) {

  return (
    <Grid container >
      <MDTypography variant="caption" color="text">
        <MDTypography id="demo-row-radio-buttons-group-label" variant="caption" textTransform="capitalize">
          {props.label}: <strong> {props.value}</strong>
        </MDTypography>&nbsp;&nbsp;&nbsp;
      </MDTypography>
    </Grid>
  );
}

export default TitleSummerAccordion;