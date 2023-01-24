import TextField from '@mui/material/TextField';

function CompEditUser(props) {
 
    const alterEdit = (e) =>{
        
        console.log(e.target.name)
        console.log(e.target.value)
    }
    return (
        <TextField
            label={props.label}
            variant="standard"
            onBlur={alterEdit}
            fullWidth
            name={props.name}
            InputLabelProps={{ shrink: true }}
            value={props.value}
        />
    )
}

export default CompEditUser;