import React from 'react';
import CardMedia from "@mui/material/CardMedia";

import { urlBaseApiUpload } from 'services/Api';

function Media(props) {
  return (
    <CardMedia
      component="img"
      height="100"
      image={urlBaseApiUpload + props.post.data.data.attributes.file.data.attributes.url}
    />
  );
}

export default Media;

