import { Box , styled, Typography } from "@mui/material"
import { Search , MoreVert } from "@mui/icons-material";


const Header = styled(Box)`
  height:44px;
  width: 98%;
  padding: 8px 16px;
  margin:0;
  background: #ECECEC;
  display: flex;
  align-items: center;
  
`

const Name = styled(Typography)`
  margin-left: 12px;
`
const OnlineStatus = styled(Typography)`
  margin-left: 12px;
  font-size: 12px;
  opacity: 0.6;
`
const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
  padding: 8px;
  font-size:24px;
  }
`

const Image = styled('img')({
    height:'44px',
    width:'44px',
    borderRadius: '50%',
})

const ChatHeader = ({ person }) => {
    return(
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name> {person.name} </Name>
                <OnlineStatus> Online Status </OnlineStatus>
            </Box>
            <RightContainer>
                <Search/>
                <MoreVert/>
            </RightContainer>
        </Header>
    )
}

export default ChatHeader