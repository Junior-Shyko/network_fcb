import { useForm,Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

function CompEditUser(props) {
    console.log(props.preData.id)
    const { control, handleSubmit } = useForm({
        defaultValues: props.preData
      });

      const onSubmit = data => {
        console.log(data)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data})
        };
        fetch('http://localhost:1337/api/users/'+props.preData.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log({data})
            });
      };

    return (
        <MDBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                name="username"
                control={control}
                render={({ field }) => <TextField {...field} label="Nome" variant="standard" fullWidth/>}
                />
                <Controller
                name="alias_users"
                control={control}
                render={({ field }) => <TextField {...field} label="Conhecido como..." variant="standard" fullWidth/>}
                />
                <Controller
                name="address"
                control={control}
                render={({ field }) => <TextField {...field} label="Endereço" variant="standard" fullWidth/>}
                />
                <Controller
                name="number"
                control={control}
                render={({ field }) => <TextField {...field} label="Número" variant="standard" fullWidth/>}
                />
                <Controller
                name="complement"
                control={control}
                render={({ field }) => <TextField {...field} label="Complemento" variant="standard" fullWidth/>}
                />
                <Controller
                name="district"
                control={control}
                render={({ field }) => <TextField {...field} label="Bairro" variant="standard" fullWidth/>}
                />
                <Controller
                name="city"
                control={control}
                render={({ field }) => <TextField {...field} label="Cidade" variant="standard" fullWidth/>}
                />
                <Controller
                name="state"
                control={control}
                render={({ field }) => <TextField {...field} label="Estado" variant="standard" fullWidth/>}
                />
                
            <MDButton type="submit" variant="gradient" color='info' fullWidth sx={{marginTop: '5px'}}> Salvar </MDButton>
            </form>
        </MDBox>
    )
}

export default CompEditUser;