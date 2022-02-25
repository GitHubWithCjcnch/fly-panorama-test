import { Button, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"
import DrawerProfile from "./drawer/DrawerProfile"
import useWidthSize from '../../utils/useWidthSize'

function Nav({ drawerWidth }) {
  const { width } = useWidthSize()
  const [state, setState] = useState(false)
  const toggleDrawer = (open) => (event) => {
    setState(open)
  }
  
  return (
    <nav>
      {width >= 900 ? (
        <DrawerProfile drawerWidth={drawerWidth} open={state} variant={"permanent"} />
        ) : (
          <>
            <Button 
              onClick={toggleDrawer(true)}
              disableRipple={true}
            >
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Button>
            <DrawerProfile drawerWidth={drawerWidth} open={state} onHandleToggle={toggleDrawer(false)} />
          </>
        )
      }
    </nav>
  )
}

export default Nav