import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { api, urlBaseApiUpload } from 'services/Api';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { Container } from './styles';
import Card from "@mui/material/Card";
import Divider from '@mui/material/Divider';
import BackLink from 'components/BackLink';
import Header from './Header';
import Media from './Media';
import Content from './Content';
import Actions from '../Actions';

const Details = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState([])
  const [userPost, setUserPost] = useState();
  const [ file, setFile] =  useState([]);
  const [ like, setLike ] = useState();
  const [ heart, setHeart ] = useState();
  const [ isLike, setIsLike ] = useState(false);

  console.log({isLike})

  useEffect(() => {
    const getPost = async () => {
      await api.get('posts/'+id+'?populate=*')
      .then((res) => {
        console.log(res.data.data)
        setPosts(res.data.data)
        setLike(res.data.data.attributes.like)
        setHeart(res.data.data.attributes.heart)
        Object.entries(res.data.data.attributes.users_permissions_users.data).map(([keyRes, valRes], i) => (
          setUserPost(valRes)
        ))
        Object.entries(res.data.data.attributes.file.data).map(([keyRes, valRes], i) => (
          setFile(valRes)
        ))
      })
      .catch((err) => {
        console.log({err})
      })
    }
    getPost()
    //
    const getLikes = async() => {
      const userAuth = JSON.parse(sessionStorage.getItem("user"));
      const idUsers = [];
     await api.get('likes?populate=users_permissions_users&filters[post][id][$eq]='+id)
      .then((res) => {
        res.data.data.map((post) => {
          // console.log(post.attributes.users_permissions_users.data) 
          post.attributes.users_permissions_users.data.map((users) => {
            if(userAuth.id == users.id) {
              console.log('gostou')
              setIsLike(true)
            }
          })
        })
      })
      .catch((err) => {
        console.log({err})
      })
    }
    getLikes();
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card  sx={{marginTop: '80px'}}>
        <BackLink />
          <Header user={userPost} datePost={posts.attributes?.createdAt} />
          <Media image={urlBaseApiUpload+file.url} />
          <Content content={posts.attributes?.content} />
        <Divider />
        {
        posts ? (
          <Actions
            post={posts} 
            like={like}
            heart={posts.attributes?.heart}
            islike={isLike}
          /> 
        ) : <div>Gerando likes</div>
        }
        
      </Card>

    </DashboardLayout>
  );
}

export default Details;