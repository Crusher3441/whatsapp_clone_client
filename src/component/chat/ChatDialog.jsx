import { Dialog, Box , styled} from "@mui/material"
import Menu from "./menu/Menu"
import EmptyChat from "./chat/EmptyChat"

const Component = styled(Box)`
    
    display:flex;
    
`
const LeftComponent = styled(Box)`
    
    min-width: 450px;

    
`
const RightComponent = styled(Box)`
    
    width:73%;
    min-width:300px;
    border-left: 1px solid #eaeaea;
    
`

const ChatDialog = () =>{
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
                <EmptyChat/>
            </RightComponent>
          </Component>
        </Dialog>
    )
}

export default ChatDialog