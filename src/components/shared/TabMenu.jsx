import * as React from 'react';
import { Menu, MenuItem, ButtonBase, IconButton, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';

function TabMenu() {
    const [anchorButton, setAnchorButton] = React.useState(null);
    const openMenu = Boolean(anchorButton);
    const handleClick = (event) => {
        setAnchorButton(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorButton(null);
    }
    
  return (
    <>
        <ButtonBase
            aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            onClick={handleClick}
        >
            <IconButton
                disableRipple="true"
                size="small"
                color="inherit"
            >
                <LanguageIcon sx={{mr: 1}} />
                <Typography>Linguagem</Typography>
            </IconButton>
        </ButtonBase>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorButton}
            open={openMenu}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
        >
            <MenuItem onClick={handleClose}>Português (BR)</MenuItem>
            <MenuItem onClick={handleClose}>English (GB)</MenuItem>
            <MenuItem onClick={handleClose}>English (US)</MenuItem>
            <MenuItem onClick={handleClose}>Español (ES)</MenuItem>
        </Menu>
    </>
  )
}

export default TabMenu