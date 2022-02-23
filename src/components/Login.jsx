import Header from './shared/Header'
import MainLogin from './shared/MainLogin'

function Login() {
  const drawerWidth = 280;
  return (
    <>
      <Header drawerWidth={drawerWidth} style={{display: 'contents'}} />
      <MainLogin drawerWidth={drawerWidth}/>
    </>
  )
}

export default Login