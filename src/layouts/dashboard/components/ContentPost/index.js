import react, { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import PostContent from "./Post";
//custom
import { api } from "services/Api";

export default function ContentPost() {
    const [post, setPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const perPage = 2;

        const getPost = async () => {
            await api.get(`posts?populate[users_permissions_user][populate]=institutions&populate[file][populate]&sort[0]=id:DESC&pagination[page]=${currentPage}&pagination[pageSize]=${perPage}`)
                .then((res) => {
                    // console.log(res.data)
                    //POSTVALUE PARA FORMAR UM ARRAY COM OS DADOS QUE PRECISA
                    const postValue = [];
                    //PERCORRENDO TODO O ARRAY PARA MONTAR UM OUTRO
                    Object.entries(res.data.data).map(([keyRes, valRes], i) => (
                        Object.entries(valRes.attributes.users_permissions_user.data.attributes.institutions.data).map(([keyRes, valinst], i) => (
                            // console.log(valinst.attributes.name)
                             postValue.push(
                                {
                                    name: valRes.attributes.users_permissions_user.data.attributes['alias_users'],
                                    content: valRes.attributes.content,
                                    datePost: valRes.attributes.createdAt,
                                    file: valRes.attributes.file.data.attributes.url,
                                    institutions: valinst.attributes.name
                                }
                            )     
                        ))
                    ));
                    //PEGANDO OS DADOS ATUAIS E INSETINDO NOVOS DADOS
                    setPost((prevPosts) => [...prevPosts, ...postValue])
                })
                .catch((err) => {
                    console.log({ err })
                })
        }
        getPost();
    }, [currentPage])

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            console.log('Sentinela appears!', currentPage + 1)
            setCurrentPage((currentValue) => currentValue + 1);
          }         
        })
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
    }, []);

    return (
        <Grid item xs={12} md={12} lg={12}>
            <MDBox id="sentinelaTop"></MDBox>
            <MDBox mb={0.5}>                
                {post.length > 0 ? (
                    Object.entries(post).map(([key, val], i) => (
                        // console.log(val)
                        <PostContent
                            key={i}
                            user={val.name}
                            content={val.content}
                            dtPost={val.datePost}
                            file={val.file}
                            insti={val.institutions}
                        />
                    ))
                ): null}
                <MDBox id="sentinela"></MDBox>
            </MDBox>
        </Grid>
    );
}
