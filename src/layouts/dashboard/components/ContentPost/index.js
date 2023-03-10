// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Divider from "@mui/material/Divider";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function ContentPost() {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={0.5}>
                <Card sx={{ height: "100%" }}>
                    <MDBox padding="1rem">
                        <MDBox
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                        >
                            <AccountCircleIcon />
                            <MDTypography variant="h6" textTransform="capitalize" sx={{ marginLeft: '5px' }} >
                                João Paulo
                            </MDTypography>
                            <MDTypography variant="caption" fontWeight="light" textTransform="capitalize" sx={{ marginLeft: '5px' }}>
                                - Igreja Assembléia de Deus - Ministério Madureira
                            </MDTypography>
                        </MDBox>
                        <MDTypography component="div" variant="button" color="text" fontWeight="light">
                            Lorem ipsum phasellus malesuada lorem urna lobortis nibh dictumst, semper mauris elit varius himenaeos nam sit porttitor, tempus
                            volutpat dolor enim eget placerat torquent. eleifend ipsum sit ultricies etiam at sit aliquam
                        </MDTypography>
                        <Divider />
                        <Grid item xs={12} md={12} lg={12}>
                            <IconButton aria-label="like" color="info" sx={{ fontSize: '18px' }}>
                                <ThumbUpIcon />
                                <MDTypography
                                    variant="inherit"
                                    fontWeight="light"
                                    sx={{ marginLeft: '3px' }}
                                > 894.987 </MDTypography>
                            </IconButton>
                            <IconButton aria-label="deslike" color="info" sx={{ fontSize: '18px' }} >
                                <ThumbDownAltIcon />
                            </IconButton>
                        </Grid>
                    </MDBox>
                </Card>
            </MDBox>
        </Grid>
    )
}