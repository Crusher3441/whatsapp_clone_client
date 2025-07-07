import { Box , Typography ,styled, Divider} from "@mui/material";

const Component = styled(Box)`
    height: 100vh;
   
    background-color: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    
`
const Container = styled(Box)`
    padding: 0 200px;
`

const Image = styled('img')({
    width: 400,
    marginTop: 100,
})

const Title = styled(Typography)`
    font-size:32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
`
const SubTitle = styled(Typography)`
    font-size: 14px;
    font-family: inherit;
    font-weight: 400;
    color: #667781;
`

const StyledDivider = styled(Divider)`
    opacity: 0.4;
    margin:40px 0;
`

const EmptyChat = () => {
    return(
        <Component>
            <Container>
                <Image src='https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg' alt="" />
                <Title> WhatsApp web </Title>
                <SubTitle> Now send and recieve messages without keeping your phone online. </SubTitle>
                <SubTitle> Use Whatsapp on up to 4 linked devices and 1 phone at the same time. </SubTitle>
                <StyledDivider/>
            </Container>
        </Component>
    )
}

export default EmptyChat