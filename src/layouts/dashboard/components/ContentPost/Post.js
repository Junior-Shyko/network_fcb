import React, {useState} from "react";
// react-router components
import {Link } from "react-router-dom";
// componente externo
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/pt-br";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
//CUSTOM COMPONENT
import { api, urlBaseApiUpload } from "services/Api";
import Actions from "components/FCB/Post/Actions";

function PostContent(props) {

  const [ like, setLike ] = useState( parseInt(props.like) )
  const [ heart, setHeart ] = useState( parseInt(props.heart) )
  const [ activeLike, setActiveLike ] = useState("none")
  const [ activeHeart, setActiveHeart ] = useState("none")

  const AlterLike = async(count, type) => {
    api.defaults.headers.authorization = `Bearer ${sessionStorage.getItem("token")}`;
    if(type === 'like') {
      await api.put('posts/'+props.id, {
        data: {
          like: count
        }
      })
    }else{
      await api.put('posts/'+props.id, {
        data: {
          heart: count
        }
      })
    }   
  }

 const handleLike = async () => {
  if (activeLike === "none") {
    setLike(like + 1)
    setActiveLike("like")
    AlterLike(like + 1 , 'like')
    return;
  }
  if (activeLike === 'like'){
    setLike(like - 1)
    setActiveLike("none")
    AlterLike(like - 1, 'like')
    return;
  }
 }

 const handleHeart = () => {
  if (activeHeart === "none") {
    setHeart(heart + 1);
    setActiveHeart("like");
    AlterLike(heart + 1 , 'heart')
    return;
  }
  if (activeHeart === 'like'){
    setHeart(heart - 1);
    setActiveHeart("none");
    AlterLike(heart -1 , 'heart')
    return;
  }
 }

const redirect = (id) => {
  console.log({id})
}

  return (
    <Card sx={{ marginTop: "8px" }}>
      {props.file !== undefined && (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Link
            to={`../post/${props.id}`}
          >
            <CardMedia
              component="img"
              height="300"
              image={urlBaseApiUpload + props?.file}
              sx={{ objectFit: "contain" }}
              onClick={redirect(props.id)}
            />
          </Link>
        </Grid>
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
      {/* componente action */}
      {/* <Actions
        post={props}
        like={props.like}
        heart={props.heart} /> */}
    </Card>
  );
}

export default PostContent;
