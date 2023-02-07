import react, {useState, useContext, useEffect} from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ShareIcon from '@mui/icons-material/Share';
import MDBox from 'components/MDBox';
import MDAvatar from 'components/MDAvatar';
import burceMars from "assets/images/bruce-mars.jpg";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
//CUSTOM CONTEXT
import { AuthContext } from "context/AuthContext";
import { api } from 'services/Api';

export default function FormPost(props) {
  const [valuePost, setValuePost] = useState();
  const { user, setUser} = useContext(AuthContext);
  const { token, setToken } = useContext(AuthContext);
  const [ envioDeDados, setEnvioDeDados] = useState(false)

  const sendPost = async () => {
    // console.log({valuePost})
    
    api.defaults.headers.Authorization = `Bearer ${token}`;
    const dataP = await api.post('posts', {
      data: {
        content: valuePost,
        users_permissions_users: user.id
      }
    })
    console.log(dataP.status)
    if(dataP.status == 200) {
      window.location.reload();
    }
    // console.log({dataP})
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    console.log(sessionStorage.getItem("token"))
  }, [])

  function upGetPosts(){
    console.log(props)
  }

  return (
    <Card>
      <MDBox component="li" display="flex" alignItems="center" p={2}>
        <MDBox ml={1}>
          <MDAvatar src={burceMars} alt="something here" shadow="md" />
        </MDBox>
        <MDBox display="flex" flexDirection="inherit" alignItems="flex-start" sx={{  width: '-webkit-fill-available' }}>
          <MDInput
            value={valuePost}
            sx={{ ml: 1, flex: 1}}
            fullWidth
            multiline
            onChange={(e) => setValuePost(e.target.value)}
            placeholder="Publique algo"
            rows={5}
          />
        </MDBox>       
      </MDBox>
      <CardActions disableSpacing>
        <IconButton aria-label="Anexar Imagem">
          <AttachFileIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <MDBox ml="auto">
          <MDButton
            variant="gradient"
            color="secondary"
            onClick={sendPost}
          >Publicar</MDButton>
        </MDBox>
      </CardActions>
    </Card>
  );
}