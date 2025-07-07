import { Search as SearchIcon } from "@mui/icons-material"
import { InputBase, Box, styled} from "@mui/material"

const Component = styled(Box)`
   background-color: #fff;
   height: 45px;
   padding: 8px;
   border-bottom: 1px solid #F2F2F2;
   display: flex;
   align-items: center;
`

const Wrapper = styled(Box)`
   background-color: #f0f2f5;
   height: 100%;
   width: 100%;
   position: relative;
   margin: 0 13px;
   border-radius: 10px
`

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 10px;
    color: #919191;
`

const InputField = styled(InputBase)`
   width: 100%;
   
   padding-left: 65px;
   padding-top: 22px;
   height: 15px;
   font-size: 16px;
`

const Search = () => {
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon/>
                </Icon>
                <InputField placeholder="Search or start new chat" />
            </Wrapper>
        </Component>
    )
}

export default Search