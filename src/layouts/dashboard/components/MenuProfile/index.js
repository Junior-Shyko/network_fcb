import * as React from 'react';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MDButton from "components/MDButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MDTypography from "components/MDTypography";

export default function MenuProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MDButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="text"
      >
        Junior Oliveira <KeyboardArrowDownIcon fontSize='medium' />
      </MDButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Editar Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Alterar instituição</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
                <ListItemText>
                    <MDTypography
                        fontWeight="regular"
                        color="secundary"
                        variant="body2"
                    >
                        Sair
                    </MDTypography>
                </ListItemText>            
        </MenuItem>
      </Menu>
    </div>
  );
}