import React from 'react';
import CardMedia from "@mui/material/CardMedia";

import { urlBaseApiUpload } from 'services/Api';

function Media(props) {
  return (
    <CardMedia
      component="img"
      height="194"
      image={urlBaseApiUpload + props.post.attributes.url}
    />
  );
}

export default Media;

