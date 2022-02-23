import { TextField, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

function MainLogin({ drawerWidth }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    alert(`Form submitted`);  
  }

  return (
      <Box 
        component="main" 
        sx={{ width: `calc(100% - ${drawerWidth}px)`, float: 'right'}}
      >
        <form style={{ padding: '12px 160px 12px' }} onSubmit={handleSubmit}>
          <Typography variant="h4">Entrar</Typography>
          <div style={{display: 'flex',flexDirection: 'column'}}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              variant="standard"
              margin='dense'
            />
            <TextField
              required
              id="outlined-required"
              label="Senha"
              variant="standard"
              margin='dense'
            />
          </div>
          <div style={{marginTop: '16px', display: 'flex', justifyContent: 'space-between'}}>
            <Button type='submit' variant="contained" color="success">Enviar</Button>
            <Link to="/forgotpw">
              <Button variant="outlined" color="secondary">ESQUECI A MINHA SENHA</Button>
            </Link>
          </div>
        </form>
      </Box>
  )
}

export default MainLogin