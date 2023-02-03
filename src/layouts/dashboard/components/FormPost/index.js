import * as React from 'react';
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

export default function FormPost() {
  return (
    <Card>
      <MDBox component="li" display="flex" alignItems="center" py={1}>
        <MDBox ml={1}>
          <MDAvatar src={burceMars} alt="something here" shadow="md" />
        </MDBox>
        <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Publique algo"
          />
        </MDBox>
        <MDBox ml="auto">
          <IconButton aria-label="directions">
            <SendIcon />
          </IconButton>
        </MDBox>
      </MDBox>
      <CardActions disableSpacing>
        <IconButton aria-label="Anexar Imagem">
          <AttachFileIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}