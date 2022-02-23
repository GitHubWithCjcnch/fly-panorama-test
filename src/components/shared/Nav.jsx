import { Button, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from "react"
import DrawerProfile from "./drawer/DrawerProfile"

function Nav({ drawerWidth }) {
  const [state, setState] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function updateWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [width])

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