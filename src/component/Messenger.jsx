import LoginDialog from "./account/LoginDialog";
import {AppBar,Toolbar,styled,Box} from "@mui/material"
import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const Component = styled(Box)`
  height:100vh;
  background-color:#DCDCDC;
`

const AfterLoginHeader = styled(AppBar)`
  background-color:#00A884;
  height: 125px;
  box-shadow: none;
`
const LoginHeader = styled(AppBar)`
  background-color: #00bfa5;
  height: 220px;
  box-shadow: none;
`


const Messenger = () => {
  const {account} = useContext(AccountContext)
  return (
    <Component>{
        account?<>
        <AfterLoginHeader>
         <Toolbar></Toolbar>
        </AfterLoginHeader>
        <ChatDialog/></>: 
        <>
        <LoginHeader>
         <Toolbar></Toolbar>
        </LoginHeader>
        <LoginDialog/>
        </>
      }
     
    </Component>
  );
};

export default Messenger;