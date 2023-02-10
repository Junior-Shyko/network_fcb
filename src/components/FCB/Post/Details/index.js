import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { api } from 'services/Api';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import { Container } from './styles';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import BackLink from 'components/BackLink';

function Details() {

  return (
    <DashboardLayout>
      <DashboardNavbar />       
      <Card  sx={{marginTop: '80px'}}>
        <BackLink />
        <CardHeader
          avatar={
            <AccountCircleIcon fontSize="large" color="inherit"/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          sx={{ height: 300 }}
          image="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/product-1-min.a4c2bc133076d3b7c517.jpg"
          title="green iguana"
        />
        <CardContent>
          <MDTypography
            component="div"
            variant="subtitle1"
            color="dark"
            fontWeight="regular"
          >
            This impressive paella is a perfect party dish and a fun meal to
             cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </MDTypography>
        </CardContent>
        <Divider />
        <CardContent>
          <MDTypography
            component="div"
            variant="button"
            color="dark"
            fontWeight="regular"
          >
            <strong>25</strong> Curtidas
          </MDTypography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="Curti a postagem">
            <ThumbUpOffAltIcon />
          </IconButton>
          <IconButton aria-label="Amei a postagem">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Compartilhar">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Divider />
        
        <CardContent  sx={{maxHeight: '200px', overflow: 'scroll'}}>
        <MDTypography
            component="div"
            variant="button"
            color="dark"
            fontWeight="regular"
          >
            Pessoas que curtiram
          </MDTypography>
          <MDTypography
            component="div"
            variant="subtitle1"
            color="dark"
            fontWeight="regular"
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </MDTypography>
        </CardContent>
      </Card>

    </DashboardLayout>
  );
}

export default Details;