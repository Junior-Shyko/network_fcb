import react, {useState, useContext, useEffect, useRef} from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ShareIcon from '@mui/icons-material/Share';
import burceMars from "assets/images/bruce-mars.jpg";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MDBox from 'components/MDBox';
import MDAvatar from 'components/MDAvatar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

//CUSTOM CONTEXT
import { AuthContext } from "context/AuthContext";
import { api } from 'services/Api';

export default function FormPost(props) {
  const [valuePost, setValuePost] = useState();
  const { user, setUser} = useContext(AuthContext);
  const { token, setToken } = useContext(AuthContext);
  const [ file, setFile] = useState()
  const timer = useRef();



  const sendPost = async () => {
    // console.log({valuePost})
    // const form = document.querySelector('form');
    // const data = {};
    // const formData = new FormData();
    
    // console.log(form.elements)
    // // Array.from(form.elements).forEach((input) => {
    // //   console.log(input);
    // // });
    // Array.from(form.elements).forEach(({ name, type, value, files, ...element }) => {
    //   if (!['submit', 'file'].includes(type)) {
    //     data[name] = value;
    //   } else if (type === 'file') {
    //     console.log({files})
    //     // files.forEach((file) => {
    //     //   formData.append(`files.${name}`, file, file.name);
    //     // });
    //   }
    // });
      

    api.defaults.headers.Authorization = `Bearer ${token}`;
    // api.defaults.headers.Content-Type
    const dataP = await api.post('posts', {
      headers: {
          'Content-Type': 'application/json'
      }
    }, {
      data: {
        content: valuePost,
        users_permissions_users: user.id,
        file: file
      }
    })
    .then((res) => {
      console.log(res)
      console.log({file})
      // api.post('upload', {
      //   data: {
      //     files: file,
      //     ref: 'api::post.post',
      //     refId: res.data.data.id,
      //     field: 'file'
      //   }
      // })
    })
    .catch((err) => {
      console.log({err})
    })
   
  
    // if(dataP.status == 200) {
    //   // window.location.reload();
    //   console.log(dataP.data)
     
    // }
   
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    console.log(sessionStorage.getItem("token"))
  }, [])


  function handleFile(event) {
    console.log(event)
    setFile(event.target.files[0])
    // if(event.target.value) {
      
    //   timer.current = window.setTimeout(() => {
    //     // setSuccess(true);
    //     // setLoading(false);
    //     setFile('Arquivo Anexado')
    //   }, 2000);    
    // }
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
      {file && (
        <MDBox display="flex" flexDirection="row" p={2}>
          <Alert severity="success"  fullWidth>Arquivo anexado</Alert>
        </MDBox>
      )}
      <CardActions disableSpacing>
       
        {/* <IconButton aria-label="Anexar Imagem">
          <AttachFileIcon />
        </IconButton> */} 
        {/* <form>
        <input type="text" name="cover" />
        <input accept="image/*" type="file" onChange={handleFile} name="file" /> */}
        <IconButton color="secondary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" onChange={handleFile} name="file" />
          <PhotoCamera />
        </IconButton>
        {/* </form> */}
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