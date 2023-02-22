import {useState} from 'react';
import { useForm } from "react-hook-form";
import { api } from 'services/Api';

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Icon from "@mui/material/Icon";
import FormHelperText from "@mui/material/FormHelperText";
// Material Dashboard 2 React Components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
//COMPONENT CUSTOM
import PhoneCuston from "components/FCB/Util/PhoneCuston";

import "./cad.css";

function FormCadInstitution(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
  const [phone, setPhone] = useState("");
  const [verifyPass, setVerifyPass] = useState(false);
  
  const onPhoneChange = (e: any) => setPhone(e.target.value);

  const onSubmit = (data) => {
    data['phone'] = phone
    data['username'] = data.alias
    data['birthday'] = '1984-11-05'
    if(data.password !== data.conf_pass) {
        console.log('senhas nao confere')
        setVerifyPass(true)
        return false;
    }else{
        setVerifyPass(false)
        // api.post('auth/local/register', data)
        // .then((res) => {
        //     console.log({res})
        //     props.stepCadIns(true, res.data.user)
        // })
        // .catch((err) => {
        //     console.log({err})
        // })
        let user = {
            id: 38,
            name: 'junior'
        }
        props.stepCadIns(true,user)
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register("name", {
            required: "O Nome completo é obrigatório",
          })}
          startAdornment={
            <InputAdornment position="start">
              <Icon>person_icon</Icon>
            </InputAdornment>
          }
        />
        <FormHelperText className="Mui-error">
          {errors.name?.message}
        </FormHelperText>
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
          {...register("email", {
            required: "O E-mail é",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "O formato de e-mail está incorreto",
            },
          })}
          startAdornment={
            <InputAdornment position="start">
              <Icon>alternate_email_icon</Icon>
            </InputAdornment>
          }
        />
        <FormHelperText className="Mui-error">
          {errors.email?.message}
        </FormHelperText>
        <InputLabel htmlFor="pass" className="mt-label">
          Senha
        </InputLabel>
        <Input
          id="pass"
          fullWidth
          {...register("password", { required: true })}
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
          {...register("conf_pass", { required: true })}
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
        {verifyPass && (
          <MDAlert color="error" dismissible>
            <Icon fontSize="small">thumb_up</Icon>&nbsp; Senhas
            não confere
          </MDAlert>
        )}
        <MDButton type="submit" color="secondary" fullWidth>
          Próximo
        </MDButton>
      </div>
    </MDBox>
  </form>
  );
}

export default FormCadInstitution;