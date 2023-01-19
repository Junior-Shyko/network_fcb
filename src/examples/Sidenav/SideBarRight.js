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
        <Box sx={{ marginTop: '70px', position: 'fixed', maxHeight: 800, overflow: 'auto'}}>
            <Card sx={{maxWidth: '350px'}}>
                <CardMedia
                    sx={{ height: 300 }}
                    image="https://d2r9epyceweg5n.cloudfront.net/stores/002/363/568/products/whatsapp-image-2022-08-24-at-17-36-361-dd505a7bf0ce039a3016613752127470-1024-1024.jpeg"
                    title="green iguana"
                />
                <CardContent sx={{textAlign: 'center'}}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Card de informações
                    </Typography>
                    <Typography variant="h5" component="div">
                        Grupo de Convívio
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        Se você está gostando desse projeto seja um doador para o desenvolvimento da 
                        aplicação não parar.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <MDButton variant="gradient" color="info" fullWidth>
                        Quero ajudar no projeto
                    </MDButton>
                </CardActions>
            </Card>
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ marginTop: '10px' }}>
                <OrdersOverview />
                </Box>
              
            </Grid>
        </Box>
    )
}

export default SideBarRight