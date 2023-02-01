import react, { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PostContent from "./Post";
//custom
import { api } from "services/Api";

export default function ContentPost() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            await api.get('posts?populate=users_permissions_user,file&sort[0]=id:DESC&pagination[page]=1&pagination[pageSize]=2')
                .then((res) => {
                    console.log(res.data)
                    //POSTVALUE PARA FORMAR UM ARRAY COM OS DADOS QUE PRECISA
                    const postValue = [];
                    //PERCORRENDO TODO O ARRAY PARA MONTAR UM OUTRO
                    Object.entries(res.data.data).map(([keyRes, valRes], i) => (
                        (valRes.attributes.file.data.attributes.url !== '' && (
                            console.log(valRes.attributes.users_permissions_user.data.attributes.username)
                        )),
                        postValue.push(
                            {
                                name: valRes.attributes.users_permissions_user.data.attributes['alias_users'],
                                content: valRes.attributes.content,
                                datePost: valRes.attributes.createdAt,
                                file: valRes.attributes.file.data.attributes.url
                            }
                        )
                        //PERCORRENDO SOMENTE USUARIO PARA PEGAR O NOME DO USUARIO
                        // Object.entries(valRes).map(([keyAttr, valAttr], i) => (
                            
                        //     Object.entries(valAttr.attributes.users_permissions_user.data).map(([keyUser, valUser], i) => (
                        //         console.log(valRes.content + ' - '+ valUser.alias_users)
                        //     ))
                        // ))
                        
                        // Object.entries(el.attributes.users_permissions_user.data.attributes).map(([key, val], i) => (
                        //     //CONDIÇÃO PARA PREENCHER SOMENTE O NOME DO USUÁRIO
                        //     Object.entries(el.attributes.file.data.attributes).map(([keyFile, valFile], i) => (
                        //         (key == 'alias_users' && keyFile == 'url' && postValue.push(                                    
                        //             {
                        //                 name: el.attributes.users_permissions_user.data.attributes['alias_users'],
                        //                 content: el.attributes.content,
                        //                 datePost: el.attributes.createdAt,
                        //                 file: valFile
                        //             }
                        //         ))
                        //     ))
                        // ))     
                    ));
                    // console.log({postValue})
                    setPost(postValue)
                })
                .catch((err) => {
                    console.log({ err })
                })
        }
        getPost();
    }, [])


    return (
        <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={0.5}>
                {Object.entries(post).map(([key, val], i) => (
                    // console.log(val)
                    <PostContent key={i} user={val.name} content={val.content} dtPost={val.datePost} file={val.file} />
                ))}
                <MDBox id="sentinela"></MDBox>
            </MDBox>
        </Grid>
    );
}
