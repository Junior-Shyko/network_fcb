import { useQuery } from "react-query";
import { api } from "services/Api";

const getPostQuery = async(postId) => {
  // console.log('getPostQuery' , postId)
  const { data } = await api.get('posts/'+postId+'?populate=*')
  console.log(data)
  return data
}

export default function usePost(postId) {
  return useQuery(["posts", postId], () => getPostQuery(postId));
}
