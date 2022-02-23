import { Avatar, Container, Typography } from "@mui/material"
const imgStyle = {
  width: '90px',
  height: '100px',
  borderRadius: '10px'
}

function ProfileInfo() {
  return (
    <Container fixed sx={{backgroundColor: '#2B0062'}}>
      <Container 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          padding: '16px 0 16px'
        }}
      >
        <Container style={{display: 'flex', flexDirection: 'row', gap: 40, justifyContent: 'center'}}>
          <Avatar
            alt="avatar profile"
            src={require("../../../assets/avatar_profile.png")}
            sx={{ width: 100, height: 100 }}
          />
          <img
            style={imgStyle}
            alt="pid_logo"
            src={require('../../../assets/pid_logo_primary.png')} 
          />
        </Container>
        <Typography style={{color: 'lawngreen'}}>Você precisa realizar o login</Typography>
      </Container>
    </Container>
  )
}

export default ProfileInfo