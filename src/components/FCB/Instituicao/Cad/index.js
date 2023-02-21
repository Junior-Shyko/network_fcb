import {useState} from "react";
import { useForm } from "react-hook-form";

import Icon from "@mui/material/Icon";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
// Material Dashboard 2 React Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
//COMPONENT CUSTOM
import PhoneCuston from "components/FCB/Util/PhoneCuston";
//style css
import "./cad.css";
import { api } from "services/Api";

function Instituicao() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [phone, setPhone] = useState("");
    const [verifyPass, setVerifyPass] = useState(false)

    const onPhoneChange = (e: any) => setPhone(e.target.value);

    const onSubmit = data => {
        data['phone'] = phone
        data['username'] = data.alias
        data['birthday'] = '1984-11-05'
        if(data.password !== data.conf_pass) {
            console.log('senhas nao confere')
            setVerifyPass(true)
        }else{
            setVerifyPass(false)
        }
        console.log(data)
        api.post('auth/local/register', data)
        .then((res) => {
            console.log({res})
        })
        .catch((err) => {
            console.log({err})
        })
    };
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
                <form  onSubmit={handleSubmit(onSubmit)}>
                <MDBox                   
                    sx={{
                     mt: 2,
                     mb: 2,
                    }}
                >
                    <div>
                      <InputLabel htmlFor="name-complet">
                        Nome Completo
                      </InputLabel>
                      <Input
                        id="name-complet"
                        fullWidth
                        aria-invalid={errors.name ? "true" : "false"} 
                        {...register("name", {required: "O Nome completo é obrigatório"})}
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>person_icon</Icon>
                          </InputAdornment>
                        }
                      />
                      <FormHelperText className="Mui-error">{errors.name?.message}</FormHelperText>
                      <InputLabel htmlFor="alias_user" className="mt-label">
                       Como é conhecido ou apelido
                      </InputLabel>
                      <Input
                        id="alias_user"
                        fullWidth
                        {...register("alias")}
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>person_icon</Icon>
                          </InputAdornment>
                        }
                      />
                       <InputLabel htmlFor="email" className="mt-label">
                       E-mail
                       </InputLabel>
                      <Input
                        id="email"
                        fullWidth
                        {...register("email", {required: "O E-mail é", pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "O formato de e-mail está incorreto"
                          }})}
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>alternate_email_icon</Icon>
                          </InputAdornment>
                        }
                      />
                       <FormHelperText className="Mui-error">{errors.email?.message}</FormHelperText>
                       <InputLabel htmlFor="pass" className="mt-label">
                       Senha
                      </InputLabel>
                      <Input
                        id="pass"
                        fullWidth
                        {...register("password", {required: true})}
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>lock_icon</Icon>
                          </InputAdornment>
                        }
                      />
                       <InputLabel htmlFor="conf_pass" className="mt-label">
                       Confirmar Senha
                       </InputLabel>
                       <Input
                        id="conf_pass"
                        fullWidth
                        {...register("conf_pass", {required: true})}
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>lock_icon</Icon>
                          </InputAdornment>
                        }
                       />
                       <InputLabel htmlFor="phone" className="mt-label">
                       Celular ou Whatsapp
                       </InputLabel>
                       <Input
                        id="phone"
                        fullWidth
                        value={phone} 
                        onBlur={onPhoneChange}
                        inputComponent={PhoneCuston}
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>smartphone_icon</Icon>
                          </InputAdornment>
                        }
                       />
                    </div>
                  </MDBox>
                  {verifyPass && (
                    <MDAlert color="error" dismissible>
                        <Icon fontSize="small">thumb_up</Icon>&nbsp;
                        Senhas não confere</MDAlert>
                  )}
                  <MDButton
                    type="submit"
                    color="secondary"
                    fullWidth
                   
                  >Próximo</MDButton>
                  </form>
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
