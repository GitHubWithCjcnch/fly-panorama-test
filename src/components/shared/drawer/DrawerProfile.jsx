import { Drawer, Box } from "@mui/material"
import ListRouting from "../ListRouting"
import ProfileInfo from "./ProfileInfo"

function DrawerProfile({ drawerWidth, open, variant, onHandleToggle }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth
          }
        }}
        anchor={'left'}
        open={open}
        variant={variant}
        onClose={onHandleToggle}
      >
        <ProfileInfo />
        <ListRouting />
      </Drawer>
    </Box>
  )
}

export default DrawerProfile