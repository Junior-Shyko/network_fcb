import React from 'react';
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment/locale/pt-br";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
// import { Container } from './styles';
Moment.globalLocale = 'pt-br'
function Header(props) {
 if (props.datePost.isLoading) return 'Lendo Header...'
 
  if (props.datePost.error) return 'An error has occurred: ' + props.datePost.error.message

  const dateToFormat = props.datePost.data.attributes.createdAt;

  return (
    <>
     {
        Object.entries(props.datePost.data.attributes.users_permissions_users.data).map(([keyRes, valRes], i) => (
          <CardHeader
              key={i}
              avatar={
              <AccountCircleIcon fontSize="large" color="inherit"/>
              }
              action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
              }
            
              title={valRes.attributes.alias_users}
              subheader={<Moment locale="pt-br">{dateToFormat}</Moment>}
          />
        ))   
      }
    </>
    
  );
}

export default Header;