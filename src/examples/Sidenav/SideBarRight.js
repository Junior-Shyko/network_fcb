import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MDButton from "components/MDButton";

function SideBarRight() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap'
                , marginTop: '10px' ,
                
                '& > :not(style)': {
                    m: 1,   
                    position: 'fixed'
                },
            }}

        >
            <Paper elevation={3} sx={{position: 'fixed'}} >
                <Card sx={{ minWidth: 275}}>
                    <CardContent>
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
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <MDButton variant="gradient" color="info">
                            Teste
                        </MDButton>
                    </CardActions>
                </Card>
            </Paper>
        </Box>
    )
}

export default SideBarRight