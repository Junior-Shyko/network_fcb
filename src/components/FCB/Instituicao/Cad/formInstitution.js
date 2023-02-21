import React from 'react';
import { useForm } from "react-hook-form";
import { api } from 'services/Api';

import Icon from "@mui/material/Icon";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from '@mui/material/Grid';
// Material Dashboard 2 React Components
import MDBox from "components/MDBox";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import { Container } from '@mui/system';

import "./cad.css";

function FormInstitution(props) {
    console.log({props})
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(props.idUser)
        console.log({data})
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
            <Grid item xs={2}>
            <InputLabel htmlFor="CEP">
               CEP
            </InputLabel>
            <Input
                id="CEP"
                fullWidth
                {...register("cep") }
                startAdornment={
                <InputAdornment position="start">
                    <Icon>filter9_plus_icon</Icon>
                </InputAdornment>
                }
            />
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
            <Grid item xs={3}>
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
    </MDBox>
  );
}

export default FormInstitution;