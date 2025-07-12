import { useState } from 'react';
import {Mic,TagFacesOutlined,AttachFileOutlined} from '@mui/icons-material';
import { Box , styled , InputBase} from '@mui/material';


const Component = styled(Box)`
    height: 73px;
    width:100%;
    background: #ededed;
    display:flex;
    padding: 0 15px;
    align-items: center;
    & > *{
    margin: 5px;
    color: #919191
    }

`


const Search = styled(Box)`
  background: #FFFFFF;
  border-radius: 18px;
  width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  font-size: 14px;
`

const ClipIcon = styled(AttachFileOutlined)`
  transform: rotate(30deg);
`

const Footer = ({sendText}) =>{
  const [text,setText] = useState('')
 
  

    return(
        <>
        <Component>
          <TagFacesOutlined/>
          <ClipIcon/>
          <Search>
            <InputField placeholder='Type a message' onChange={(e)=>setText(e.target.value)} onKeyPress={(e)=>sendText(e)}/>
          </Search>
          <Mic/>
        </Component>  
        </>
    )
}

export default Footer