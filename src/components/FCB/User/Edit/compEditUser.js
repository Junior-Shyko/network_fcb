import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

import optionsMaritalStatus from "components/FCB/Util/optionsMaritalStatus";
import {maritalStatus} from "components/FCB/Util/optionsMaritalStatus";


function CompEditUser(props) {
    // console.log(props.preData)
    // console.log('props.preData.batized', props.preData.batized)
    const [ batized, setBatized ] = useState(props.preData.batized)
    const [ infoBatized, setInfoBatized ] = useState('');
    const [ infoMarital, setInfoMarital ] = useState('Não');
    const [ maritalStatus, setMaritalStatus ] = useState('');

    const [ alterBatized, setAlterBatized ] = useState(false);
    const [ alterMarital, setAlterMarital ] = useState(false);
    const [open, setOpen] = useState(false);

    const { control, handleSubmit } = useForm({
        defaultValues: props.preData
    });

    const handleChange = (event) => {
        setBatized(event.target.value);
      };
      
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const handleMaritalStatus = (event) => {
        // setMaritalStatus(event)
        // console.log(event.target.value)
    }
    const showBatized = () => {
        setAlterBatized(true)
    }
    const showMarital = () => {
        setAlterMarital(true)
    }
    useEffect(() =>{
        if(batized) {
            setInfoBatized('Sim')
        }else{
            setInfoBatized('Não')
        }
        if(infoMarital)
        {
            setInfoMarital('Sim')
        }
          
    console.log({maritalStatus})
    }, [])  

    const onSubmit = data => {
        // delete data['batized'];
        console.log(data)
        // data['batized'] = batized;
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ data })
        // };
        // fetch('http://localhost:1337/api/users/' + props.preData.id, requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log({ data })
        //     });
    };

    return (
        <MDBox>
            
                <form onSubmit={handleSubmit(onSubmit)}>
                <MDBox p={2} mx={3} display="block">
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Nome" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="alias_users"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Conhecido como..." variant="standard" fullWidth />}
                    />
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Endereço" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="number"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Número" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="complement"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Complemento" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="district"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Bairro" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Cidade" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="state"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Estado" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="birthday"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Aniversário" variant="standard" fullWidth />}
                    />
                    <FormControl>
                        <Grid container>
                            <MDTypography variant="caption" color="text">
                            <MDTypography id="demo-row-radio-buttons-group-label" variant="caption" textTransform="capitalize">
                            Batizado: <strong> {infoBatized}</strong>
                            </MDTypography>&nbsp;&nbsp;&nbsp;
                            <MDButton variant="text" color="info" size="small" onClick={showBatized}>Alterar</MDButton>
                            </MDTypography>
                        </Grid>
                        <MDBox>
                        {alterBatized && (
                            <Controller
                            name="batized"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    label="Batizado"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                <TextField {...field} type="radio" name="batized" value={false} variant="standard"  /> 
                                <MDTypography  variant="button" ml={1} mr={2}>Não</MDTypography>
                                <TextField {...field} type="radio" name="batized" value={true}  variant="standard"  />
                                <MDTypography  variant="button" ml={1} mr={2}>Sim</MDTypography>                             
                            </RadioGroup>
                            ) }
                        />
                        )}
                        </MDBox>
                    </FormControl>
                    <FormControl>
                        <Grid container>
                            <MDTypography variant="caption" color="text">
                            <MDTypography id="demo-row-radio-buttons-group-label" variant="caption" textTransform="capitalize">
                            Casado(a): <strong> {infoMarital}</strong>
                            </MDTypography>&nbsp;&nbsp;&nbsp;
                            <MDButton variant="text" color="info" size="small" onClick={showMarital}>Alterar</MDButton>
                            </MDTypography>
                        </Grid>
                        <MDBox>
                        {alterMarital && (
                            <Controller
                            name="marital_status"
                            control={control}
                            render={({ field }) => (
                                <TextField 
                                    select 
                                    {...field}
                                    label="Selecione o estado civil"                                  
                                    variant="standard"
                                    fullWidth
                                    onChange={handleMaritalStatus}
                                >
                                    {maritalStatus()}
                                </TextField>
                            ) }
                        />
                        )}
                        </MDBox>
                    </FormControl>
                </MDBox>
                <MDBox item p={1} display="flex">
                    <MDBox mr={2}>
                        <Icon fontSize="large">perm_contact_calendar_icon</Icon>
                    </MDBox>
                    <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                        <MDTypography variant="button" fontWeight="medium">
                            Dados Contato
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDBox p={2} mx={3} display="block">
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Telefone" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField {...field} label="E-mail" variant="standard" fullWidth />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <TextField {...field} label="Senha" variant="standard" fullWidth />}
                    />
                </MDBox>
                <Divider />
                <Card component="li" display="flex" alignItems="center" py={1} mb={1}>
                <MDButton variant="gradient" color="info" type="submit">
                Salvar&nbsp;
                <Icon fontSize="medium">save</Icon>
            </MDButton>
                </Card>
                </form>
        </MDBox>
    )
}

export default CompEditUser;