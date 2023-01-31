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
            await api.get('posts?populate=*')
                .then((res) => {
                    console.log({ res })
                    setPost(res.data.data)
                })
                .catch((err) => {
                    console.log({ err })
                })
        }
        console.log(typeof post)
        getPost();
    }, [])


    return (
        <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={0.5}>
            {Object.entries(post).map(([key, val], i) => (
                        // <p key={i}>
                        //     {key}: {post[key].attributes.content}
                        // </p>
                        <PostContent />
                    ))}
            </MDBox>
        </Grid>
    );
}
