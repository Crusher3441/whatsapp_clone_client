import { Dialog, Box , styled} from "@mui/material"
import Menu from "./menu/Menu"
import EmptyChat from "./chat/EmptyChat"
import ChatBox from "./chat/ChatBox"

import { useContext } from "react"
import {AccountContext} from "../../context/AccountProvider"

const Component = styled(Box)`
    
    display:flex;
    
`
const LeftComponent = styled(Box)`
    
    min-width: 450px;

    
`
const RightComponent = styled(Box)`
    height:100%;

    width:75.5%;
    min-width:300px;
    border-left: 1px solid #eaeaea;
    
`

const Dialogstyle = {
height:"95%",
width:"95%",
marginTop:"5%",
maxWidth:"100%",
maxHeight:"100%",
boxShadow:"none",
overflow:"hidden",
borderRadius:"0"
}
const ChatDialog = () =>{

    const { person } = useContext(AccountContext)


    return(
        <Dialog
        open={true}
        PaperProps={{sx:Dialogstyle}}
        hideBackdrop={true}
        maxWidth={"md"}
        >
          <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                { Object.keys(person).length?<ChatBox/>:<EmptyChat/> }
            </RightComponent>
          </Component>
        </Dialog>
    )
}

export default ChatDialog