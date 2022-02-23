import { Box, Typography, TextField, Button } from '@mui/material'

function MainForgotpw({ drawerWidth }) {
  return (
    <Box
      component="main"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, float: 'right' }}
    >
      <form style={{ padding: '12px 112px 12px' }}>
        <Typography variant="h4">Esqueci minha senha</Typography>
        <Typography variant="subtitle1">Forneça seu email atual para receber as instruções de mudança de senha</Typography>
          <TextField
            sx={{width: '100%'}}
            required
            id="outlined-required"
            label="Email"
            variant="standard"
            margin='dense'
          />
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <Button type='submit' variant="contained" color="success">Enviar</Button>
        </div>
      </form>
    </Box>
  )
}

export default MainForgotpw