import React from 'react';
import CardContent from "@mui/material/CardContent";
import MDTypography from "components/MDTypography";

function Content(props) {
  if (props.post.isLoading) return 'Lendo...'
 
  if (props.post.error) return 'Ocorreu um erro inesperado: ' + props.post.error.message

  return (
    <CardContent>
        <MDTypography
        component="div"
        variant="subtitle1"
        color="dark"
        fontWeight="regular"
        >
        {props.post.data.attributes.content}
        </MDTypography>
    </CardContent>
  );
}

export default Content;