import React, {useState, useEffect, useContext} from "react";
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
import { boolean } from "yup";

function Actions(props) {
  console.log({props})
  const {user} =  useContext(AuthContext)
  const [like, setLike] = useState(parseInt(props.like));
  const [heart, setHeart] = useState(parseInt(props.heart));
  const [activeLike, setActiveLike] = useState("none");
  const [activeHeart, setActiveHeart] = useState("none");
  
  const AlterLike = async (count, type) => {
    api.defaults.headers.authorization = `Bearer ${sessionStorage.getItem(
      "token"
    )}`;
    if (type === "like") {
      await api.put("posts/" + props.post.id, {
        data: {
          like: count,
        },
      });
      
    } else {
      await api.put("posts/" + props.post.id, {
        data: {
          heart: count,
        },
      });
    }
  };

  const handleLike = async () => {
    if (activeLike === "none") {
      setLike(like + 1);
      setActiveLike("like");
      AlterLike(like + 1, "like");
      return;
    }
    if (activeLike === "like") {
      setLike(like - 1);
      setActiveLike("none");
      AlterLike(like - 1, "like");
      return;
    }
  };

  const handleHeart = () => {
    if (activeHeart === "none") {
      setHeart(heart + 1);
      setActiveHeart("like");
      AlterLike(heart + 1, "heart");
      return;
    }
    if (activeHeart === "like") {
      setHeart(heart - 1);
      setActiveHeart("none");
      AlterLike(heart - 1, "heart");
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
          {
            props.islike ? <ThumbUpIcon />
            : activeLike === "none" && <ThumbUpOffAltIcon />
            ? activeLike === "like" && <ThumbUpIcon /> : null
          }
          <MDTypography
            variant="inherit"
            fontWeight="light"
            sx={{ marginLeft: "3px", fontSize: "16px" }}
          >
            {" "}
            {like == NaN ? 0 : props.like }{" "}
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
            {heart == NaN ? 0 : props.heart }{" "}
          </MDTypography>
        </IconButton>
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
    <Divider />
     <CardContent  sx={{maxHeight: '200px', overflow: 'scroll'}}>
     <MDTypography
       component="div"
       variant="button"
       color="dark"
       fontWeight="regular"
       display="flex"
     >
       {
         props.like >= 2 ? (
           <div>
             <strong>{props.like}</strong>{' '}
             pessoas curtiram e {' '}
           </div>
         ) : props.like == 1 ? (
           <div>
             <strong>{props.like}</strong>{' '}
             pessoa curtiu e {' '}
           </div>
         ) : (
           <div>
             {' '} ninguém curtiu e {' '}                
           </div>
         )              
       }
       {
         props.heart >= 2 ? (
           <div>
             <strong>{props.heart}</strong>{' '}
             pessoas amaram.
           </div>
         ) : props.heart == 1 ? (
           <div>
             <strong>{props.heart}</strong>{' '}
             pessoa amou.
           </div>
         ) : (
           <div>
             {' '} ninguém amou. {' '}                
           </div>
         )              
       }
        {/* <strong>{posts.attributes?.like}</strong> pessoas curtiram
        e <strong>{posts.attributes?.heart}</strong> amaram, veja quem são: */}
       </MDTypography>
       <MDTypography
         component="div"
         variant="subtitle1"
         color="dark"
         fontWeight="regular"
       >
         <List>
           <ListItem disablePadding>
             <ListItemButton>
              <MDAvatar src={Logo} alt="Boaz Logo" size="lg" shadow="sm" sx={{ margin: 1 }} />
              <ListItemText primary="Caio Bruno Jorge Vieira" />
             </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
             <ListItemButton component="a" href="#simple-list">
               <MDAvatar src={Logo} alt="Boaz Logo" size="lg" shadow="sm" sx={{ margin: 1 }} />
               <ListItemText primary="Tânia Giovana Freitas" />
             </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
             <ListItemButton>
             <MDAvatar src={Logo} alt="Boaz Logo" size="lg" shadow="sm" sx={{ margin: 1 }} />
               <ListItemText primary="Nicolas José Martin da Rocha" />
             </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
             <ListItemButton component="a" href="#simple-list">
              <MDAvatar src={Logo} alt="Boaz Logo" size="lg" shadow="sm" sx={{ margin: 1 }} />
               <ListItemText primary="Emily Sarah da Mota" />
             </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
             <ListItemButton>
              <MDAvatar src={Logo} alt="Boaz Logo" size="lg" shadow="sm" sx={{ margin: 1 }} />
              <ListItemText primary="Trash" />
             </ListItemButton>
           </ListItem>
           <ListItem disablePadding>
             <ListItemButton component="a" href="#simple-list">
             <MDAvatar src={Logo} alt="Boaz Logo" size="lg" shadow="sm" sx={{ margin: 1 }} />
               <ListItemText primary="Emily Sarah da Mota" />
             </ListItemButton>
           </ListItem>
         </List>
       </MDTypography>
     </CardContent>
     </MDBox>
  );
}

export default Actions;
