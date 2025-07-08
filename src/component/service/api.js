import axios from "axios";

const url = 'http://localhost:8000/add'

export const addUser = async (data) =>{
    try {
        await axios.post(url,data)
        console.log("successfully connected to API")  
    } catch (error) {
        console.log("Error while addUser API" , error)   
    }

}

export const getUsers = async () =>{
    try {
        let response = await axios.get(`${url}/users`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("Error while getUsers API" , error.message)
    }
}
