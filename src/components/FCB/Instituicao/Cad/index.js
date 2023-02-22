import { useState } from "react";

import PageLayout from "examples/LayoutContainers/PageLayout";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// Material Dashboard 2 React Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

//COMPONENT CUSTOM
import FormCadInstitution from "./formCad";
import FormInstitution from "./formInstitution";
//style css
import "./cad.css";
import "animate.css";

function Instituicao() {

  const [phone, setPhone] = useState("");
  const [verifyPass, setVerifyPass] = useState(false);
  const [showCadUserInstitution, setShowCadUserInstitution] = useState(true);
  const [showInstituition, setShowInstituition] = useState(false);
  const [open, setOpen] = useState(false);
  const [userCad, setUserCad] = useState([])

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

  function stepCadIns(success, user) {
    if(success) {
      handleToggle()
      setUserCad(user)
    }else{
      handleClose()
    }
  }

  return (
    <PageLayout>
      <Container>
        <Grid container>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
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
                {/* <MDButton
                  type="submit"
                  color="secondary"
                  fullWidth
                  onClick={showPri}
                >
                  show
                </MDButton> */}

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
                  <FormInstitution idUser={userCad} />
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
          <Grid item sm={2}></Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
}

export default Instituicao;
