import { Box , styled, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
   display: flex;
   justify-content: center;
`

const Image = styled("img")({
    borderRadius: "50%",
    width: "200px",
    padding: "25px 0",
    
})

const BoxWrapper = styled(Box)`
    background-color: #ffffff;
    padding: 12px 20px 2px;
    border-shadow: 0 8px 3px rgba(0,0,0,0.08);
    & : first-child{
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & : last-child{
        font-size: 20px;
        margin: 14px 0;
        color: #4A4A4A;
    }
`

const DiscriptionConatiner = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
      font-size: 13px;
      color: #8696a0;
    }
`

const Profile = () => {
    const { account } = useContext(AccountContext)
    return (
        <>
        <ImageContainer>
            <Image src={account.picture} alt="Profile Image" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DiscriptionConatiner>
            <Typography> This is not your username or pin. This name will be visible to your whatsapp contacts </Typography>
        </DiscriptionConatiner>
        <BoxWrapper>
            <Typography> About </Typography>
            <Typography> Your Status goes here </Typography>
        </BoxWrapper>
        </>
    )
}

export default Profile
