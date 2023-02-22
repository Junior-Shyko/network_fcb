import {useState} from 'react';
import { useForm } from "react-hook-form";
import { api } from 'services/Api';
import InputMask from "react-input-mask"

import Icon from "@mui/material/Icon";
import Grid from '@mui/material/Grid';
import Input from "@mui/material/Input";
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
// Material Dashboard 2 React Components
import MDBox from "components/MDBox";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import { Container } from '@mui/system';

import ModalSuccess from './ModalSuccess';

import "./cad.css";

function FormInstitution(props) {
    console.log({props})
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    const [showModalSuccess , setShowModalSuccess] = useState(false)
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
     
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
          console.log(data);
          // register({ name: 'address', value: data.logradouro });
        //   setValue('address', data.logradouro);
        //   setValue('district', data.bairro);
        //   setValue('city', data.localidade);
        //   setCity(data.localidade)
        //   setUf(data.uf);
          // setValue('uf', data.uf);
          // setFocus('addressNumber');
        });
      }

    const onSubmit = (data) => {
        setShowModalSuccess(true)
        // console.log(props.idUser)
        // console.log({data})
        // data['user'] = props.idUser.id
        // const postInst = {
        //     data: data
        // }
        // api.post('institutions', postInst)
        // .then((res) => {
        //     console.log({res})
        // })
        // .catch((err) => {
        //     console.log({err})
        // })
    }
  return (
    <MDBox
        sx={{
            mt: 2,
            mb: 2,
        }}
        className="animate__animated animate__backInUp"
        >
        <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="institution">
            Nome da Instituição
        </InputLabel>
        <Input
            id="institution"
            fullWidth
            {...register("name", {
                required: "O nome da instituição deve ser preenchido.",
            })}
            startAdornment={
            <InputAdornment position="start">
                <Icon>business_icon</Icon>
            </InputAdornment>
            }
        />
        <FormHelperText className="Mui-error">
            {errors.name?.message}
        </FormHelperText>
        <Grid container spacing={2}>
            <Grid item xs={3}>
           
            <InputMask
            mask="99.999-999"
            disabled={false}
            maskChar=" "
            {...register("cep", { maxLength: 10})}
            onBlur={checkCEP}
          >
          {() =>
            <TextField
              type="text"
              label="CEP"
              ref="cep"
              name="cep"
              variant="standard"           
              fullWidth
              InputLabelProps={{ shrink: true }}     
            />
          }
          </InputMask>
            </Grid>
            <Grid item xs={7}>
            <InputLabel htmlFor="logradouro">
               Logradouro
            </InputLabel>
            <Input
                id="logradouro"
                fullWidth
                {...register("address", {
                    required: "O endereço é obrigatório.",
                }) }
                startAdornment={
                <InputAdornment position="start">
                    <Icon>location_on_icon</Icon>
                </InputAdornment>
                }
            />
            </Grid>
            <Grid item xs={2}>
                <InputLabel htmlFor="number">
                Número
                </InputLabel>
                <Input
                    id="number"
                    fullWidth
                    {...register("number", {
                        required: "Esse campo é obrigatório",
                    }) }
                    startAdornment={
                    <InputAdornment position="start">
                        <Icon>repeat_one_icon</Icon>
                    </InputAdornment>
                    }
                />
            </Grid>
            <Grid item xs={3}>
                <InputLabel htmlFor="complement">
                Complemento
                </InputLabel>
                <Input
                    id="complement"
                    fullWidth
                    {...register("complement") }
                    startAdornment={
                    <InputAdornment position="start">
                      <Icon>repeat_one_icon</Icon>
                    </InputAdornment>
                    }
                />
            </Grid>
            <Grid item xs={4}>
                <InputLabel htmlFor="district">
                Bairro
                </InputLabel>
                <Input
                    id="district"
                    fullWidth
                    {...register("district", {
                        required: "Esse campo é obrigatório",
                    }) }
                    startAdornment={
                    <InputAdornment position="start">
                        <Icon>location_on_icon</Icon>
                    </InputAdornment>
                    }
                />
            </Grid>
            <Grid item xs={3}>
                <InputLabel htmlFor="city">
                Cidade
                </InputLabel>
                <Input
                    id="city"
                    fullWidth
                    {...register("city", {
                        required: "Esse campo é obrigatório",
                    }) }
                    startAdornment={
                    <InputAdornment position="start">
                        <Icon>location_on_icon</Icon>
                    </InputAdornment>
                    }
                />
            </Grid>
            <Grid item xs={2}>
                <InputLabel htmlFor="state">
                Estado
                </InputLabel>
                <Input
                    id="state"
                    fullWidth
                    {...register("state", {
                        required: "Esse campo é obrigatório",
                    }) }
                    startAdornment={
                    <InputAdornment position="start">
                        <Icon>location_on_icon</Icon>
                    </InputAdornment>
                    }
                />
            </Grid>
           <Container>
              <MDButton
                type="submit"
                color="success"
                fullWidth
                variant="gradient"
                sx={{margin: '10px'}}
              >
                Finalizar cadastro
              </MDButton>
           </Container>
        </Grid>
        </form>
        {showModalSuccess > 0 && (
            <ModalSuccess open={true}/>
        )}
    </MDBox>
  );
}

export default FormInstitution;