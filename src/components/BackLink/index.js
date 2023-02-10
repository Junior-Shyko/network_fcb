import React from 'react';
import { useNavigate } from "react-router-dom";
// import { Container } from './styles';
import MDBox from "components/MDBox";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackLink() {
  const navigate = useNavigate();

  return (
    <MDBox
      mb={1}
      py={1}
      px={1}
      bgColor="white"
      borderRadius="lg"
      coloredShadow="dark"         
    >      
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon fontSize="medium"/>
      </IconButton>
    </MDBox>
  );
}

export default BackLink;