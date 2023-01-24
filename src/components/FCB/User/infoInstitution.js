import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function InfoInstitution(props) {
    return (
        <MDBox>
            {/* {  props.institution.map((el, indice) => {
                return (
                <MDBox  mb={1} lineHeight={0} key={indice}>
                    <Grid  container>
                        <MDTypography variant="caption" color="text" mt={1}  ml={2}>
                            <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                            Nome:
                            </MDTypography>&nbsp;&nbsp;&nbsp;
                            {el.name}
                        </MDTypography>
                    </Grid>
                    <Grid  container>
                        <MDTypography variant="caption" color="text" mt={1}  ml={2}>
                            <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                            CNPJ:
                            </MDTypography>&nbsp;&nbsp;&nbsp;
                            {el.cnpj}
                        </MDTypography>
                    </Grid>
                    <Grid  container>
                        <MDTypography variant="caption" color="text" mt={1}  ml={2}>
                            <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                            Endereço completo:
                            </MDTypography>&nbsp;&nbsp;&nbsp;
                            {el.address} , {el.number} , {el.complement} , {el.district} , 
                            {el.city} , {el.state}.
                        </MDTypography>
                    </Grid>
                </MDBox>
                )
            })} */}
        </MDBox>
    )
}

export default InfoInstitution;