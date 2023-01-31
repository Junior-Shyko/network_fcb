import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';

import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NativeSelect from '@mui/material/NativeSelect';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

import optionsMaritalStatus from "components/FCB/Util/optionsMaritalStatus";
import TitleSummerAccordion from "./TitleSummerAccordion";
import stateBr from "components/FCB/Util/StateBr";
import { api } from "services/Api";

function CompEditUser(props) {
    // console.log(props.preData)
    // console.log('props.preData.batized', props.preData.batized)
    const [batized, setBatized] = useState(props.preData.batized)
    const [infoBatized, setInfoBatized] = useState('');
    const [infoState, setInfoState] = useState(props.preData.state);
    const [maritalStatus, setMaritalStatus] = useState(props.preData.marital_status);
    const { enqueueSnackbar }  = useSnackbar();
    const { control, handleSubmit } = useForm({
        defaultValues: props.preData
    });

    // const handleMaritalStatus = (event) => {
    //     // setMaritalStatus(event)
    //     // console.log(event.target.value)
    // }

    useEffect(() => {
        if (batized) {
            setInfoBatized('Sim')
        } else {
            setInfoBatized('Não')
        }
    }, [])

    const onSubmit = data => {
        // se não tiver alteração de senha
        if(data['password'] == undefined) {
            delete data['password'];
        }
        console.log(data)
      
        api.put('users/' + props.preData.id, data)
        .then((res) => {
            console.log({res})
            enqueueSnackbar('Sucesso! Registro alterado',{ 
                autoHideDuration: 4000,
                variant: 'success',
                anchorOrigin: {
                  horizontal: 'center',
                  vertical: 'bottom'
                }
              });
        })
        .catch((err) => {
            console.log({err})
        })

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
                <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Estado:
                </InputLabel>
                <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                        <NativeSelect
                            {...field}
                            inputProps={{
                            name: 'state',
                            id: 'uncontrolled-native',
                            }}
                            variant="standard"
                            // value={infoState}
                        >
                            {
                            stateBr.map((el, index) => (
                                <option key={index} value={el.value}>{el.label}</option> 
                            )
                            )}
                        </NativeSelect>
                    )}
                    
                />
                </FormControl>
                
                <Controller
                    name="birthday"
                    control={control}
                    render={({ field }) => <TextField {...field} label="Aniversário" variant="standard" fullWidth />}
                />
                <Divider />
                <FormControl sx={{marginTop: '8px'}} fullWidth>
                  <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <TitleSummerAccordion  label="Estado Civil" value={maritalStatus}/>
                    </AccordionSummary>
                    <AccordionDetails>
                    <FormControl fullWidth>
                        <InputLabel variant="standard">
                            Selecione um estado civil
                        </InputLabel>
                        <Controller
                            name="marital_status"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    label="Selecione o estado civil"
                                    variant="standard"
                                    fullWidth
                                >
                                    {optionsMaritalStatus.map((make, index) => (
                                        <MenuItem key={index} value={make.value}>{make.label}</MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                        </FormControl>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <TitleSummerAccordion  label="Batizado" value={infoBatized}/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl> 
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
                                    <MDTypography fullWidth variant="button" mr={2}
                                        fontWeight="medium">Alterar para: </MDTypography>
                                    <TextField {...field} type="radio" name="batized" value={false} variant="standard" />
                                    <MDTypography variant="button" ml={1} mr={2}>Não</MDTypography>
                                    <TextField {...field} type="radio" name="batized" value={true} variant="standard" />
                                    <MDTypography variant="button" ml={1} mr={2}>Sim</MDTypography>
                                </RadioGroup>
                                )}
                            />
                        </FormControl>
                    </AccordionDetails>
                  </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                          <TitleSummerAccordion  label="Sexo" value={props.preData.sex}/>
                        </AccordionSummary>
                        <AccordionDetails>
                        <FormControl> 
                            <Controller
                                name="sex"
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup
                                        label="Sexo"
                                        row
                                        name="row-radio-buttons-group-sex"
                                    >
                                        <MDTypography fullWidth variant="button" mr={2}
                                            fontWeight="medium">Alterar para: </MDTypography>
                                        <TextField {...field} type="radio" name="sex" value="Masculino" variant="standard" />
                                        <MDTypography variant="button" ml={1} mr={2}>Masc.</MDTypography>
                                        <TextField {...field} type="radio" name="sex" value="Feminino" variant="standard" />
                                        <MDTypography variant="button" ml={1} mr={2}>Femi.</MDTypography>
                                    </RadioGroup>
                                )}
                            />
                        </FormControl>
                    </AccordionDetails>
                    </Accordion>
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