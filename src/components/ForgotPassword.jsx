import Header from './shared/Header'
import MainForgotpw from './shared/MainForgotpw'

function ForgotPassword() {
  const drawerWidth = 280;
  return (
    <>
      <Header drawerWidth={drawerWidth} style={{display: 'contents'}} />
      <MainForgotpw drawerWidth={drawerWidth} />
    </>
  )
}

export default ForgotPassword