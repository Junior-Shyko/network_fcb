import React from 'react';
import CardMedia from "@mui/material/CardMedia";
// import { Container } from './styles';

function Media(props) {
  return (
    <CardMedia
        sx={{ height: 500}}
        image={props.image}
    />
  );
}

export default Media;

