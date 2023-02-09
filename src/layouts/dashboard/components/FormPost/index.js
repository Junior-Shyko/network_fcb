import {useState, useContext, useEffect, useRef} from 'react';
import { useSnackbar } from 'notistack';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import ShareIcon from '@mui/icons-material/Share';
import burceMars from "assets/images/bruce-mars.jpg";
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
  const [ filePost, setFilePost] = useState()
  const timer = useRef();
  const { enqueueSnackbar }  = useSnackbar();


  const sendPost = async () => {
    //UPLOAD SÓ É ENVIANDO JUNTO COM OS DADOS SE FOR COM FORMDATA
    /**
     * https://docs.strapi.io/developer-docs/latest/plugins/upload.html#examples
     */
    const data = {};
   
    //CORPO DE ENVIO DE DADOS
    const dataPostUp =  {
      content: valuePost,
      users_permissions_users: user.id
    }
    //CONF DAS HEADERS
    const axiosConfig = {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }

    var dataSend = [];
    if(filePost) {
      const formData = new FormData();
       //PARA ENVIO, OS ARQUIVOS DE MIDIA DEVE VIM PREFIXADO COM (FILES), + NOME DO CAMPO
      formData.append(`files.file`, filePost, filePost.name);
      formData.append('data', JSON.stringify(dataPostUp));
      //add multipart/form-data para o envio de arquivos
      api.defaults.headers.common['Content-Type'] = 'multipart/form-data';
      dataSend = formData
    }else{      
      //ADD NO SCOPO data: {}
      dataSend = {
        data: dataPostUp
      }
    }
    //enviando
    await api.post('posts', dataSend, axiosConfig )
    .then((res) => {
      window.location.reload();
      enqueueSnackbar('Sucesso! Post Publicado',{ 
          autoHideDuration: 2000,
          variant: 'success',
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'bottom'
          }
      });      
    })
    .catch((err) => {
      enqueueSnackbar('Ops! Ocorreu um erro inesperado',{ 
        autoHideDuration: 2000,
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        }
    });
    })    
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
  }, [])

  function handleFile(event) {
    setFilePost(event.target.files[0])
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
      {filePost && (
        <MDBox display="flex" flexDirection="row" p={2}>
          <Alert severity="success"  fullWidth>Arquivo anexado</Alert>
        </MDBox>
      )}
      <CardActions disableSpacing>
        <form>
        <IconButton color="secondary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" onChange={handleFile} name="file" />
          <PhotoCamera />
        </IconButton>
        </form>
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