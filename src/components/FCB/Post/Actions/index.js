import React, { useState, useEffect, useContext } from "react";
import { RWebShare } from "react-web-share";
import { api, urlBase } from "services/Api";
import { useQuery } from 'react-query'
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


function Actions(props) {
  console.log(props.post.attributes)

  const [like, setLike] = useState(parseInt(props.post.attributes.like));
  const [heart, setHeart] = useState(parseInt(props.post.attributes.heart));
  const [activeLike, setActiveLike] = useState("none");
  const [activeHeart, setActiveHeart] = useState("none");
  const [contentSharedPost, setContentSharedPost] = useState(props.post.attributes.content);
  const userAuth = JSON.parse(sessionStorage.getItem("user"));

  async function getLikes() {
    const res = await api.get('likes?populate=users_permissions_users&filters[post][id][$eq]='+props.post?.id)
    console.log(res.data.data)
    return res.data.data
  }

  const { isLoading, error, data } = useQuery(['likes' , props.post.id], () => getLikes() )

  function dataLike() {
    var datal = "";
    if(data) {
      console.log({userAuth})
      console.log(data)
      {
        data.map((el, i) => {
          console.log(el)
          el.attributes.users_permissions_users.data.map((el_users, indice) => {
            console.log(el_users.id)
            if(el_users.id == userAuth.id) {
              datal = 'Gostou';
            }
          })
        }) 
      }     
    }
    return datal;
  }
  if (isLoading) return 'Lendo actions...'
 
  if (error) return 'An error has occurred: ' + error.message
  
  const dataLik = dataLike()
  console.log(dataLik)
  // const AlterLike = async (count, type) => {
  //   api.defaults.headers.authorization = `Bearer ${sessionStorage.getItem(
  //     "token"
  //   )}`;
  //   if (type === "like") {
  //     await api.put("posts/" + props.post.id, {
  //       data: {
  //         like: count,
  //       },
  //     });

  //   } else {
  //     await api.put("posts/" + props.post.id, {
  //       data: {
  //         heart: count,
  //       },
  //     });
  //   }
  // };

  const handleLike = async () => {
    if (activeLike === "none") {
      setLike(like + 1);
      setActiveLike("like");
      // AlterLike(like + 1, "like");
      return;
    }
    if (activeLike === "like") {
      setLike(like - 1);
      setActiveLike("none");
      // AlterLike(like - 1, "like");
      return;
    }
  };

  const handleHeart = () => {
    if (activeHeart === "none") {
      setHeart(heart + 1);
      setActiveHeart("like");
      // AlterLike(heart + 1, "heart");
      return;
    }
    if (activeHeart === "like") {
      setHeart(heart - 1);
      setActiveHeart("none");
      // AlterLike(heart - 1, "heart");
      return;
    }
  };

  return (
    <MDBox>
      <CardActions disableSpacing className="elementCardAction">
        <Grid item xs={12} md={12} lg={12}>
          <IconButton
            aria-label="like"
            onClick={handleLike}
          >
          
            {/* {activeLike === "none" && <ThumbUpOffAltIcon />}
            {activeLike === "like" && <ThumbUpIcon />} */}
            { 
              dataLik === "Gostou" || activeLike === "like"
              ? <ThumbUpIcon /> 
              : <ThumbUpOffAltIcon />
            }
            <MDTypography
              variant="inherit"
              fontWeight="light"
              sx={{ marginLeft: "3px", fontSize: "16px" }}
            >
              {" "}
              {like == NaN ? 0 : props.like}{" "}
              
            </MDTypography>
          </IconButton>
          <IconButton
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
              {heart == NaN ? 0 : props.heart}{" "}
            </MDTypography>
          </IconButton>
          <RWebShare
            data={{
              text: contentSharedPost,
              url: urlBase + "post/" + props.post.id,
              title: "Publicado",
            }}
            onClick={() => console.log(contentSharedPost)}
          >
            <IconButton aria-label="shared">

              <ShareIcon />
            </IconButton>
          </RWebShare>
        </Grid>
      </CardActions>
      <Divider />
      {/* {
        props.listUsersLikes && (
          <CardContent sx={{ maxHeight: '200px', overflow: 'scroll' }}>
            <MDTypography
              component="div"
              variant="button"
              color="dark"
              fontWeight="regular"
              display="flex"
            >
            </MDTypography>
            <MDTypography
              component="div"
              variant="subtitle1"
              color="dark"
              fontWeight="regular"
            >
              <List>
                {
                  Object.entries(props.usersLikes).map(([keyRes, valRes], i) => (
                    <ListItem disablePadding key={i}>
                      <ListItemButton>
                        <MDAvatar src={Logo} alt={valRes.username} size="sm" shadow="sm" sx={{ marginRight: 1 }} />
                        <ListItemText
                          primary={valRes.username}
                          className="css-6cmau2-MuiTypography-root"
                        />
                        <MDTypography
                          color="info"
                          fontWeight="light"
                          variant="overline"
                        >
                          Curtiu
                        </MDTypography>
                      </ListItemButton>
                    </ListItem>
                  ))

                }

                {
                  Object.entries(props.usersHearts).map(([keyRes, valRes], i) => (
                    <ListItem disablePadding key={i}>
                      <ListItemButton>
                        <MDAvatar src={Logo} alt={valRes.username} size="sm" shadow="sm" sx={{ marginRight: 1 }} />
                        <ListItemText
                          primary={valRes.username}
                          className="css-6cmau2-MuiTypography-root"
                        />
                        <MDTypography
                          color="primary"
                          fontWeight="light"
                          variant="overline"
                        >
                          Amou
                        </MDTypography>
                      </ListItemButton>
                    </ListItem>
                  ))

                }

              </List>
            </MDTypography>
          </CardContent>
        )
      } */}

    </MDBox>
  );
}

export default Actions;
