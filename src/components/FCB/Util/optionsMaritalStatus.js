import MenuItem from '@mui/material/MenuItem';
import MDBox from "components/MDBox";

export function maritalStatus() {
    return (
       <MDBox>
            <MenuItem value={true}>Sim</MenuItem>
            <MenuItem value={false}>Não</MenuItem>
       </MDBox>
    )
}

export default [
    { value: "Solteiro(a)", label: "Solteiro(a)"},
    { value: "Casado(a)", label: "Casado (a)"},
    { value: "Divorciado(a)", label: "Divorciado(a)"},
    { value: "Viúvo(a)", label: "Viúvo(a)"},
    { value: "Separado judicialmente", label: "Separado judicialmente"}         
  ]

