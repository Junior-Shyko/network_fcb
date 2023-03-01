import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
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
  // const [posts, setPosts] = useState([])
  const [userPost, setUserPost] = useState();
  const [ file, setFile] =  useState([]);
  const [ like, setLike ] = useState();
  const [ heart, setHeart ] = useState();
  const [ isLike, setIsLike ] = useState(false);
  const [ usersLikes, setUsersLikes] = useState([]);
  const [ usersHearts, setUsersHearts] = useState([]);


  // async function getPostQuery() {
  //   const res = await api.get('posts/'+id+'?populate=*')
  //   return res.data.data
  // }
  
  // async function getLikes() {
  //   const res = await api.get('likes?populate=users_permissions_users&filters[post][id][$eq]='+id)
  //   console.log(res.data.data)
  //   return res.data.data
  // }

  // const posts = useQuery(['posts' , id], () => getPostQuery() )
  // const likes = useQuery([] , () => getLikes())


  // if (isFetching) return 'Aguardando posts...'

  // if (error) return 'An error has occurred: ' + error.message

  // useEffect(() => {
  //   //usuário logado
  //   const userAuth = JSON.parse(sessionStorage.getItem("user"));

  //   const getPost = async () => {
  //     await api.get('posts/'+id+'?populate=*')
  //     .then((res) => {
  //       console.log(res.data.data)
  //       setPosts(res.data.data)
  //       setLike(res.data.data.attributes.like)
  //       setHeart(res.data.data.attributes.heart)
  //       Object.entries(res.data.data.attributes.users_permissions_users.data).map(([keyRes, valRes], i) => (
  //         setUserPost(valRes)
  //       ))
  //       Object.entries(res.data.data.attributes.file.data).map(([keyRes, valRes], i) => (
  //         setFile(valRes)
  //       ))
  //     })
  //     .catch((err) => {
  //       console.log({err})
  //     })
  //   }
  //   getPost()
  //   //
  //   const getLikes = async() => {      
  //     const idUsers = [];
  //     var usersLikes = [];
  //     await api.get('likes?populate=users_permissions_users&filters[post][id][$eq]='+id)
  //     .then((res) => {
  //       res.data.data.map((post) => {
  //         post.attributes.users_permissions_users.data.map((users) => {
  //           if(userAuth.id == users.id) {
  //             console.log('gostou')
  //             setIsLike(true)
  //           }
  //           usersLikes.push(
  //             {
  //               id: users.id,
  //               username: users.attributes.username
  //             }
  //           )
  //         })
  //       })
  //     })
  //     .catch((err) => {
  //       console.log({err})
  //     })
  //     setUsersLikes(usersLikes)
  //   }

  //   getLikes();
  //   const getHearts = async() => {
  //     const idUsers = [];
  //     var usersHearts = [];
  //    await api.get('hearts?populate=users_permissions_users&filters[post][id][$eq]='+id)
  //     .then((res) => {
  //       res.data.data.map((post) => {
  //         // console.log(post.attributes.users_permissions_users.data) 
  //         post.attributes.users_permissions_users.data.map((users) => {
  //           // console.log({users})
  //           if(userAuth.id == users.id) {
  //             setIsLike(true)
  //           }
  //           usersHearts.push(
  //             {
  //               id: users.id,
  //               username: users.attributes.username
  //             }
  //           )
  //         })
  //       })
  //     })
  //     .catch((err) => {
  //       console.log({err})
  //     })
  //     setUsersHearts(usersHearts)
  //   }
  //   getHearts()
  // }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Card  sx={{marginTop: '80px'}}>
        <BackLink />
          
          {/* <Media post={posts} />
          <Content post={posts} /> */}
        <Divider />
        {
        id ? (
          <Actions
            post={id} 
            // like={like}
            // heart={posts.attributes?.heart}
            // listUsersLikes={getLike}
            // usersLikes={likes}
            // usersHearts={usersHearts}
            // contentShared={posts.attributes?.content}
          /> 
          // <div>Posts</div>
        ) : <div>Gerando likes</div>
        }
        
      </Card>

    </DashboardLayout>
  );
}

export default Details;