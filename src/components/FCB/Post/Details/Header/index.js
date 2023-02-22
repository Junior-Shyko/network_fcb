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
    const dateToFormat = props.datePost;

  return (
    <CardHeader
        avatar={
        <AccountCircleIcon fontSize="large" color="inherit"/>
        }
        action={
        <IconButton aria-label="settings">
            <MoreVertIcon />
        </IconButton>
        }
        title={props.user?.attributes.alias_users}
        subheader={<Moment locale="pt-br">{dateToFormat}</Moment>}
    />
  );
}

export default Header;