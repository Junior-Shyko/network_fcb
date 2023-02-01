import * as React from 'react';
// @mui material components
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDButton from "components/MDButton";

import OrdersOverview from "../../layouts/dashboard/components/OrdersOverview";

function SideBarRight() {
    return (
        <Box sx={{ marginTop: '70px', position: 'fixed', maxHeight: 800, overflow: 'auto', borderRadius: '18px',}}>
            
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ marginTop: '10px', maxWidth: '250px' }}>
                <OrdersOverview />
                </Box>
              
            </Grid>
        </Box>
    )
}

export default SideBarRight