import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/pt-br";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';

import ChurchIcon from '@mui/icons-material/Church';
import Popover from '@mui/material/Popover';
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
      {props.file !== undefined && (
          <CardMedia
            component="img"
            height="300"
            image={urlBaseApiUpload + props?.file}
            sx={{ objectFit: "contain" }}
        />
        )
      }
    <CardHeader
        avatar={          
          <AccountCircleIcon fontSize="large" color="inherit"/>
        }
        // action={
        //   <IconButton aria-label="settings" title="Nome da Instituição" >
        //    <ChurchIcon  color="inherit" fontSize="samll"/>
        //   </IconButton>
        // }
        title={`${props.user}`}
        subheader={
          <IconButton aria-label="settings" title="Nome da Instituição" sx={{fontSize: '12px'}} >
            <Moment fromNow>{props.dtPost}</Moment>
            <Divider orientation="vertical" flexItem />
            <strong> {props.insti}</strong>
          </IconButton>
         }
      />
      <CardContent>
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
              {props.like}{" "}
            </MDTypography>
          </IconButton>
          <IconButton
            aria-label="deslike"
            sx={{ fontSize: "18px" }}
          >
            <FavoriteIcon />
            <MDTypography
              variant="inherit"
              fontWeight="light"
              sx={{ marginLeft: "3px", fontSize: "16px" }}
            >
              {" "}
              {props.heart}{" "}
            </MDTypography>
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default PostContent;
