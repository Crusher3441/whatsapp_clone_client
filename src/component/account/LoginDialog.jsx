import { Box, Dialog, Typography , List, ListItem, styled} from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
  display: flex;
`

const Title = styled(Typography)`
  font-size: 26px;
  font-weight: 300;
  color: #525252;
  font-family:inherit;
  margin-bottom: 25px
`

const StyledList = styled(List)`
  & > li{
    padding:0;
    margin-top:15px;
    font-size: 18px;
    line-height:28px;
    color:#4a4a4a;
  }`

const Container = styled(Box)`
  padding: 56px 0px 56px 56px
`
const QRcode = styled("img")({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
})

const Dialogstyle = {
    height:"95%",
    width:"60%",
    marginTop:"12%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden"
}

const LoginDialog = () => {
    
    const { setAccount } = useContext(AccountContext)
    const onLoginSuccess = (res) => {
        const decoded = jwtDecode(res.credential);
        setAccount(decoded)
        console.log(decoded)

    }
    
    const onLoginError = (res) => {
        console.log("Login Failed",res)
    }
   return(
    
    <Dialog
    open={true}
    PaperProps={{sx:Dialogstyle}}
    hideBackdrop={true}
    >
        <Component>
            <Container>
                <Title> To use Whatsapp on your computer</Title>
                <StyledList>
                    <ListItem>1. Open Whatsapp on your phone </ListItem>
                    <ListItem>2. Tap Menu or Settings and select Linked Devices </ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code </ListItem>
                </StyledList>
            </Container>
            <Box style={{position:'relative'}}>
                <QRcode src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"></QRcode>
                <Box style={{position:"absolute", top:'50%',transform:'translateX(25%)'}}>
                    <GoogleLogin
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                    />
                </Box>

            </Box>
        </Component>
    </Dialog>
   )
}

export default LoginDialog;
