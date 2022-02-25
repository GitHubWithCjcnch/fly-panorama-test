import { TextField, Box, Button, Typography, Alert, IconButton } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'

function Login({ drawerWidth, widthWindow }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alertShow, setAlertShow] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password)
    .catch((err) => {
        if(err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
          setAlertShow(true)
        }
      })
    }
    
    return (
      <Box 
        component="main"
        sx={{width: (widthWindow>900) ? `calc(100% - ${drawerWidth}px)`: 'auto', float: (widthWindow>900) ? 'right' : 'none'}}
      >
        <form style={{ padding: (widthWindow>900) ? '12px 160px' : '8px 32px' }} onSubmit={handleSubmit}>
          <Typography variant="h4">Entrar</Typography>
          <div style={{display: 'flex',flexDirection: 'column'}}>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              variant="standard"
              margin='dense'
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="password"
              label="Senha"
              type="password"
              variant="standard"
              inputProps={{minLength: 6}}
              margin='dense'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{marginTop: '16px', display: 'flex', justifyContent: 'space-between'}}>
            <Button type="submit" variant="contained" color="success">Enviar</Button>
            <Link to="/forgotpw" style={{textDecoration: 'none', color: 'inherit'}}>
              <Button variant="outlined" color="secondary">ESQUECI A MINHA SENHA</Button>
            </Link>
          </div>
        </form>
        {alertShow === true &&
          <Box sx={{ position: 'relative' }}>
            <Alert
              variant="filled"
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertShow(false);
                  }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ width: '70%', position: 'absolute', top: '55vh', left: '50%', transform: 'translateX(-50%)' }}
            >
              There is no user record corresponding to this identifier. The user may have been deleted.
            </Alert>
          </Box>
        }
      </Box>
  )
}

export default Login