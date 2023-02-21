import { useEffect, useState } from "react";


import Icon from "@mui/material/Icon";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// Material Dashboard 2 React Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
//COMPONENT CUSTOM
import PhoneCuston from "components/FCB/Util/PhoneCuston";
import FormCadInstitution from "./formCad";
//style css
import "./cad.css";
import "animate.css";
import { api } from "services/Api";

function Instituicao() {

  const [phone, setPhone] = useState("");
  const [verifyPass, setVerifyPass] = useState(false);
  const [showCadUserInstitution, setShowCadUserInstitution] = useState(true);
  const [showInstituition, setShowInstituition] = useState(false);
  const [open, setOpen] = useState(false);

  const showPri = () => {
    console.log("showPri");
    setShowInstituition(false);
    setShowCadUserInstitution(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen(false);
      setShowInstituition(true);
      setShowCadUserInstitution(false);
    }, 1000);
  };

  function stepCadIns(success) {
    if(success) {
      handleToggle()
    }else{
      handleClose()
    }
  }

  return (
    <PageLayout>
      <Container>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Grid item sx={{ width: "100%" }}>
              <MDBox
                color="info"
                bgColor="white"
                variant="gradient"
                borderRadius="lg"
                shadow="lg"
                opacity={1}
                p={2}
                mt={5}
              >
                <img
                  className="image-cad"
                  src={
                    "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F05%2F11%2F07%2FWDL-Logo-3935_10551_035635661_1757781196.jpg"
                  }
                />
                <MDBox>
                  <MDTypography variant="h2" className="text-center">
                    A Família Campo de Boaz
                  </MDTypography>
                </MDBox>
                <MDBox className="text-center">
                  <MDTypography variant="body2">
                    quer conhecer um pouco mais sobre você e contamos com você e
                    sua instituição, então, preencha todas as informações
                    corretas. Vamos lá!!!
                  </MDTypography>
                </MDBox>
                {showCadUserInstitution && (
                 <FormCadInstitution stepCadIns={stepCadIns}/>
                )}
                <MDButton
                  type="submit"
                  color="secondary"
                  fullWidth
                  onClick={showPri}
                >
                  show
                </MDButton>

                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>

                {showInstituition && (
                  <MDBox
                    sx={{
                      mt: 2,
                      mb: 2,
                    }}
                    className="animate__animated animate__backInUp"
                  >
                    <InputLabel htmlFor="institution">
                      Nome da Instituição
                    </InputLabel>
                    <Input
                      id="institution"
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          <Icon>person_icon</Icon>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText className="Mui-error">
                     Ocorreu um erro inesperado
                    </FormHelperText>
                  </MDBox>
                )}
              </MDBox>
            </Grid>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Já possui um cadastro?{" "}
                <MDTypography
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Fazer login
                </MDTypography>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
}

export default Instituicao;
