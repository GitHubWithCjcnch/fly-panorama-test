import { AppBar, Toolbar, Box, Button, ButtonBase, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import TabMenu from "./TabMenu";
import Nav from './Nav'
import useWidthSize from '../../utils/useWidthSize'

function Header({ drawerWidth }) {
    const { width } = useWidthSize()
    return (
        <Box sx={{ flexgrow: 1 }}>
            <AppBar
                position="fixed"
                style={{ display: 'contents' }}
            >
                <Toolbar sx={{ bgcolor: '#5B2E91' }}>
                    <Nav drawerWidth={drawerWidth} />
                    <Button
                        sx={{ padding: '10px', flexGrow: 1 }}
                        disableRipple={true}
                    >
                        <img
                            style={{ width: '136px', maxHeight: '60px' }}
                            src={require("../../assets/logo_fly_id.png")}
                            alt="fly-logo"
                        />
                    </Button>
                    <TabMenu />
                    {
                        width >= 900 && (
                            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ButtonBase
                                    variant="text"
                                    sx={{ padding: 1, ml: 1 }}
                                >
                                    <Typography>Entrar</Typography>
                                </ButtonBase>
                            </Link>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header