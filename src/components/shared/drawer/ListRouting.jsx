import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function ListRouting() {
  const [open, setOpen] = useState(true)
  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <List
      sx={{width: '100%', maxWidth: 360}}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Usuário" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to='/login' style={{textDecoration: 'none', color: 'inherit'}}>  
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText primary="Entrar" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  )
}

export default ListRouting