import Header from './shared/Header'
import Login from './Login'
import Forgotpw from './Forgotpw'
import useWidthSize from '../utils/useWidthSize'

function MainComponents() {
  const { width } = useWidthSize()
  const drawerWidth = 280
  return (
    <>
      <Header drawerWidth={drawerWidth} style={{display: 'contents'}} />
      { window.location.pathname === "/login" &&
        <Login drawerWidth={drawerWidth} widthWindow={width} />
      }
      { window.location.pathname === "/forgotpw" &&
        <Forgotpw drawerWidth={drawerWidth} widthWindow={width} />
      }
    </>
  )
}

export default MainComponents