import React, {useState, useEffect, useContext} from "react";
import { useMutation, useQuery } from 'react-query'
import { RWebShare } from "react-web-share";
import { api, urlBase } from "services/Api";
// import { Container } from './styles';
// Material UI components
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ListItemText from "@mui/material/ListItemText";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListItemButton from "@mui/material/ListItemButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from '@mui/material/Divider';
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import Logo from "assets/images/boaz-logo.png";
import {AuthContext} from "context/AuthContext";
import usePost from "../hooks/Post";

function Actions(props) {
  console.log('Actions ', props)
  const userToken = sessionStorage.getItem("token");
  // const [confLike, SetConfLike] = useState(false);
  const [activeLike, setActiveLike] = useState("none");
  const [like, setLike] = useState(parseInt(0));
  const { status, data, error, isFetching } = usePost(props.post);
  console.log({data})
  console.log({status})
  // const AlterLike = async (count, type) => {
  //   const data = [];
  //   api.defaults.headers.authorization = `Bearer ${sessionStorage.getItem(
  //     "token"
  //   )}`;
  //   if (type === "like") {
  //     const res = await api.put("posts/" + props.post.data.id, {
  //       data: {
  //         like: count,
  //       },
  //     });      
  //     data = res;
  //   } 
  //   return data;
  // };

  const handleLike = async () => {
    console.log({activeLike})
    props.listUsersLikes(activeLike)
    // if (activeLike === "none") {
    //   setLike(like + 1);
    //   setActiveLike("like");   
    //   AlterLike(like + 1, "like");
    //   return;
    // }
    // if (activeLike === "like") {
    //   setLike(like - 1);
    //   setActiveLike("none");
    //   AlterLike(like - 1, "like");
    //   return;
    // }
  };

  return (
    <MDBox>
      <CardActions disableSpacing className="elementCardAction">
        <Grid item xs={12} md={12} lg={12}>
          <IconButton
            aria-label="like"
            onClick={handleLike}
          >
            {activeLike === "like" && <ThumbUpIcon />}
            {activeLike === "none" && <ThumbUpOffAltIcon />}
            <MDTypography
              variant="inherit"
              fontWeight="light"
              sx={{ marginLeft: "3px", fontSize: "16px" }}
            >
              {" "}
              {like == NaN ? 0 : like }{" "}
            </MDTypography>
          </IconButton>
          {/* <IconButton
            aria-label="deslike"
            onClick={handleHeart}
          >
            {activeHeart === "none" && <FavoriteBorderIcon />}
            {activeHeart === "like" && <FavoriteIcon />}
            <MDTypography
              variant="inherit"
              fontWeight="light"
              sx={{ marginLeft: "3px", fontSize: "16px" }}
            >
              {" "}
              {heart == NaN ? 0 : heart }{" "}
            </MDTypography>
          </IconButton> */}
          <RWebShare
            data={{
              text: props.content,
              url: urlBase + "post/" + props.id,
              title: "Publicado",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <IconButton aria-label="shared">
              <ShareIcon />
            </IconButton>
          </RWebShare>
        </Grid>
      </CardActions>
    </MDBox>
  )
}
export default Actions;