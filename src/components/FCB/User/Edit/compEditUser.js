import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";


function CompEditUser(props) {
    // console.log(props.preData)
    // console.log('props.preData.batized', props.preData.batized)
    const [ batized, setBatized ] = useState(props.preData.batized)


    const { control, handleSubmit } = useForm({
        defaultValues: props.preData
    });

    const handleChange = (event) => {
        setBatized(event.target.value);
      };
      
    useEffect(() =>{
        if(batized) {
            setBatized(1)
        }else{
            setBatized(0)
        }
    }, [])  

    const onSubmit = data => {
        delete data['batized'];
        console.log(data)
        data['batized'] = batized;
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
                    <FormControl sx={{ mt: 1}} fullWidth>
                    <InputLabel id="id-label-batized" sx={{marginLeft: '-12px'}}>Batizado</InputLabel>
                    <Controller
                        name="batized"
                        control={control}               
                        render={({ field }) => <Select
                                                labelId="id-label-batized"
                                                {...field}
                                                label="Batizado"
                                                id="id-select-batized"
                                                variant="standard"
                                                value={1}
                                                // defaultValue={1}
                                                onChange={handleChange}
                                               
                                                fullWidth >
                                                    <MenuItem value={0}>Não</MenuItem>
                                                    <MenuItem value={1}>Sim</MenuItem>
                                                </Select>}
                    />
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