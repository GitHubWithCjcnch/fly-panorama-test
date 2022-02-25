import { TextField, Box, Button, Typography } from '@mui/material';
import { getAuth, sendPasswordResetEmail} from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Forgotpw({ drawerWidth, widthWindow }) {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    let errorString;
    e.preventDefault()
    const authentication = getAuth();
    sendPasswordResetEmail(authentication, email)
    .catch((err) => {
      errorString = err.code
    })
    navigate('/', { state: { error: errorString }})
  }

  return (
    <Box
      component="main"
      sx={{ width: (widthWindow>900) ? `calc(100% - ${drawerWidth}px)`: 'auto', float: (widthWindow>900) ? 'right' : 'none' }}
    >
      <form style={{ padding: (widthWindow>900) ? '12px 112px' : '23px 30px' }} onSubmit={handleSubmit}>
        <Typography variant="h4">Esqueci minha senha</Typography>
        <Typography variant="subtitle1">Forneça seu email atual para receber as instruções de mudança de senha</Typography>
          <TextField
            sx={{width: '100%'}}
            required
            id="email"
            label="Email"
            variant="standard"
            margin='dense'
            onChange={(e) => setEmail(e.target.value)}
          />
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <Button type="submit" variant="contained" color="success">Enviar</Button>
        </div>
      </form>
    </Box>
  )
}

export default Forgotpw