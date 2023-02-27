import React from 'react';
import CardContent from "@mui/material/CardContent";
import MDTypography from "components/MDTypography";

function Content(props) {
  return (
    <CardContent>
        <MDTypography
        component="div"
        variant="subtitle1"
        color="dark"
        fontWeight="regular"
        >
        {props.post.content}
        </MDTypography>
    </CardContent>
  );
}

export default Content;