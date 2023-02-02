import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/pt-br";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
//CUSTOM COMPONENT
import { urlBaseApiUpload } from "services/Api";

function PostContent(props) {
//   console.log({ props });
// console.log({urlBaseApiUpload})
  return (
    <Card sx={{ marginTop: "8px" }}>
      <CardMedia
        component="img"
        height="300"
        image={urlBaseApiUpload + props?.file}
        sx={{ objectFit: "contain" }}
    />
      <CardContent>
        <MDBox sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
          <AccountCircleIcon />
          <MDTypography
            variant="h6"
            textTransform="capitalize"
            sx={{ marginLeft: "5px" }}
          >
            {props.user}
          </MDTypography>
          <MDTypography
            variant="caption"
            fontWeight="light"
            textTransform="capitalize"
            sx={{ marginLeft: "5px" }}
          >
            {/* - Igreja Assembléia de Deus - Ministério Madureira */}
            Publicado:
            <Moment fromNow>{props.dtPost}</Moment>
          </MDTypography>
        </MDBox>
        <MDTypography
          component="div"
          variant="button"
          color="text"
          fontWeight="light"
        >
          {props.content}
        </MDTypography>
      </CardContent>
      <CardActions disableSpacing className="elementCardAction">
        <Grid item xs={12} md={12} lg={12}>
          <IconButton
            aria-label="like"
            // color="info"
            sx={{ fontSize: "18px" }}
          >
            <ThumbUpIcon />
            <MDTypography
              variant="inherit"
              fontWeight="light"
              sx={{ marginLeft: "3px", fontSize: "16px" }}
            >
              {" "}
              894.987{" "}
            </MDTypography>
          </IconButton>
          <IconButton
            aria-label="deslike"
            // color="info"
            sx={{ fontSize: "18px" }}
          >
            <ThumbDownAltIcon />
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default PostContent;
