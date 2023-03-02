import { useQuery } from "react-query";
import { api } from "services/Api";

const getUsersLikesPost = async(postId) => {
    // console.log('getPostQuery' , postId)
    const { data } = await api.get('likes?populate=users_permissions_users&filters[post][id][$eq]='+postId)
    console.log(data)
    return data
  }
  
  export default function useUserLikesPost(postId) {
    return useQuery(["likes", postId], () => getUsersLikesPost(postId));
  }